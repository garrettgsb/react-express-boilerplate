import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    marginLeft: '10%',
    marginTop: '10%',
  },
  media: {
    width: 250,
    height: 150,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia />
        <img
          className={classes.media}
          src={'../images/vegetables/basil.png'}
          alt="Basil"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Basil
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Basil is a herb, best grown in 18-30 degrees C. It requires 7 hours of sunlight per day, water once a week, and needs to be spaced 1 foot apart.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Add to Basket
        </Button>
      </CardActions>
    </Card>
    
  );
}