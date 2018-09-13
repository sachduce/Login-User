import Userlist from '../components/UserList'
import {connect} from 'react-redux'
import { removeUser,updateUser } from '../actions';


const mapStateToProps = state =>({
    users: state.users
})

const mapDispatchToProps=(dispatch)=>{
    return{
        handleUpdate:(user)=>{
            return dispatch(updateUser(user))
        },   
        handleDelete:(id)=>{
            return dispatch(removeUser(id))
        }
 }
    
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Userlist)