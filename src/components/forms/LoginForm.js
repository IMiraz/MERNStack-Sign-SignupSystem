import React, { Component } from 'react'
import {Form, Button} from 'semantic-ui-react'

export default class LoginForm extends Component {
    state= {
        data:{},
        loading:false,
        erorr:{}
      
    }
  render() {
    return (
      <div>
        <Form>
          <Button className="primary">Login</Button>
        </Form>
        
      </div>
    )
  }
}

