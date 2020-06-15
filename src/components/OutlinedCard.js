import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard(storeName, cardValue) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <img src='../components/targetLogo.png' alt='Target-Logo' />
        </Typography>
        <Typography variant="h5" component="h2">
        {storeName}
        </Typography>
        <Typography variant="h5" component="h2">
        {cardValue}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Expect More {bull} Pay Less {bull} Brand Promise {bull}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Show All</Button>
      </CardActions>
    </Card>
  );
}