import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import { Provider } from 'react-redux'
import { initialState } from './state/initialState'
import { configureStore } from './infractusture/connectReact'
import { reducers } from './state/reducers'
import { createMiddleware } from './infractusture/createMiddleware'

import App from './App'

const middleware = createMiddleware(initialState)

const store = configureStore(initialState, middleware, reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
