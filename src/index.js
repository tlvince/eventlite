import React from 'react'
import { render } from 'react-dom'

import registerServiceWorker from './registerServiceWorker'

import Root from './Root'

const root = document.getElementById('root')

registerServiceWorker()
render(<Root />, root)

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./Root', () => {
    const NextApp = require('./Root').default
    render(<NextApp />, root)
  })
}
