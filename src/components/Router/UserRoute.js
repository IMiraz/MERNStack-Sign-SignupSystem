import React from 'react'
import {Route} from 'react-router-dom'
import propTypes from 'prop-types'

 const UserRoute = ({component:Component, ...rest}) => {
  return (
<Route {...rest} render={props => <Component {...props}/>}/>
  )

}

UserRoute.propTypes={
 component:propTypes.func.isRequired

}

export default UserRoute;