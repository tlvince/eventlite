import React from 'react'

import './events.css'
import EventContainer from './EventContainer'

const Events = ({events, onNextPage}) => {
  if (!events) {
    return null
  }
  return (
    <div>
      <ul>{Object.keys(events).map(date => (
        <li key={date}>
          <h3>{date}</h3>
          <ul>{events[date].map(event => (
            <EventContainer event={event} key={event.id} />
          ))}</ul>
        </li>
      ))}</ul>
      <button onClick={onNextPage}>More</button>
    </div>
  )
}

export default Events
