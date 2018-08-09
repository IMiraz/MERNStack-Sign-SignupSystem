import React, { Component } from 'react'
import {Form, Button} from 'semantic-ui-react'
import validator from 'validator'

export default class LoginForm extends Component {
    state= {
        data:{
        emai:"",
        password:"",
        },
        loading:false,
        erorr:{}
      
    }

    onChange = (e) => {
        this.setState({
            data:{...this.state.data,[e.target.name]:e.target.value}
        })
    }


onSubmit = () => {
     const error = this.validate(this.state.data);
     this.setState ( {
         error
     });
};

validate = (data) => {
    const error = {};
if(!validator.isEmail(data.emai)) error.email = "can't be invalid"
 if(!data.password) error.password ="can't be blink";
    return error;
}



  render() {
      const {data} = this.state;
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
        onChange={this.onChange}
        >
         </input>
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
        >
         </input>
        </Form.Field>
          <Button className="primary">Login</Button>
        </Form>
        
      </div>
    )
  }
}

