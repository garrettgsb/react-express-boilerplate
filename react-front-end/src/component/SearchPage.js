import React, { createContext } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useStyles } from "./Component_Style/SearchPage.jsx";

export default function SearchBar(props) {
  const [searchInputValue, setSearchInputValue] = React.useState("");
  const searchContext = createContext();
  const [searchReturnValue, setSearchReturnValue] = React.useState({});

  const history = useHistory();

  const text = {
    color: "white",
  };

  // const BarStyling = {
  //   width: "20rem",
  //   background: "#F2F1F9",
  //   border: "none",
  //   padding: "0.5rem",
  // };
  const classes = useStyles();
  return (
    <div>
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={(event) => {
          event.preventDefault();
          props.filteredSearch(searchInputValue);
          history.push("/searchResults");
        }}
      >
        <TextField
          id="standard-basic"
          //multiline={true}
          rows={1}
          // type="text"
          className={classes.textField}
          value={searchInputValue}
          variant="outlined"
          size="small"
          onChange={(e) => setSearchInputValue(e.target.value)}
          label="search"
          placeholder=""
          color="lavender"
        />
        <Button
          variant="outlined"
          color="default"
          type="submit"
          value="Submit"
          className={classes.searchButton}
          // size="small"
        >
          <span role="img"> Search 🏄 </span>
        </Button>
      </form>
    </div>
  );
}
