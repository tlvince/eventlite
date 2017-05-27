import React from 'react'
import { connect } from 'react-redux'

import App from './App'
import { getEvents } from './app-reducer'

const AppContainer = ({
  events,
  fetching,
  getEvents
}) => {
  return (
    <App
      events={events}
      fetching={fetching}
      onGetEvents={getEvents}
    />
  )
}

const mapStateToProps = ({app}) => ({...app})
const mapDispatchToProps = {
  getEvents
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
