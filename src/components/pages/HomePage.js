import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import {Button} from 'semantic-ui-react'
import * as action from '../action/auth'


const Homepage = ({isAuthenticated, logout}) => (
    <div>
 <h1>home page welcome</h1>

{isAuthenticated?  <Button content="Logout" onClick={() => logout()  } />:<div><Link to="/login">Login</Link>OR <Link to="/signup">logout</Link></div> }</div>

);

Homepage.propTypes = {
    isAuthenticated:propTypes.bool.isRequired,
    logout:propTypes.func.isRequired

}
function mapStateToProps(state){
return {
    isAuthenticated:!! state.user.token

};
}

export default connect(mapStateToProps, {logout: action.logout}) (Homepage);
