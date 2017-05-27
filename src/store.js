import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from './root-reducer'

const getPreloadedState = () => {
  const rawEvents = localStorage.getItem('events')
  if (!rawEvents) {
    return {
      app: {}
    }
  }
  const events = JSON.parse(rawEvents)
  return {
    app: {
      events
    }
  }
}

const getStoreEnhancers = () => {
  const middlewares = [
    thunkMiddleware
  ]

  const appliedMiddlewares = applyMiddleware(...middlewares)

  if (process.env.NODE_ENV !== 'production') {
    return composeWithDevTools(appliedMiddlewares)
  }

  return appliedMiddlewares
}

const store = createStore(rootReducer, getPreloadedState(), getStoreEnhancers())

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./root-reducer', () => {
    const nextRootReducer = require('./root-reducer').default
    store.replaceReducer(nextRootReducer)
  })
}

export default store
