import React, { Component } from 'react'
import {normalizeBoolean} from '../utils/index'
//import Pop from "../components/Pop"
import EditUser from '../containers/EditUser'
import {Row,Input,Button} from 'react-materialize'
//import PropTypes from 'prop-types'
class User extends Component{
    constructor(props){
        super(props)
       
    }
    
    render(){
        const {user,loggedUserIsAdmin,onUpdate, onDelete} = this.props
        console.log(this.props)
        
        return(
            <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.isAdmin ? 'Admin':'User'}</td>
                {
                    normalizeBoolean(loggedUserIsAdmin) &&
                    <td>
                        <EditUser user={user}/>
                        <Button onClick={onDelete}>Del</Button>
                    </td>
                }
                
            </tr>

        )
    }
}


// User.propTypes={
//     firstName :PropTypes.string.isRequired,
//     lastName :PropTypes.string.isRequired,
//     role : PropTypes.string.isRequired
// }

export default User