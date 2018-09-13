import React, { Component } from 'react'
import User from './User'
import {normalizeBoolean} from '../utils/index'
import {Table} from 'react-materialize'
class UserList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const{users,loggedUserIsAdmin,handleUpdate,handleDelete} = this.props
        
        return(
            <div>
            <Table className="highlight">
            <thead>
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Role</td>
                    {normalizeBoolean(loggedUserIsAdmin)  && 
                    <td>Options</td>}
                </tr>
            </thead>
            <tbody>
                {users.map(user=>
                    <User 
                        key ={user.id}
                        user={user}
                        loggedUserIsAdmin = {loggedUserIsAdmin}
                        onUpdate ={()=>handleUpdate(user)}
                        onDelete ={()=>handleDelete(user.id)}
                    />    
                )}  
            </tbody>
            </Table>
            </div>
        )   
    }
}
export default UserList