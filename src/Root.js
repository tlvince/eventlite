import React from 'react'
import { Provider } from 'react-redux'

import AppContainer from './app/AppContainer'
import store from './store'

export default () =>
  <Provider store={store}>
    <AppContainer />
  </Provider>
