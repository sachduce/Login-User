import React from 'react'
import {updateUser} from '../actions/index'
import {connect} from 'react-redux'
import {normalizeBoolean} from '../utils/index'
import {Row,Input,Button} from 'react-materialize'
//import Popup from "reactjs-popup"
import Pop from "../components/Pop"

const EditUser =(props)=>{
    
     this.handleSubmit = (data) => {
        const {id,inputFirstName,inputLastName,inputIsAdmin,inputPassword} = data
        if(!inputFirstName.trim()|| !inputLastName.trim()|| !inputIsAdmin.trim() || !inputPassword.trim() ){
            return
        }
        
        props.dispatch(updateUser(id,inputFirstName,inputLastName,normalizeBoolean(inputIsAdmin) ,inputPassword))
        console.log(inputFirstName.value+" "+inputLastName.value+" "+inputIsAdmin.value + " "+inputPassword)
        
}
console.log(props.user)      
return (<Pop handleSubmit={this.handleSubmit} trigger={<Button >Edit</Button>} user={props.user}/>)
}
export default connect()(EditUser)