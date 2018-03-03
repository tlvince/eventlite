import React, { Fragment } from 'react'

const Event = ({event}) =>
  <Fragment>
    <time>{event.time}</time>
    <main>
      <a
        rel="noopener noreferrer"
        href={event.url.split('?')[0]}
        target="_blank"
      >{event.name}</a>
    </main>
    <small>{event.tags}</small>
  </Fragment>

export default Event
