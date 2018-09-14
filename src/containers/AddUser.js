import React from 'react'
import {addUser} from '../actions/index'
import {connect} from 'react-redux'
import {normalizeBoolean} from '../utils/index'
import {Row,Input,Button} from 'react-materialize'
//import Popup from "reactjs-popup"
import Pop from "../components/Pop"

const AddUser =(props)=>{
    console.log(props)
    this.user={}
    this.handleSubmit = (data) => {
        const {inputFirstName,inputLastName,inputIsAdmin,inputPassword} = data
        if(!inputFirstName.trim()|| !inputLastName.trim()|| !inputIsAdmin.trim() || !inputPassword.trim() ){
            return
        }
        
        props.dispatch(addUser(inputFirstName,inputLastName,normalizeBoolean(inputIsAdmin) ,inputPassword))
        console.log(inputFirstName.value+" "+inputLastName.value+" "+inputIsAdmin.value + " "+inputPassword)
        
    }
    if(normalizeBoolean(props.loggedUserIsAdmin)){
        return(
            <Pop user={this.user} handleSubmit={this.handleSubmit} trigger={<Button floating large className='red' waves='light' icon='add' />}/>   
        )
    }
    return null
} 

export default connect()(AddUser)