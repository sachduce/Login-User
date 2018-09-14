import {connect} from 'react-redux'
import Home from '../components/Home'

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated,
   
    
})

const mapDispatchToProps={}

export default connect(mapStateToProps, mapDispatchToProps)(Home)