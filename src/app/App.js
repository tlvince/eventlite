import React from 'react'

import Events from './Events'

const App = ({
  events,
  fetching,
  getEvents,
  onNextPage
}) =>
  <div>
    <h1>Eventlite</h1>
    <button
      onClick={getEvents}
      disabled={fetching}
    >{events ? 'Update' : 'Get'} Events</button>
    <h2>Events</h2>
    <Events
      events={events}
      onNextPage={onNextPage}
    />
  </div>

export default App
