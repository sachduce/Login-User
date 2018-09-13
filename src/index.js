import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import rootReducer from './reducers'
import { BrowserRouter as Router } from 'react-router-dom'
import Root from './routes'


const store = createStore(rootReducer)

render(
    <Router>
     <Root store={store} />
    </Router>,
  document.getElementById('root')
)