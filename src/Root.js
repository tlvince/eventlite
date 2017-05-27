import React from 'react'
import { Provider } from 'react-redux'

import AppContainer from './app/AppContainer'
import store from './store'

const Root = () =>
  <Provider store={store}>
    <AppContainer />
  </Provider>

export default Root
