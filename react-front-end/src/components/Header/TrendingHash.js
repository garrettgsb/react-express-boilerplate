import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';



const trendingHashtags = ['#joshua', '#isamu', '#sori', '#freebritney', '#awesomeweatherthisweek', 'devil.inc', 'trendiistrendy', 'testingchips', 'blahblahblah', 'hellotoptenhashtags', '#joshua', '#isamu', '#sori', '#freebritney', '#awesomeweatherthisweek', 'devil.inc', 'trendiistrendy', 'testingchips', 'blahblahblah', 'hellotoptenhashtags']


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(.7),
      marginTop: theme.spacing(2),
    },
  },
  chip: {
    backgroundColor: 'transparent',
    color: 'white',
    borderColor: 'white',
    fontSize: '1.1rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    opacity: .65,
    "&:hover": {
      opacity: 1,
      borderColor: 'transparent',
      background: 'linear-gradient(145deg, #0B8692 20%, #00AD82 80%)'
    }
  }
}));


export default function TrendingHash() {
  const classes = useStyles();
  const trendingList = trendingHashtags.map((hashtag, i) => {
    return (
      <Chip
        variant='outlined'
        size='large'
        label={hashtag}
        key={i}
        className={classes.chip}
      />
    )
  })

  return (
    <div className={classes.root}>
      {trendingList}
    </div>
  );
}