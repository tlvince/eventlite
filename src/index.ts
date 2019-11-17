import delay from 'delay' // eslint-disable-line import/default
import pSeries from 'p-series' // eslint-disable-line import/default
import format from 'date-fns/format'
import parseISO from 'date-fns/parseISO'
import { get, asJson } from 'simple-get-promise' // eslint-disable-line import/no-unresolved
import { stringify } from 'querystringify'

import render from './render'

const fetchEvents = (page: number) => {
  const api = 'https://www.eventbriteapi.com/v3/events/search/'

  const query = {
    page,
    sort_by: 'date', // eslint-disable-line @typescript-eslint/camelcase
    'location.within': '5km',
    'location.latitude': '51.5006807',
    'location.longitude': '-0.0574745',
    price: 'free',
    token: process.env.EVENTBRITE_TOKEN,
    expand: 'category,format',
  }

  const url = `${api}?${stringify(query)}`
  return get(url).then(asJson)
}

const parseEvents = (events: Eventlite.EventbriteEvent[]): Eventlite.Events => {
  return events
    .map((event: Eventlite.EventbriteEvent) => ({
      id: event?.id,
      url: event?.url,
      name: event?.name?.text,
      date: event?.start?.local,
      format: event?.format?.short_name_localized, // eslint-disable-line @typescript-eslint/camelcase
      category: event?.category?.short_name_localized, // eslint-disable-line @typescript-eslint/camelcase
    }))
    .map((event: Eventlite.Event) => {
      const date = parseISO(event.date)
      return {
        ...event,
        url: event.url.split('?')[0],
        date: format(date, 'EEEE, do MMMM'),
        time: format(date, 'HH:mm'),
        tags:
          event.category && event.format
            ? `#${event.category} #${event.format}`
            : '(no tags)',
      }
    })
    .reduce((index, event) => {
      if (!index[event.date]) {
        index[event.date] = []
      }
      index[event.date].push(event)
      return index
    }, {})
}

const totalPages = parseInt(process.env.EVENTBRITE_SEARCH_PAGES_LIMIT, 10)
const pages = Array.from(new Array(totalPages)).map((_, i) => i + 1)
const promiseFuns = pages.map(page => () =>
  delay(Math.random() * 10000)
    .then(() => {
      console.warn(new Date().toISOString(), 'fetching page', page)
      return fetchEvents(page)
    })
    .catch(error => {
      console.error(`page ${page} errorred`)
      console.error(error)
    })
)

pSeries(promiseFuns)
  .then(reses =>
    reses.filter(Boolean).reduce((i, res) => i.concat(res.events), [])
  )
  .then(parseEvents)
  .then(render)
  .catch(err => console.error(err))
