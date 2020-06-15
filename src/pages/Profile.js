import React, { Component } from 'react'
import UserModel from '../models/user'
import GiftCardDisplay from '../components/GiftCardDisplay'
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom'
import GiftCardModel from '../models/giftcard'
import Header from '../components/Header'



class Profile extends Component {
  constructor(props){
  super(props) 
  this.state = {
    userId: this.props.currentUser,
    firstName: '',
    giftCards: [],
    messages: [],
    isLiked: ''
  }
}

  componentDidMount() {
    this.fetchData()
  }

  deleteGiftCard(giftCardId) {
    GiftCardModel.delete(giftCardId).then((res) =>{
      let giftCards = this.state.giftCards.filter((giftCardId) => {
        return giftCardId._id !== res.data._id;
      });
      this.setState({giftCards})
    })
  }

  fetchData = () => {
    UserModel.show(this.state.userId).then(data => {
      console.log(data.user.giftCard)
      this.setState({ firstName: data.user.firstName, giftCards: data.user.giftCard, messages: data.user.message })
    })
  }

  render() {
    let giftCardList = this.state.giftCards.map((giftCard, index) => {
      return (
        <>
        
        <Link to={`/giftcards/${ giftCard._id }`} key={index}>
          <GiftCardDisplay {...giftCard } giftCardId={giftCard._id} firstName={undefined} email={null}/>
        </Link> 

        </>
      )
    })

    let giftCardLike = this.state.giftCards.map((giftCard, index) => {
      if(giftCard.isLiked !== undefined){
        console.log(giftCard)
        return (
          <div>
          <Link to={`/giftcards/${ giftCard._id }`} key={index}>
          <h3>You have a new like</h3>
          </Link>
          </div>
        )
      }
    })


    return (
      <div>
      <Header currentUser = {this.props.currentUser} logout={this.props.logout} />
      <h2>Welcome Back {this.state.firstName}</h2>
        <h4>Your Listed Gift Cards</h4>
        <Box display='flex' flexDirection='row' flexWrap='wrap' justifyContent='space-evenly'>
        {this.state.giftCards ? giftCardList : 'Loading...'}
        </Box>
      </div>
    );
  }
}

export default Profile;