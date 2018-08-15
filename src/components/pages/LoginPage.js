import React, {Component} from 'react'
import propTypes from 'prop-types'
import LoginForm from '../forms/LoginForm'
import {connect} from 'react-redux'
import {login} from '../action/auth'

class LoginPage  extends Component {

  submit = data =>this.props.login(data).then(() =>
  this.props.history.push("/dashborad"));
  render() {
    return (
      <div>
        <h1>Login page</h1>
        <LoginForm submit={this.submit} />
      </div>
    );
  }
}

LoginPage.propTypes= {
  history: propTypes.shape({
    push: propTypes.func.isRequired
  }).isRequired,
  login: propTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);
