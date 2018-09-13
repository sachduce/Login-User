import {connect} from 'react-redux'
import Login from '../components/Login'
import { doLogin } from '../actions';

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated,
    user: state.auth.user
    
})

const mapDispatchToProps=(dispatch)=>{
    return{
        handleLogin :(data)=>{
            return dispatch(doLogin(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)