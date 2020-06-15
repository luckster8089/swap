import React, { Component } from 'react'
import GiftCardModel from '../models/giftcard'
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Divider} from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import GiftCardDisplay from '../components/GiftCardDisplay'
import TargetGiftCards from '../components/TargetGiftCards'
import OutlinedCard from '../components/OutlinedCard'
import targetLogo from '../components/targetLogo.png'
import nordstromLogo from '../components/nordstromLogo.png'
import appleLogo from '../components/appleLogo.png'
import amazonLogo from '../components/amazonLogo.png'
import './GiftCardList.css'
import Header from '../components/Header'

class GiftCardList extends Component {
  state = {
    giftcards: [],
    targetcards: [],
    nordstromcards: [],
    applecards: [],
    amazoncards: [],
    targetimage: '',
    nordstromimage: '',
    appleimage: '',
    amazonimage: ''
  }

  componentDidMount() {
     this.fetchData()
  }

  fetchData = () => {
    GiftCardModel.all().then(data => {
      this.setState({ giftcards: data.giftcards, 
      targetimage: <img   
      width='100%'
      height='220px'
      object-fit='cover' 
      src={targetLogo}/>, 

      amazonimage: <img
      width='100%'
      height='240px'
      object-fit='cover' 
      src={amazonLogo}/>, 
      
      appleimage: <img 
      width='60%'
      height='160px'
      object-fit='cover' 
      src={appleLogo} />, 

      nordstromimage: <img 
      width='100%'
      height='100px'
      object-fit='cover'  
      src={nordstromLogo}/> 
      })
    })
  }

  

  render() {
    
    

    let target = this.state.giftcards.map((giftcard, index) => {
      if(giftcard.storeName === 'Target') {
      return  (
      <>
      <Link to={`/giftcards/${ giftcard._id }`} >
      <TargetGiftCards {...giftcard} key={index} />
      </Link>
      </>
      )
      }
    })

    let apple = this.state.giftcards.map((giftcard, index) => {
      if(giftcard.storeName === 'Apple') {
      return  (
      <>
      <Link to={`/giftcards/${ giftcard._id }`} >
      <TargetGiftCards {...giftcard} key={index} />
      </Link>
      </>
      )
      }
    })

    let nordstrom = this.state.giftcards.map((giftcard, index) => {
      if(giftcard.storeName === 'Nordstrom') {
      return  (
      <>
      <Link to={`/giftcards/${ giftcard._id }`} >
      <TargetGiftCards {...giftcard} key={index} />
      </Link>
      </>
      )
      }
    })

    let amazon = this.state.giftcards.map((giftcard, index) => {
      if(giftcard.storeName === 'Amazon') {
      return  (
      <>
      <Link to={`/giftcards/${ giftcard._id }`} >
      <TargetGiftCards {...giftcard} key={index} />
      </Link>
      </>
      )
      }
    })

    



    let giftCardList = this.state.giftcards.map((giftcard, index) => {
      return (
        <>
        <Link to={`/giftcards/${ giftcard._id }`} key={index}>
          <GiftCardDisplay  {...giftcard} />
        </Link>
        </>
      )
    })

    

    return (
      <div>
      <Header currentUser = {this.props.currentUser} logout={this.props.logout} />
        <h1>All Gift Cards</h1>
        <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='space-evenly'>
        { this.state.giftcards ? giftCardList : 'Loading...' }
        </Box>
        
      </div>
    );
  }
}

export default GiftCardList;