import React, { Component } from 'react';
import mutation from '../mutation/Signup';
import {graphql} from 'react-apollo';
import AuthForm from './AuthForm';
import query from '../queries/CurrentUser';
import {hashHistory} from 'react-router';
 class SignupForm extends Component {
     constructor(props){
         super(props);
         this.state={
             errors:[]
         };
     }

     componentWillUpdate(nextProps){
        if(!this.props.data.user && nextProps.data.user){
            hashHistory.push('/dashboard');
        }

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
        <h3>Sign up</h3>
        <AuthForm
        errors={this.state.errors}
        onSubmit={this.onSubmit.bind(this)}
        />
      </div>
    )
  }
}

export default graphql(mutation)(SignupForm);