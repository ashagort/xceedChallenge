import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

export const configureStore = (
  initialState = {},
  middleware = [],
  reducers
) => {
  const combinedReducers = combineReducers({
    ...reducers
  })

  const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose

  const enhancer = composeEnhancers(applyMiddleware(...middleware))
  const store = createStore(combinedReducers, initialState, enhancer)

  return store
}
