import React, { createContext } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

export default function SearchBar(props) {
  const [searchInputValue, setSearchInputValue] = React.useState("");
  const searchContext = createContext();
  const [searchReturnValue, setSearchReturnValue] = React.useState({});

  const history = useHistory();

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        "& > *": {
          margin: theme.spacing(1),
          width: "25ch",
          size: "small",
        },
      },
      textField: {
        border: "1px solid blue",
        borderRadius: theme.shape.borderRadius,
      },
    })
  );

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
      {/* <form
        onSubmit={(event) => {
          event.preventDefault();
          props.filteredSearch(searchInputValue);
          history.push("/searchResults");
        }}
      >
        <input
          style={BarStyling}
          key="random1"
          value={searchInputValue}
          placeholder={"search"}
          onChange={(e) => setSearchInputValue(e.target.value)}
        /> */}
      {/* <Link to="/searchResults"> */}
      {/* <button type="submit">Submit Search</button> */}
      {/* </Link> */}
      {/* </form> */}

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
        />

        {/* <FormControlLabel
          control={
            <Checkbox
              // value={forSale}
              // onChange={(e) => setForSale(e.target.value)}
              name="For Sale"
            />
          }
          label="For Sale"
        /> */}

        {/* <button
          type="submit"
          value="Submit"
          style={text}
          //onClick={() => props.filteredSearch(searchInputValue)}
        >
          Submit
        </button> */}
        <Button
          variant="outlined"
          color="default"
          type="submit"
          value="Submit"
          // size="small"
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
