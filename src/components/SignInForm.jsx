import React, { Component } from 'react';
import allUsers from '../data/users.json';
import { Redirect } from 'react-router-dom';

class SignInForm extends Component {
  constructor() {
    super();
    this.state = {
      userLoggedIn: sessionStorage.getItem('userLoggedIn') || false,
      email: '',
      password: '',
      allUsers: allUsers
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;
    const nameofTarget = event.target.name;
    this.setState({ [nameofTarget]: value });
  }

  handleSubmit(event) {
    const email = this.state.email;
    const password = this.state.password;
    let credentialsMatch = this.state.allUsers.filter(function(userData){
      return (userData.email === email && userData.password === password)
    });
    let userLoggedIn = credentialsMatch.length === 1
    sessionStorage.setItem('userLoggedIn', userLoggedIn)
    this.setState({ userLoggedIn: userLoggedIn })
  }

  render() {
    if(this.state.userLoggedIn === "true") {
      return(
        <Redirect to="/products" />
      )
    }
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              <div className="card-body">
                <h5 className="card-title text-center">Sign In</h5>
                <form className="form-signin" onSubmit={this.handleSubmit}>
                  <div className="form-label-group">
                    <input type="email" name="email" id="inputEmail" className="form-control" placeholder="Email address" autoFocus onChange={this.handleChange} />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>

                  <div className="form-label-group">
                    <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" onChange={this.handleChange} />
                    <label htmlFor="inputPassword">Password</label>
                  </div>

                  <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SignInForm;
