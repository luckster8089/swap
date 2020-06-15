import React, { Component } from 'react';
import UserModel from '../models/user';
import { FormControl, makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField';
import Header from '../components/Header'

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    UserModel.login(this.state)
      .then(data => {
        console.log(data)
        if (!data.data) {
          return false
        }
        this.props.storeUser(data.data)
        this.props.history.push(`/profile/${this.props.currentUser}`)
      })
      .catch(err => console.log(err))
  }

  

  
  render() {
    return (
      <div>
      <Header currentUser = {this.props.currentUser} logout={this.props.logout} />
      <form className={makeStyles.root} noValidate autoComplete="off">
        <h4>Login</h4>
        
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Email</label>
            <input 
              onChange={this.handleChange} 
              type="email" 
              id="email" 
              name="email" 
              value={this.state.email} />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              onChange={this.handleChange} 
              type="password" 
              id="password" 
              name="password" 
              value={this.state.password} />
          
          </div>
          <button type="submit">Login</button>
        </form>
        </form>
        
      </div>
    );
  }
}

export default Login;