import dlv from 'dlv'
import format from 'date-fns/format'
import { stringify } from 'querystringify'

const REQUEST_EVENTS = 'app/REQUEST_EVENTS'
const RECEIVE_EVENTS = 'app/RECEIVE_EVENTS'
const HIDE_EVENT = 'app/HIDE_EVENT'

const initialState = {
  fetching: false
}

export default (state = initialState, {type, ...actionProps}) => {
  switch (type) {
    case REQUEST_EVENTS:
      return {
        ...state,
        fetching: true
      }
    case RECEIVE_EVENTS:
      return {
        ...state,
        fetching: false,
        ...actionProps
      }
    case HIDE_EVENT:
      const nextEvents = {}
      nextEvents[actionProps.date] = state.events[actionProps.date]
        .filter(event => event.id !== actionProps.id)

      return {
        ...state,
        events: {...state.events, ...nextEvents}
      }
    default:
      return state
  }
}

const parseEvents = events => {
  const fields = {
    id: 'id',
    url: 'url',
    name: 'name.text',
    date: 'start.local',
    venue: 'venue.name',
    location: 'venue.address.localized_address_display',
    format: 'format.short_name_localized',
    category: 'category.short_name_localized'
  }

  return events
    .map(event => Object.keys(fields).reduce((index, key) => {
      index[key] = dlv(event, fields[key])
      return index
    }, {}))
    .map(event => ({
      ...event,
      url: event.url.split('?')[0],
      date: format(event.date, 'dddd'),
      time: format(event.date, 'HH:mm'),
      location: event.venue ? `${event.venue}, ${event.location}` : event.location
    }))
    .reduce((index, event) => {
      if (!index[event.date]) {
        index[event.date] = []
      }
      index[event.date].push(event)
      return index
    }, {})
}

const fetchEvents = () => {
  const api = 'https://www.eventbriteapi.com/v3/events/search/'

  const query = {
    sort_by: 'date',
    'location.within': '5km',
    'location.latitude': '51.5006807',
    'location.longitude': '-0.0574745',
    price: 'free',
    token: `${process.env.REACT_APP_EVENTBRITE_TOKEN}`,
    expand: 'category,format,venue'
  }

  const url = `${api}?${stringify(query)}`

  return fetch(url)
    .then(res => res.json())
    .then(res => parseEvents(res.events))
}

export const getEvents = () => dispatch => {
  dispatch({type: REQUEST_EVENTS})
  return fetchEvents()
    .then(events => dispatch({type: RECEIVE_EVENTS, events}))
}

export const hideEvent = ({id, date}) => dispatch => dispatch({
  type: HIDE_EVENT,
  id,
  date
})
