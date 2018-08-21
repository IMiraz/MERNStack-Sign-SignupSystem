import React, { Component } from 'react'
import propTypes from 'prop-types'
import {connect} from 'react-redux'
import {signup} from '../action/users'
import SignupForm from "../forms/signupForm";
 class signupPage extends Component {

submit =data => this.props.signup(data)
.then(() =>  this.props.history.push("/dashborad"));

  render() {
    return (
      <div>
<SignupForm submit={this.submit} />
      </div>
    )
  }
}

signupPage.propTypes={
    history:propTypes.shape({
push:propTypes.func.isRequired
    }).isRequired,
signup:propTypes.func.isRequired

};

export default connect(null, {signup}) (signupPage);