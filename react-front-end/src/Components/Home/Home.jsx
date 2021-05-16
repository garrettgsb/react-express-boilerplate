import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './Header';
import Footer from './Footer';
import PlaceToVisit from './PlaceToVisit';



const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '350vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/cabbage.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  
  // footer:{ doesnt work with div or without etc. 
  //   marginTop: '1000px',
  //   backgroundColor: 'blue', 

  // }
}));

  export default function Home() {
    const classes = useStyles();
    return (
      <div className={classes.root}>
      <CssBaseline />
       <Header />
      <PlaceToVisit />
      <Footer/>
       </div>
    

    );
  }