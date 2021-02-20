import React, {useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Badge from '@material-ui/core/Badge';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import AccountCircle from '@material-ui/icons/AccountCircle';
import "./AppBar.css";
import HomeIcon from '@material-ui/icons/Home';
import GitGoodLogo from './GitGoodLogo.png'
import { LeftEmptyCell } from '@material-ui/data-grid';



const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    multilineColor:{
      color:'white'
    },
    logo: {
      maxWidth: 160,
      float: 'left', 
    }
  }),
  
);

export default function NavBar(props) {
  const classes = useStyles();

  const [userLogin, setUserLogin] = useState("");
  const [login, setLogin] = useState(localStorage.getItem('username'));
  const handleLogin =(e) =>{
    setUserLogin(e.target.value);
  }
  const submitLogin = (e) => {
    if (userLogin.length > 0) {
    e.preventDefault()
    props.setStorage(userLogin);
    setUserLogin("");
    setLogin(true);
    }
  }

  const clearStorage = () => {
    localStorage.clear();
    setLogin(false);
    window.location.href='/';
  }

  const LogoutButton = () => {
    return (<div>
              <Button color="inherit" onClick={ clearStorage }>Logout</Button>
            </div>
    )
  }

  const LoginForm = () => {
    return (
        <>
          <form onSubmit={submitLogin} >
            <div class="login-form">
            <TextField
                    className={classes.margin}
                    class="text-field"
                    id="input-with-icon-textfield"
                    label="TextField"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle />
                        </InputAdornment>
                      ),
                    className: classes.multilineColor
                    }}
                    value={userLogin} 
                    onChange={handleLogin}
                  />
                  <Button color="inherit" onClick={ submitLogin }>Login</Button>
            </div>
          </form>
        </>
    )

  }
  

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#000020' }}>
      <Toolbar>
          <Typography edge="start" className={classes.title}>
            <img src={GitGoodLogo} alt="GitGood logo" className={classes.logo}></img>
          </Typography>
          <IconButton color="inherit" onClick={event =>  window.location.href='/'}>
                <HomeIcon />
            </IconButton>
          <IconButton aria-label="show 4 new favorites" color="inherit" onClick={()=>props.toLiked()}>
              {/* <Badge badgeContent={4} color="secondary"> */}
                <FavoriteBorderIcon />
              {/* </Badge> */}
            </IconButton>
            { login ? <LogoutButton /> : <LoginForm /> }
          
        </Toolbar>
      </AppBar>
    </div>
  );
}