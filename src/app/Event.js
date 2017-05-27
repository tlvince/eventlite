import React from 'react'

import './event.css'

const Event = ({event, hideEvent}) =>
  <li>
    <time>{event.time}</time>
    <a
      rel="noopener noreferrer"
      href={event.url.split('?')[0]}
      target="_blank"
    >{event.name}</a>
    <p>{event.location}</p>
    <small>{event.category && '#' + event.category}</small> <small>{event.format && '#' + event.format}</small>
    <p>
      <small>
        <a href='#' onClick={() => hideEvent(event)}>Hide</a>
      </small>
    </p>
  </li>

export default Event
