import React, { Fragment } from 'react'

import Event from './Event'

const Events = ({ events }) => (
  <Fragment>
    {Object.keys(events).map(date => (
      <Fragment key={date}>
        <h2>{date}</h2>
        <ul>
          {events[date].map((event: Eventlite.Event) => (
            <li key={event.id}>
              <Event event={event} />
            </li>
          ))}
        </ul>
      </Fragment>
    ))}
  </Fragment>
)

export default Events
