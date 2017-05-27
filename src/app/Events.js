import React from 'react'

import './events.css'
import Event from './Event'
import EventContainer from './EventContainer'

const Events = ({events}) => {
  if (!events) {
    return null
  }
  return (
    <ul>{Object.keys(events).map(date => (
      <li key={date}>
        <h3>{date}</h3>
        <ul>{events[date].map(event => (
          <EventContainer event={event} key={event.id} />
        ))}</ul>
      </li>
    ))}</ul>
  )
}

export default Events
