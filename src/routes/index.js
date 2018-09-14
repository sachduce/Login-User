import React from 'react'
import {Route} from 'react-router-dom'
import Login from '../containers/Login'
import Home from '../containers/Home'
import App from '../components/App';
import { Provider } from 'react-redux'

const Root = ({store})=>(
    <Provider store={store}>
     <div>
        <Route path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/app/:id' component={App} />
     </div>
    </Provider>
)

export default Root