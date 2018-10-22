import React, { Component } from 'react';

class AuthForm extends Component {
    constructor(props){
        super(props);
        this.state={
            email:'',
            password:''
        }
    }
    onSubmit(event){
        event.preventDefault();
        this.props.onSubmit(this.state)
    }
  render() {
    return (
      <div className="row">
        <form className="col s4" onSubmit={this.onSubmit.bind(this)}>
            <div className="input-field">
                <label>Email</label>
                <input
                    value={this.state.email}
                    onChange={event=>this.setState({email:event.target.value})}
                />
            </div> 
            <div className="input-field">
                <label>Password</label>
                <input
                    value={this.state.password}
                    onChange={event=>this.setState({password:event.target.value})}
                />
            </div>
            <div className="errors">
                {this.props.errors.map(error=><div key={error}>{error}</div>)}
            </div>
            <button className="btn">Submit</button>
        </form>
        
      </div>
    )
  }
}
export default AuthForm;