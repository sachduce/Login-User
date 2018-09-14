import React from 'react'
import EditUser from '../containers/EditUser'
import ShowUsers from '../containers/ShowUsers';
import {getCookie} from '../utils/index'



const App = ()=>(
    
    <div>
        <ShowUsers loggedUserIsAdmin={getCookie('isAdmin')} />
        <EditUser loggedUserIsAdmin={getCookie('isAdmin')} />
    </div>
)

export default App