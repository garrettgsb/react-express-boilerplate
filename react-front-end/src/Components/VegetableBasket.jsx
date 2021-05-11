import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ButtonBases from "./VegetableCard";

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
  ShoppingBasketIcon:{
    padding:1,
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

export default function VegetableBasket() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
    
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          className={clsx(open && classes.hide)}
          onClick={handleDrawerOpen}
          style={{
            width: '100%',
          }}
        >
          <ButtonBases />
        </IconButton>
      </main>
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
          {["Carrots", "Cucumbers", "Beets", "Green Beans"].map(
            (text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <DeleteIcon /> : <DeleteIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
                <Avatar
                  alt="Carrot"
                  src="images/vegetables/carrots.png"
                />
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <Button variant="contained" color="primary" className ={classes.buildGardenButton}>
          Build My Garden
        </Button>
      </Drawer>
    </div>
  );
}
