import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./Component_Style/Form.jsx";
import Button from "@material-ui/core/Button";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       "& > *": {
//         margin: theme.spacing(1),
//         width: "25ch",
//         size: "small",
//       },
//     },
//   })
// );

export default function BasicTextFields(props) {
  const classes = useStyles();

  const [state, setState] = useState({
    id: props.activeUser,
    title: "",
    description: "",
    imgLink: "",
    projectLink: "",
    forSale: false,
    price: 0,
    titleError: false,
    imageError: false,
    imageErrorMessage: "",
  });

  const validate = () => {
    const invalid = {
      titleError: false,
      imageError: false,
      imageErrorMessage: "",
    };
    state.title === ""
      ? (invalid.titleError = true)
      : (invalid.titleError = false);
    state.imgLink === ""
      ? (invalid.imageError = true)
      : (invalid.imageError = false);
    state.imgLink === ""
      ? (invalid.imageErrorMessage = "Cannot be blank")
      : (invalid.imageErrorMessage = "");
    if (invalid.titleError || invalid.imageError) {
      setState({
        ...state,
        ...invalid,
      });
    }
    if (!invalid.titleError && !invalid.imageError) {
      props.onCreate(state);
    }
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={(event) => event.preventDefault()}
    >
      <h4>{props.formHeader}</h4>
      {!state.titleError && (
        <TextField
          id="standard-basic"
          multiline={true}
          rows={1}
          type="text"
          variant="outlined"
          size="small"
          value={state.title}
          onChange={(e) => setState({ ...state, title: e.target.value })}
          label="Title"
          placeholder="Title"
        />
      )}
      {state.titleError && (
        <TextField
          error
          helperText="Cannot be blank"
          id="standard-basic"
          multiline={true}
          rows={1}
          type="text"
          variant="outlined"
          size="small"
          value={state.title}
          onChange={(e) => setState({ ...state, title: e.target.value })}
          label="Title"
          placeholder="Title"
        />
      )}
      <br />
      <TextField
        id="filled-basic"
        multiline={true}
        rows={1}
        type="textarea"
        variant="outlined"
        size="small"
        value={state.description}
        onChange={(e) => setState({ ...state, description: e.target.value })}
        label="Description"
        placeholder="Description"
      />
      <br />
      {!state.imageError && (
        <TextField
          id="outlined-basic"
          multiline={true}
          rows={1}
          variant="outlined"
          size="small"
          type="text"
          value={state.imgLink}
          onChange={(e) => setState({ ...state, imgLink: e.target.value })}
          label="Image URL"
          placeholder="Image URL"
        />
      )}
      {state.imageError && (
        <TextField
          error
          helperText={state.imageErrorMessage}
          id="outlined-basic"
          multiline={true}
          rows={1}
          variant="outlined"
          size="small"
          type="text"
          value={state.imgLink}
          onChange={(e) => setState({ ...state, imgLink: e.target.value })}
          label="Image URL"
          placeholder="Image URL"
        />
      )}
      <br />
      <TextField
        id="outlined-basic"
        multiline={true}
        rows={1}
        variant="outlined"
        size="small"
        type="text"
        value={state.projectLink}
        onChange={(e) => setState({ ...state, projectLink: e.target.value })}
        label="Project URL"
        placeholder="Project URL"
      />
      <br />
      <TextField
        id="outlined-basic"
        rows={1}
        variant="outlined"
        size="small"
        type="number"
        value={state.price}
        onChange={(e) => setState({ ...state, price: e.target.value })}
        label="Price"
        placeholder="Price"
      />
      <br />
      {/* <FormControlLabel
          control={
            <Checkbox
              value={state.forSale}
              onChange={(e) => setState({ ...state, forSale: e.target.value })}
              name="For Sale"
            />
          }
          label="For Sale"
        />
        <br /> */}

      <button type="submit" value="Submit" onClick={() => validate()}>
        Submit
      </button>
      <button type="button" value="Submit" onClick={() => props.onCancel()}>
        Cancel
      </button>
    </form>
  );
}
