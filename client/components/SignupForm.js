import React, { Component } from 'react';
import mutation from '../mutation/Signup';
import {graphql} from 'react-apollo';
import AuthForm from './AuthForm';
 class SignupForm extends Component {
     onSubmit({email,password}){
         this.props.mutate({
             variables:{email,password}
         })

     }
  render() {
    return (
      <div>
        <h3>Sign up</h3>
        <AuthForm
        errors={[]}
        onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    )
  }
}

export default graphql(mutation)(SignupForm);