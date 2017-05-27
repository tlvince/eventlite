import React from 'react'

import Event from './Event'

import './events.css'

const Events = ({events}) => {
  if (!events) {
    return null
  }
  return (
    <ul>{Object.keys(events).map(date => (
      <li key={date}>
        <h3>{date}</h3>
        <ul>{events[date].map(event => (
          <Event event={event} key={event.id} />
        ))}</ul>
      </li>
    ))}</ul>
  )
}

export default Events
