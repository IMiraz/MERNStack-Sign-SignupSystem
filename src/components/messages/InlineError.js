import React from 'react'
import PropTypes from 'prop-types'

 const InlineErrors = ({text}) =>{
  return (
    <span style={{color:"red"}}>
     {text}
    </span>
  )
}
InlineErrors.PropTypes = {
  text:PropTypes.string.isRequired
}
export default InlineErrors
