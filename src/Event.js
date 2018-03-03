import React from 'react'

const Event = ({event}) =>
  <li>
    <time>{event.time}</time>
    <main>
      <a
        rel="noopener noreferrer"
        href={event.url.split('?')[0]}
        target="_blank"
      >{event.name}</a>
    </main>
    <small>{event.tags}</small>
  </li>

export default Event
