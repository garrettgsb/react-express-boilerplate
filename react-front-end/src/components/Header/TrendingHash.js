import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';



const trendingHashtags = ['#joshua', '#isamu', '#sori', '#freebritney', '#awesomeweatherthisweek', 'smd']
const trendingList = trendingHashtags.map((hashtag, i) => {
  return (<Chip variant='outlined' size='medium' label={hashtag} key={i} color='' style={{backgroundColor:'transparent'}}/>)
})

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));


export default function TrendingHash() {
  const classes = useStyles();


  return (
    <div className={classes.root}>
      {trendingList}
    </div>
  );
}