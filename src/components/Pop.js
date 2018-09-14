import React,{Component} from 'react'
import {Row,Input,Button,Modal} from 'react-materialize'
import Popup from "reactjs-popup"
class Pop extends Component{
    constructor(props){
        super(props)
        const{user} = this.props
        this.state={
            firstName:user.firstName,
            lastName:user.lastName,
            isAdmin:user.isAdmin,
            password:user.password 
        }
        console.log(this.state)
    }
    
    
    handleSubmit =(e)=>{
        e.preventDefault();
        const {handleSubmit,user} = this.props
        let data={
            inputFirstName :this.form.inputFirstName.value,
            inputLastName :this.form.inputLastName.value,
            inputIsAdmin :this.form.inputIsAdmin.value,
            inputPassword :this.form.inputPassword.value,
        }
        handleSubmit(data)
        document.getElementById('modal'+user.id).style.display='none'
        if(!user.id){
            this.setState({firstName:'',lastName:'',password:'',isAdmin:''})
        }
    }

    render(){
        const {trigger, user} = this.props
        console.log(user)
        return(
                <Modal id={"modal"+user.id} trigger={trigger}  >
                 
                        <form  onSubmit={this.handleSubmit} ref={form => this.form = form}>
                            <Row >
                                <Input 
                                    s={6}
                                    label="First Name"
                                    name="inputFirstName"
                                    value={this.state.firstName}
                                    onChange={(e) => { this.setState({ firstName: e.target.value }) }}
                                     />
                                <Input
                                    s={6}
                                    label="Last Name" 
                                    name="inputLastName" 
                                    value={this.state.lastName}
                                    onChange={(e) => { this.setState({ lastName: e.target.value }) }}/>
                            </Row>
                            <Row>
                                <Input 
                                    s={12} label="Password" 
                                    type="password" name="inputPassword" 
                                    value={this.state.password}
                                    onChange={(e) => { this.setState({ password: e.target.value }) }} />
                            </Row>
                            <Row>
                                <Input 
                                    type='radio'  
                                    name="inputIsAdmin" 
                                    label='Admin' 
                                    value={true}
                                    checked={this.state.isAdmin}
                                    onChange={(e) => { this.setState({ isAdmin: e.target.value }) }}/>
                                <Input 
                                    type='radio' 
                                    value={false} 
                                    name="inputIsAdmin" 
                                    label='User'
                                    checked={!this.state.isAdmin}
                                    onChange={(e) => { this.setState({ isAdmin: e.target.value }) }}/>
                            </Row>
                            <Row>
                                <Button>Submit</Button>
                            </Row>
                        </form>        
                    
                 </Modal>
            
        )
        
    }
}

export default Pop