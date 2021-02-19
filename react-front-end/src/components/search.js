import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import {useState} from "react";
// import useApplicationData from '../useApplicationData';
// import SearchBar from "material-ui-search-bar";



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
export default function Search(props) {
  // const { setUser, fetchData} = useApplicationData();
  const classes = useStyles();
  const [userName, setUserName] = useState("")
  const handleSearchInput =(e) =>{
    setUserName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    props.fetchData(userName);
  }
    return (
      <form autoComplete="off" onSubmit={handleSubmit} className={classes.root}>
            <TextField id="outlined-basic" label="Enter Github User" variant="outlined" value={userName} onChange={handleSearchInput} />
            {/* <SearchBar value={props.value} onChange={props.onChange} onRequestSearch={props.onClick}/> */}
            
            <label ><SearchIcon onClick={handleSubmit} id="search-icon" /></label>
            {/* <button type="button" onClick={props.onClick}>Submit</button> */}
            
      </form>
      
    );
}


