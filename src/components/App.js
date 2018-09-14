import React from 'react'
import EditUser from '../containers/EditUser'
import ShowUsers from '../containers/ShowUsers';
import {getCookie} from '../utils/index'
import AddUser from '../containers/AddUser';


const App = ()=>(
    
    <div>
        <ShowUsers loggedUserIsAdmin={getCookie('isAdmin')} />
        <AddUser loggedUserIsAdmin={getCookie('isAdmin')} />
    </div>
)

export default App