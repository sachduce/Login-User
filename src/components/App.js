import React from 'react'
import AddUser from '../containers/AddUser'
import ShowUsers from '../containers/ShowUsers';
import {getCookie} from '../utils/index'
const loggedUserIsAdmin = getCookie('user')

const App = ()=>(
    <div>
        <ShowUsers loggedUserIsAdmin={loggedUserIsAdmin} />
        <AddUser loggedUserIsAdmin={loggedUserIsAdmin} />
    </div>
)

export default App