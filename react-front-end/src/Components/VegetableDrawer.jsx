import React, {useEffect, useState} from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
// import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import axios from 'axios';
import useAppData from "../hooks/useAppData";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  title: {
    flexGrow: 1
  },
  hide: {
    display: "block"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  drawerHeaderTitle: {
    marginLeft: 15,
    justifyContent: "space-between"
  },
  ShoppingBasketIcon: {
    padding: 1,
  },
  buildGardenButton: {
    marginTop: 500,
    marginBottom: -100,
    borderLeft: 150,
    borderRight: 150,
  },
  veggieButton: {
    display: "block important"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  }
}));


export default function VegetableDrawer(props){
  const { state } = useAppData()
  const {open, 
      handleDrawerOpen, 
      handleDrawerClose,
      veg} = props

    
    // axios request to get all the vegetable data to grab all vegetable data if vegetable.id is === v
  // const renderBasketList = (state) => {    
  //   state.basket.map((veg) => {
  //     const found = state.vegetables.find(x => x.id === veg.id)
  //     if (found) {
  //       const data = state.map(element => {
  //         return (
  //           <listItem
  //           {...element} />
  //         )
  //       })
  //       return data 
  //     }
  //   })
  // }
  const deleteVegFromBasket = (name) => {
    
    return axios.delete(`/api/cart/${name}`).then(() => {
      // const appointment = {
      //   ...state.appointments[id],
      //   interview: null,
      // };
      // const appointments = {
      //   ...state.appointments,
      //   [id]: appointment,
      // };

      // const days = newDaysArr(
      //   newSpotDay(state.day, state.days, true),
      //   state.days
      // );

      // setState();
    });
  };





  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
        className={classes.drawer}
    variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <h1 className={classes.drawerHeaderTitle}> Vegetable Basket
        <ShoppingBasketIcon>color="primary"</ShoppingBasketIcon>
        </h1>
        <Divider />

        <List>
          {state.basket.map(x => 
            <ListItem button key={x.name}>
              <ListItemIcon>
                <DeleteIcon onClick={deleteVegFromBasket(x.name)}/>
              </ListItemIcon>
              <ListItemText primary={x.name} />
              <Avatar
                alt="test"
                src={x.image_url}
              />
            </ListItem>
          )}
        
        </List>
        <Divider />
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Button variant="contained" color="primary" className={classes.buildGardenButton}>
          Build My Garden
        </Button>
      </Drawer>
  )


}
