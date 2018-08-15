import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import propTypes from 'prop-types'
import {Button} from 'semantic-ui-react'


const Homepage = ({isAuthenticated}) => (
    <div>
 <h1>home page welcome</h1>

{isAuthenticated?  <Button content="Logout"/>:<Link to="/login">Login</Link>}</div>

);

Homepage.propTypes = {

    isAuthenticated:propTypes.bool.isRequired

}
function mapStateToProps(state){
return {
    isAuthenticated:!! state.user.token

};
}

export default connect(mapStateToProps) (Homepage);
