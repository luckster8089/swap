import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import targetLogo from './targetLogo.png'
import LikedGiftCardModel from '../models/likedgiftcard'

import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';
import giftcardBackground from './giftcardBackground.jpg'
import { Divider, Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core'

const GiftCardDisplay = ({ handleSubmit, deletegc, giftCardId,  messages, firstName, storeName, email, cardValue, isLiked}) => {
  // Wait for page to load
  // Time based for loops over props
  // TODO: Need to figure out Async/Await to display messages on new line 
  const useStyles = makeStyles({
    root: {
      maxWidth: 460,
      flexGrow: 1
    },
    media: {
      height: 200,
      width: 460
    },
  });

  const classes = useStyles();

  const checkIfLiked = (giftCardId) => {
    if (!giftCardId) {
      return null
    } else {
      return (
        <>
        <p>Someone wants to Swap</p>
        <NotificationImportantIcon style={{color: 'red'}}/>
        </>
      )
    }
  }



  return (
<div className={classes.root.flexGrow}>
<Grid container spacing={3}>
<Grid item xs> 
<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={giftcardBackground}
          title="gift card show"
        />
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {storeName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Card Value: {cardValue}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {checkIfLiked(isLiked) ? checkIfLiked(isLiked) : ''}
      </CardActions>
      </Card>
      </Grid>
      </Grid>
      <br />
</div>
    
  );
}

export default GiftCardDisplay;