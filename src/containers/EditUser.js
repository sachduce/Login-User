import React from 'react'
import {updateUser} from '../actions/index'
import {connect} from 'react-redux'
import {normalizeBoolean} from '../utils/index'
import {Row,Input,Button} from 'react-materialize'
//import Popup from "reactjs-popup"
import Pop from "../components/Pop"

const EditUser =(props)=>{
    this.user={}
     this.handleSubmit = (data) => {
        const {inputFirstName,inputLastName,inputIsAdmin,inputPassword} = data
        if(!inputFirstName.trim()|| !inputLastName.trim()|| !inputIsAdmin.trim() || !inputPassword.trim() ){
            return
        }
        props.dispatch(updateUser(props.user.id,inputFirstName,inputLastName,normalizeBoolean(inputIsAdmin) ,inputPassword))
        console.log(inputFirstName.value+" "+inputLastName.value+" "+inputIsAdmin.value + " "+inputPassword)
        
}
console.log(props.user)
return (<Pop  handleSubmit={this.handleSubmit} trigger={<Button >Edit</Button>} user={props.user}/>)
    // if(typeof props.user==undefined){
    //     return(<Pop user={this.user} handleSubmit={this.handleSubmit} trigger={<Button floating large className='red' waves='light' icon='add' />}/>)
    // }
    // else{
        
    // }      

}
export default connect()(EditUser)