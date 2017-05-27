import React from 'react'
import { connect } from 'react-redux'

import Event from './Event'
import { hideEvent } from './app-reducer'

const EventContainer = props => <Event {...props} />

export default connect(null, {hideEvent})(EventContainer)
