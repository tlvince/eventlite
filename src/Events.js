import React, { Fragment } from 'react'

import Event from './Event'

const Events = ({ events }) =>
  Object.keys(events).map(date => (
    <Fragment key={date}>
      <h2>{date}</h2>
      <ul>
        {events[date].map(event => (
          <li key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
    </Fragment>
  ))

export default Events
