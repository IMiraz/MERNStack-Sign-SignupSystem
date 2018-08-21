import React from 'react'
import propTypes from 'prop-types'

 const InlineErrors = ({text}) =>{
  return (
    <span style={{color:"red"}}>
     {text}
    </span>
  )
}
InlineErrors.propTypes = {
  text:propTypes.string.isRequired
}
export default InlineErrors
