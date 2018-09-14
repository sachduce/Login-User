import React, { Component } from 'react'
import {getCookie} from '../utils/index'
import { Redirect } from 'react-router-dom'
class Home extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        const {isAuthenticated} = this.props
        let landingPath
        if(isAuthenticated || getCookie('id')){
            landingPath = { pathname: "/app/"+getCookie('id') }
        }
        else{
            landingPath = { pathname: "/login" }
        }
        return <Redirect to={landingPath} />;
    }
}
export default Home