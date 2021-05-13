import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useAppData from "../hooks/useAppData";



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


export default function VegetableCard(props) {
const { state, addVegToCart } = useAppData();

  const classes = useStyles();

  const onClick = function () {
    addVegToCart(props).then(() => {
      props.onClick();
    })
  }
  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia />
        <img
          className={classes.media}
          src={props.image_url}
          alt="img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
         {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary"  onClick={onClick}
             >
          Add to Basket
        </Button>
      </CardActions>
    </Card>
  );
}
