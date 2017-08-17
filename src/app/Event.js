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
    <p><small>{event.tags}</small></p>
    <p><small className='hide' onClick={() => hideEvent(event)}>Hide</small></p>
  </li>

export default Event
