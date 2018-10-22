import React, { Component } from 'react';
import AuthForm from './AuthForm';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import query from '../queries/CurrentUser';
 class LoginForm extends Component {
     constructor(){
         super(props);
         this.state={
             errors:[]
            };
     }
      

    onSubmit({email,password}){
        this.props.mutate({
            variables:{email,password},
            refetchQueries:[{query}]
        }).catch(res=>{
            const errors= res.graphQLErrors.map(error=>error.message);
            this.setState({errors:errors})
        })
    }
  render() {
    return (
      <div>
        <h3>Login  </h3>
        <AuthForm 
        errors={this.state.errors}
        onSubmit={this.onSubmit.bind(this)}/>
      </div>
    )
  }
}
const mutation = gql`
    mutation Login($email:String,$password:String){
        login(email:$email,password:$password){
            id
            email
        }
    }

`;
export default graphql(mutation)(LoginForm);