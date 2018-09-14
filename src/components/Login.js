import React, { Component } from 'react'
import {  Redirect } from 'react-router-dom'
import {getCookie} from '../utils/index'
class Login extends Component {
    constructor(props){
        super(props)
        this.username = React.createRef();
        this.password = React.createRef();
        
    }
    handleLogin = () => {
        //console.log(`Username: ${this.username.current.value}, password: ${this.password.current.value}`)
        let data = {
            username: this.username.current.value.trim(),
            password: this.password.current.value.trim()
        }
        
        const { handleLogin } = this.props
        handleLogin(data)
    }
    render(){
        const { isAuthenticated,user } = this.props
        if (isAuthenticated) {
            document.cookie= 'isAdmin='+user.isAdmin
            document.cookie= "id="+user.id
        }
        
        if(getCookie('id')){
            let landingPath = { pathname: "/app/"+getCookie('id') }
            return <Redirect to={landingPath} />;
        }

        return (
            <div className="flex-container">
                <form id="loginForm">
                    <input type="text" id="username" ref={this.username} placeholder="Username" />
                    <input type="password" id="password" ref={this.password} placeholder="Password" />
                    <a href="javascript:;" id="login" onClick={this.handleLogin}>Login</a>
                </form>
            </div>
        )
    }
    
}

export default Login