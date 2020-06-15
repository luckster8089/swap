import React from 'react';
import { Button, Box, SvgIcon, Grid, Paper, Card, Container, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';
import CardGiftcardOutlinedIcon from '@material-ui/icons/CardGiftcardOutlined';
import './Home.css'
import happyUser from '../happyUser.jpg'
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import SearchIcon from '@material-ui/icons/Search';
import CheckIcon from '@material-ui/icons/Check';
import { useHistory } from 'react-router-dom';



// TODO Touch up; 90% Done
const Home = () => {
  const history = useHistory()

  return (
    <div>
     <Box display='flex' flexDirection='column' flexWrap='wrap' className='firstBlockDescription'>
      <h4>10% of Gift Cards Go Unredeemed</h4> 
     
      <p>Don't be that person, swap out <br />  the gift card that grandma got you <br/> for something you will use! </p> 
      </Box>

      <Box display='flex' className='cta' alignItems='center'  onClick={() => history.push('/register')}>
  <Button variant="contained" color="primary"> Swap for free </Button>
  </Box>

  <Box display='flex' flexDirection='column' className='giftCardIcon'>
    <CardGiftcardOutlinedIcon style={{ fontSize: 70, color: 'green' }}/>
    <h4>Stop Losing Money</h4>
    </Box>
    <Grid container direction="row" spacing={10} justify='center' alignItems='center' className='gridDescription'>
    <Grid item xs={3}>
    <p>No more giving fake smiles when you receive a gift card </p> <br/>
    </Grid>
    <Grid item xs={3}>
    <p>There is someone in the world waiting for the perfect swap. Will that be you?</p>
    </Grid>
    <Grid item xs={3}>
    <p>Some people will take a loss on their gift card for cash</p> <br />
    </Grid>
  </Grid>

  <Grid container direction="row" spacing={1} justify='center' alignItems='center' className='testimonialBox'>
  <Grid item xs={6}>
    <img alt='happy-user' src={happyUser} className='happyTestimonial' />
    </Grid>
    <Grid item xs={6}>
    <FormatQuoteIcon style={{ fontSize: 50, color: 'green'}}/>
    <p> My grandma gives me so many gift cards every year. <br/> <br /> I love her very much, but sometime these gift cards are to places I don't shop at.<br/> <br />  With Swap, I can finally put these gift cards to use. <br /> <br/> <strong>Jennifer Anderson</strong> <br /> <i>Swap Enthusiast</i> </p>
    </Grid>
    </Grid>

  <Grid container direction="row" spacing={1} justify='center' alignItems='center' className='howItWorks'>
  <Grid item xs={3}>
    <SwapHorizIcon style={{ fontSize: 50, color: 'green'}}/> <br />
    <strong>Sign Up</strong> <br/> <p>Create your free account and start searching through old pants for unused gift cards</p><br />
    </Grid>
  <Grid item xs={3}>
    <CardGiftcardOutlinedIcon style={{ fontSize: 50, color: 'green'}}/> <br />
    <strong>Add Gift Cards</strong> <br/> <p>Once you find your gift card add it to our marketplace</p><br />
    </Grid>
    <Grid item xs={3}>
    <SearchIcon style={{ fontSize: 50, color: 'green'}}/> <br />
    <strong>Find Gift Cards</strong> <br/> <p>If you see a gift card you like, send a message to that Swap user</p> <br />
    </Grid>
    <Grid item xs={3}>
    <CheckIcon style={{ fontSize: 50, color: 'green'}}/> <br />
    <strong>Enjoy Your New Gift Card</strong> <br/> <p>If both parties agree to a Swap, let us know and we will verify the gift card <br /> (Please Allow Up To 24 Hours For Verification) </p>
    </Grid>
    </Grid>
  
  <Grid container direction="row" spacing={1} justify='flex-start' alignItems='center' className='signUpToday'>
  <Grid item xs={8}>
    <p><strong>Sign up for Swap Today</strong> <br/> <br />It's like Foreign Exchange Trading but with Gift Cards <br/> <i>- The Wolf of Swap Street</i></p>
    </Grid>
    <Grid item xs={4}>
<Button variant="contained" onClick={() => history.push('/register')}>
Sign Up Now
</Button>
    </Grid>
    </Grid>
  
    </div>
  );
}

export default Home;