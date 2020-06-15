import React from 'react'
import { Switch, Route} from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import Register from '../pages/Register'
import GiftCardList from '../pages/GiftCardList'
import NewGiftCard from '../pages/NewGiftCard'
import Page from '../pages/Page.js'
import GiftCardShow from '../pages/GiftCardShow'



export default (props) => (

  <Route render={({ location }) => (
              <TransitionGroup>
            <CSSTransition key={location.key} classNames='page' timeout={500}>
    <Switch location={location}>
    <Route exact path="/" component={ Home } />
    <Route exact path='/profile/:id'  render={(routeComponentProps) => { return <Page> <Profile { ...routeComponentProps } currentUser = { props.currentUser } logout = {props.logout} /> </Page> }} />
    <Route path="/register" component={ Register } />
    {/* Route for Login will be added here */}
    {/* Render passes props. */}
    <Route path="/login" render={(routeComponentProps) => {
      return <Page> <Login
                { ...routeComponentProps }
                currentUser = { props.currentUser }
                storeUser = { props.storeUser }
                logout = {props.logout} 
                /> </Page>
    }} />
       
    <Route path='/giftcards/new' render={(routeComponentProps) => { return <Page> <NewGiftCard { ...routeComponentProps } currentUser = { props.currentUser } logout = {props.logout}  /> </Page> }} />
    <Route path='/giftcards/:id' render={(routeComponentProps) => { return <Page> <GiftCardShow { ...routeComponentProps } currentUser = { props.currentUser } logout = {props.logout}  /> </Page>  }} />  
    <Route exact path='/giftcards'  render={(routeComponentProps) => { return <Page> <GiftCardList { ...routeComponentProps } currentUser = { props.currentUser } logout = {props.logout} /> </Page> }}/>
  </Switch>
  </CSSTransition>
  </TransitionGroup>
  )}
  />
)
