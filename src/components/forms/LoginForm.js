import React, { Component } from 'react'
import propTypes  from "prop-types";
import {Form, Button, Message} from 'semantic-ui-react'
import Validator from 'validator'
import InlineErrors from '../messages/InlineError'

class LoginForm extends Component {
    state= {
        data:{
        email:"",
        password:"",
        },
        loading:false,
        errors:{}

    }

    onChange = (e) => {
        this.setState({
            data:{...this.state.data,[e.target.name]:e.target.value}
        })
    }


    onSubmit = () => {
      const errors = this.validate(this.state.data);
      this.setState({ errors });
      if (Object.keys(errors).length === 0) {
        this.setState({ loading: true });
        this.props.submit(this.state.data)
          .catch(err =>
            this.setState({
              errors: err.response.data.errors,  loading: false })
          );

      }

    };

    validate = data => {
      const errors= {};
      if (!Validator.isEmail(data.email)) errors.email = "Invalid email";
      if (!data.password) errors.password = "Can't be blank";
      return errors;
    };

  render() {
    const { data, errors} = this.state;
    return (
      <div>
        <Form onSubmit={this.onSubmit} loading={this.state.loading}>
{errors.global && <Message negative>
<Message.Header>
Something Went Wrong
</Message.Header>
<p>
{errors.global}
</p>

</Message>}
        <Form.Field  error={errors.email} >
        <label htmlFor="email"> Email</label>
        <input
        type="email"
        id="email"
        name="email"
        placeholder="example@gmail.com"
        value={data.email}
        onChange={this.onChange}/>
{errors.email && <InlineErrors text={errors.email} />}
        </Form.Field>

        <Form.Field error={errors.password}>
        <label htmlFor="Password"> Password</label>
        <input
        type="password"
        id="password"
        name="password"
        placeholder="password"
        value={data.password}
        onChange={this.onChange}
        />
        {errors.password && <InlineErrors text={errors.password} />}

        </Form.Field>
          <Button className="primary">Login</Button>
        </Form>

      </div>
    )
  }

}
LoginForm.propTypes  = {
    submit:propTypes.func.isRequired
  }

export default LoginForm;

