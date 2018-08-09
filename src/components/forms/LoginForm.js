import React, { Component } from 'react'
import PropTypes from "prop-types";
import {Form, Button} from 'semantic-ui-react'
import Validator from 'validator'
import InlineErrors from '../messages/InlineError'

export default class LoginForm extends Component {
    state= {
        data:{
        email:"",
        password:"",
        },
        loading:false,
        error:{}

    }

    onChange = (e) => {
        this.setState({
            data:{...this.state.data,[e.target.name]:e.target.value}
        })
    }


onSubmit = () => {
     const error = this.validate(this.state.data);
     this.setState({ error });

};

validate = data => {
    const error = {};
    if (!Validator.isEmail(data.email)) error.email = "Invalid email";
    if (!data.password) error.password = "Can't be blank";
    return error;
  };



  render() {
    const { data, error} = this.state;
    return (
      <div>
        <Form onSubmit={this.onSubmit}>
        <Form.Field>
        <label htmlfor="email"> Email</label>
        <input
        type="email"
        id="email"
        name="email"
        placeholder="example@gmail.com"
        value={data.email}
        onChange={this.onChange}/>
{error.email && <InlineErrors text={error.email} />}
        </Form.Field>

        <Form.Field>
        <label htmlfor="Password"> Password</label>
        <input
        type="password"
        id="password"
        name="password"
        placeholder="password"
        value={data.password}
        onChange={this.onChange}
        />
        {error.password && <InlineErrors text={error.password} />}

        </Form.Field>
          <Button className="primary">Login</Button>
        </Form>

      </div>
    )
  }
}

