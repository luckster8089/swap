import React, { Component, useState, useEffect, useCallback, useMemo } from 'react';
import {
  CSSTransition,
  TransitionGroup,
  SwitchTransition
} from 'react-transition-group';
import GiftCardModel from '../models/giftcard';
import { Select, Snackbar } from '@material-ui/core'
import { ValidatorForm, TextValidator, SelectValidator  } from 'react-material-ui-form-validator'
import Header from '../components/Header'


class NewGiftCard extends Component {
  state = {
    storeName: '',
    cardValue: '',
    cardNumber: '',
    user: this.props.currentUser,
    accessCode: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();

    GiftCardModel.create(this.state)
      .then(data => {
        this.props.history.push('/giftcards')
      })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
      <Header currentUser = {this.props.currentUser} logout={this.props.logout} />
        <h2>New Gift Card</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="form-input">
            <label htmlFor="storeName">Store Name </label>
            <Select htmlFor='storeName' name='storeName' type='storeName'
            onChange={this.handleChange}
            value={this.state.storeName}>
            <option value="Amazon">Amazon</option>
            <option value="Apple">Apple</option>
            <option value="Target">Target</option>
            <option value="Nordstrom">Nordstrom</option>
            </Select>
          </div>
          <div className="form-input">
            <label htmlFor="cardValue">Value on Card $: </label>
            <input 
              type="number" 
              name="cardValue" 
              onChange={this.handleChange}
              value={this.state.cardValue} />
          </div>
          <div className="form-input">
            <label htmlFor="cardNumber">Card Number: </label>
            <input 
              type="number" 
              name="cardNumber" 
              onChange={this.handleChange}
              value={this.state.cardNumber} />
          </div>
          <div className="form-input">
            <label htmlFor="accessCode">Access Code: </label>
            <input 
              type="number" 
              name="accessCode" 
              onChange={this.handleChange}
              value={this.state.accessCode} />
          </div>
          <input type="submit" value="Save!"/>
        </form>
      </div>
    );
  }
}

export default NewGiftCard;