import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import query from '../queries/CurrentUser';
import {hashHistory} from 'react-router';

export default class RequireAuth extends Component {
 componentDidMount(){
     if(!this.props.data.user && !this.props.data.loading){
         hashHistory.push('/login'); 
     }
 }
}
graphql(query)(RequireAuth);