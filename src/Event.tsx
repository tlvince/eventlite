import React, { Fragment, FunctionComponent } from 'react'

interface Props {
  event: Eventlite.Event
}

const Event: FunctionComponent<Props> = ({ event }) => (
  <Fragment>
    <time>{event.time}</time>{' '}
    <a rel="noopener noreferrer" href={event.url.split('?')[0]} target="_blank">
      {event.name}
    </a>{' '}
    <small>{event.tags}</small>
  </Fragment>
)

export default Event
