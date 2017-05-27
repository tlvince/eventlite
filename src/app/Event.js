import React from 'react'
import format from 'date-fns/format'

import './event.css'

const Event = ({event}) =>
  <li>
    <time>{format(event.date, 'HH:mm')}</time>
    <a
      rel="noopener noreferrer"
      href={event.url.split('?')[0]}
      target="_blank"
    >{event.name}</a>
    <p>
      {event.venue && event.venue + ', '}
      {event.location}
    </p>
    <small>{event.category && '#' + event.category}</small> <small>{event.format && '#' + event.format}</small>
  </li>

export default Event
