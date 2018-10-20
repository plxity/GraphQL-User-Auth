import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import query from '../queries/CurrentUser';
import {Link} from 'react-router';
import gql from 'graphql-tag';
 class Header extends Component {
     logout(){
        
     }
    renderButtons(){
        const {loading,user}= this.props.data;
        if(loading){
            return(
                <div>
            </div>

            )
            
         }
         if(user){
             return(
                <li><a onClick={this.logout.bind(this)}>Logout</a></li>
            )}
         else{
             return(
                 <div>
                     <li>
                         <Link path="/signup">Sign Up</Link>
                    </li>
                    <li>
                        <Link path="/login">Login</Link>
                    </li>
                </div>
             )
         }
    }
  render() {
      
    return (
      <div>
          <Link to="/" className="brand-logo left">Back</Link>
        Header
        <ul className="right">
        {this.renderButtons()}
        </ul>
      </div>
    )
  }
}
const mutation= gql`


`;
export default graphql(mutation)(graphql(query)(Header));