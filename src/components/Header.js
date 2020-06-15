import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import PropTypes from 'prop-types';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import { Fade, MenuItem,  Menu, Snackbar, AppBar, IconButton, Toolbar, Typography, Button, CssBaseline, useScrollTrigger, Box, Container, Slide  } from '@material-ui/core'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: 'green'
  },
  menuButton: {
    marginRight: theme.spacing(100),
  },
  title: {
    flexGrow: 1,
  },
  profileIcon: {
    color: 'white'
  },
  register: {
    paddingLeft: theme.spacing(30)
  },
  login: {
    paddingLeft: theme.spacing(10)
  }
}));




const Header = (props) => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const history = useHistory()

  const classes = useStyles()

  return (
    <div className={classes.root}>
    <AppBar position="static" classes={{ root: classes.root }}>
   <Toolbar>
    <IconButton edge="start" color="inherit" className={classes.menuButton}  aria-label="menu" onClick={() => history.push('/')}>
  <SwapHorizIcon />Swap
    </IconButton>
    { props.currentUser ? 
    <>
    <Button color="inherit" className={classes.title} onClick={() => history.push('/giftcards/')}>Available Gift Cards</Button>
    <Button color="inherit" className={classes.title} onClick={() => history.push('/giftcards/new')}>Add New Gift Cards</Button>
    <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
  <PersonOutlineIcon edge='start' className={classes.profileIcon}/>
</Button>
<Menu
  id="fade-menu"
  anchorEl={anchorEl}
  keepMounted
  open={open}
  onClose={handleClose}
  TransitionComponent={Fade}
>
  <MenuItem onClick={handleClose}>
    <Button color="inherit" className={classes.title} onClick={() => history.push(`/profile/${props.currentUser}`)}>My Gift Cards</Button>
  </MenuItem>
  <MenuItem onClick={handleClose}>
  <Button color="inherit" className={classes.title} onClick={() => history.push(`/profile/${ props.currentUser }/messages`)}>Messages</Button>
  </MenuItem>
  <MenuItem onClick={handleClose}>
  <Button color="inherit" className={classes.title} onClick={() => history.push(`/profile/${ props.currentUser }/messages`)}>My Account</Button>
  </MenuItem>
  <MenuItem onClick={handleClose}>
  <Button color="inherit" className={classes.title} onClick={ props.logout }>Logout</Button>
  </MenuItem>
</Menu>
    </>
    :
    <>
    <Button color="inherit" className={classes.register} onClick={() => history.push('/register')}>Register</Button>
    <Button color="inherit" className={classes.login} onClick={() => history.push('/login')}>Login</Button>
    </>
    }
    </Toolbar>
    </AppBar>
    </div>
  );
}

export default Header;