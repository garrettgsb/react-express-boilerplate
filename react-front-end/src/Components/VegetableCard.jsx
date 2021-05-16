import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import useAppData from "../hooks/useAppData";

const useStyles = makeStyles({
  root: {
    width: '300px',
    height: '450px',
    marginLeft: '10%',
    marginTop: '10%',
  },
  media: {
    width: 300,
    height: 175,
  },
  card: {
    marginLeft: '20px',
    marginRight: '20px',
    marginTop: '5px',
    marginBottom: '15px',
  },
  peppers: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '20px',
    height: '40px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: {
    lineHeight: '1.5',
    fontSize: '15px',
    color: 'grey',
  }
});


export default function VegetableCard(props) {
  const { state, addVegToCart } = useAppData();

  const classes = useStyles();

  const onClick = function () {
    addVegToCart(props).then(() => {
      props.onClick();
    })
  }

  const level = function (difficulty) {
    if (difficulty === 1) {
      return <img className={classes.peppers} src={'../images/avatars/easy-pepper.png'} alt={''} />;
    } else if (difficulty === 2) {
      return <img className={classes.peppers} src={'../images/avatars/med-pepper.png'} alt={''} />;
    } else if (difficulty === 3) {
      return <img className={classes.peppers} src={'../images/avatars/hard-pepper.png'} alt={''} />;
    }
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
        <div className={classes.card}>
          <table className={classes.column}>
            <tr className={classes.row}>
              <h2>{props.name}</h2>
              {level(props.difficulty)}
            </tr>
            <tr className={classes.body}>
              {props.description}
            </tr>
          </table>
        </div>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={onClick}> 
          Add to Basket
        </Button>
      </CardActions>
    </Card>
  );
}
