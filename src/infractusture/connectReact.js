import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

export const configureStore = (
  initialState = {},
  middleware = [],
  reducers
) => {
  const combinedReducers = combineReducers({
    ...reducers
  })

  let composeEnhancers = null
  if (process.env.NODE_ENV === 'development') {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  } else {
    composeEnhancers = compose
  }

  const enhancer = composeEnhancers(applyMiddleware(...middleware))
  const store = createStore(combinedReducers, initialState, enhancer)

  return store
}
