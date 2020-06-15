import React, { Component, useState, prevState } from 'react';
import GiftCardModel from '../models/giftcard';
import GiftCardDisplay from '../components/GiftCardDisplay';
import { Link } from 'react-router-dom'
import LikedGiftCardModel from '../models/likedgiftcard';
import './GiftCardShow.css'
import Header from '../components/Header'
import { ListItem, Button, Box, SvgIcon, Grid, Paper, Card, Container, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';


class GiftCardShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      giftCard: {},
      currentGiftCard: this.props.match.params.id,
      message: [],
      messageSender: this.props.currentUser,
      messageSenderDetails: {},
      giftCardId: this.props.match.params.id,
      giftCardIsLiked: false,
      interestedSwapper: {},
      giftCardOwner: '',
      };
    }



  componentDidMount() {
    this.fetchData()
  }

   fetchData = () => {
    let interestedUser = {
      firstName: '',
      email: ''
    }
    let message = {
      body: ''
    }
    GiftCardModel.show(this.state.currentGiftCard).then(data => {
      
      console.log(data.giftcard)
      data.interestedUser.map((properties, index) => {
        interestedUser.firstName = properties.firstName
        interestedUser.email = properties.email
      })
      this.setState({ giftCard: data.giftcard, messageSenderDetails: data.messageSenderDetails, interestedSwapper: interestedUser})
    })
  }

  checkIfLiked = (giftCardId) => {
    if (!giftCardId) {
      return null
    } else {
      return (
        <>
        <Grid item xs={2}>
        <h4>First Name of Interested Swapper: </h4>
        {this.state.interestedSwapper.firstName}
        <br />
        <h4>Email of Interested Swapper: </h4>
        <a href={`mailto:${this.state.interestedSwapper.email}?subject=Hey+${this.state.interestedSwapper.firstName},+Are+you+interested+in+my+${this.state.giftCard.storeName}+Gift+Card?`}>{this.state.interestedSwapper.email}</a>
        </Grid>
        </>
      )
    }
  }



  handleSubmit = (event) => {
    event.preventDefault();
    
    LikedGiftCardModel.create(this.state)
      .then(data => {
        console.log(`Client View ${data}`)
        this.props.history.push('/giftcards')
      })
  }

  handleChange = (event) => {
    if (event.target.type !== 'text') {
      this.setState({ giftCardIsLiked: !this.state.giftCardIsLiked })
    }

    this.setState({
      [event.target.name]: event.target.value
    })
  };



  render() {

    return (
      <div>
      <Header currentUser = {this.props.currentUser} logout={this.props.logout} />
      <Box display='flex' className='showPageGiftCard'>
        <Grid item xs={6}>
        <GiftCardDisplay {...this.state.giftCard} {...this.state.interestedSwapper} giftCardOwner={this.state.giftCardOwner} userId={this.state.messageSender} />
        <form onSubmit={this.handleSubmit}>
          <div className="form-input">
            <label htmlFor="giftCardIsLiked">Interested in this Gift Card?</label>
            <input 
              type="checkbox" 
              name="giftCardIsLiked" 
              checked={this.state.giftCardIsLiked}
              onChange={this.handleChange} />
          </div>
          <input type="submit" value="Save!"/>
        </form> 
        </Grid>
        {this.checkIfLiked(this.state.currentGiftCard) ? this.checkIfLiked(this.state.currentGiftCard) : '321'}
        </Box>
      </div>
    )}}

export default GiftCardShow;