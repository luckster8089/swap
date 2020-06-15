import React, { useState } from 'react'
import Header from './components/Header'
import Routes from './config/routes'
import './App.css'
import UserModel from './models/user'
import { withRouter } from 'react-router-dom';

function App(props) {

  const [ currentUser, setCurrentUser ] = useState(localStorage.getItem('uid'))

  const storeUser = (userId) => {
    setCurrentUser(userId)
    localStorage.setItem('uid', userId)
  }

  const logout = (event) => {
    event.preventDefault()

    localStorage.removeItem('uid')
    UserModel.logout()
      .then(res => {
        console.log(res)
        setCurrentUser(null)
        props.history.push('/login')
      })
  }

  return (
    <div className="App">
      <Header currentUser = {currentUser} logout = { logout } />
      <Routes 
        currentUser = {currentUser}
        storeUser= {storeUser}
        logout = { logout }
      />
    </div>
  );
}

export default withRouter(App)
