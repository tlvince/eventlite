import dlv from 'dlv'
import delay from 'delay'
import pSeries from 'p-series'
import format from 'date-fns/format'
import { get, asJson } from 'simple-get-promise'
import { stringify } from 'querystringify'

import render from './render'

const fetchEvents = page => {
  const api = 'https://www.eventbriteapi.com/v3/events/search/'

  const query = {
    sort_by: 'date',
    'location.within': '5km',
    'location.latitude': '51.5006807',
    'location.longitude': '-0.0574745',
    price: 'free',
    token: process.env.EVENTBRITE_TOKEN,
    expand: 'category,format'
  }

  if (page) {
    query.page = page
  }

  const url = `${api}?${stringify(query)}`
  return get(url).then(asJson)
}

const parseEvents = events => {
  const fields = {
    id: 'id',
    url: 'url',
    name: 'name.text',
    date: 'start.local',
    format: 'format.short_name_localized',
    category: 'category.short_name_localized'
  }

  return events
    .map(event => Object.keys(fields).reduce((index, key) => {
      index[key] = dlv(event, fields[key])
      return index
    }, {}))
    .map(event => Object.assign({}, event, {
      url: event.url.split('?')[0],
      date: format(event.date, 'dddd, Do MMMM'),
      time: format(event.date, 'HH:mm'),
      tags: event.category && event.format ? `#${event.category} #${event.format}` : '(no tags)'
    }))
    .reduce((index, event) => {
      if (!index[event.date]) {
        index[event.date] = []
      }
      index[event.date].push(event)
      return index
    }, {})
}

const pages = Array.from(new Array(20)).map((_, i) => i + 1)
const promiseFuns = pages.map(page => () => delay(Math.random() * 1000)
  .then(() => {
    console.warn(new Date().toISOString(), 'fetching page', page)
    return fetchEvents(page)
  }))

pSeries(promiseFuns)
  .then(reses => reses.reduce((i, res) => i.concat(res.events), []))
  .then(parseEvents)
  .then(render)
  .catch(err => console.error(err))
