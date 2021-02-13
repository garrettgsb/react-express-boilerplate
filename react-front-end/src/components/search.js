import React from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
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
  const classes = useStyles();
    return (
      <form autoComplete="off" onSubmit={props.onSubmit} className={classes.root}>
            <TextField id="outlined-basic" label="Enter Github User" variant="outlined" value={props.value} onChange={props.onChange} />
            {/* <SearchBar value={props.value} onChange={props.onChange} onRequestSearch={props.onClick}/> */}
            
            <label ><SearchIcon onClick={props.onClick} id="search-icon" /></label>
            {/* <button type="button" onClick={props.onClick}>Submit</button> */}
      </form>
    );
}


