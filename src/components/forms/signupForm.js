import React, { Component } from 'react'
import propTypes from 'prop-types'
import {Form, Button} from 'semantic-ui-react'
import validator from 'validator'
import InlineErrors from '../messages/InlineError'
 class SignupForm extends Component {

 state = {
     data:{
         email:"",
         password:"",
     },
  loading:false,
  errors:{}
 }
onChange = (e) =>{
    this.setState({
data:{...this.state.data,
     [e.target.name]:e.target.value}
    })

}

onSubmit = () => {
    // e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({errors});
    if(Object.keys(errors).length===0) {
   this.setState({loading:true});
this.props.submit(this.state.data)

 .catch(err => this.setState({
      errors:err.response.data.errors,
      loading:false
 })
);
    }

};

 validate = data => {
     const errors={};
     if(!validator.isEmail(data.email))
      errors.email = "Invalid email";
      if(!data.password) errors.password = "Can't Be Blink";
      return errors;
 }



  render() {
const {data, errors} = this.state;
    return (
      <div>
 <Form onSubmit={this.onSubmit} loading={this.state.loading}>

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
          <Button className="primary">Signup</Button>
        </Form>
      </div>
    )
  }
}

SignupForm.propTypes = {
    submit:propTypes.func.isRequired
}

export default SignupForm