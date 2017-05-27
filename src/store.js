import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from './root-reducer'
import localstorageMiddleware from './localstorage-middleware'

const getPreloadedState = () => {
  const rawState = localStorage.getItem('state')
  if (!rawState) {
    return
  }
  return JSON.parse(rawState)
}

const getStoreEnhancers = () => {
  const middlewares = [
    thunkMiddleware,
    localstorageMiddleware
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
