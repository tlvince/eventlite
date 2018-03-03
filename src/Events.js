import React from 'react'
import Event from './Event'

const Events = ({events}) =>
  <ul>{Object.keys(events).map(date => (
    <li key={date}>
      <h2>{date}</h2>
      <ul>{events[date].map(event => (
        <Event event={event} key={event.id} />
      ))}</ul>
    </li>
  ))}</ul>

export default Events
