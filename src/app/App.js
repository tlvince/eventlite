import React from 'react'

import Events from './Events'

const App = ({
  events,
  fetching,
  onGetEvents
}) =>
  <div>
    <h1>Eventlite</h1>
    <button
      onClick={onGetEvents}
      disabled={fetching}
    >Get Events</button>
    <h2>Events</h2>
    <Events events={events} />
  </div>

export default App
