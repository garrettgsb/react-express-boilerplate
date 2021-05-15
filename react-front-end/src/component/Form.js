import React, { useState, useEffect } from "react";
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
  const [title, setNewTitle] = useState("");
  const [description, setNewDescription] = useState("");
  const [imgLink, setNewImgLink] = useState("");
  const [projectLink, setNewProjectLink] = useState("");
  const [forSale, setForSale] = useState(false);
  const [price, setNewPrice] = useState("");
  const [artwork, setArtwork] = useState({ id: props.activeUser });

  useEffect(() => {
    setArtwork({
      ...artwork,
      title,
      description,
      imgLink,
      projectLink,
      forSale,
      price,
    });
  }, [title, description, imgLink, projectLink, forSale, price]);

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={(event) => event.preventDefault()}
    >
      <TextField
        id="standard-basic"
        multiline={true}
        rows={1}
        type="text"
        value={title}
        variant="outlined"
        size="small"
        onChange={(e) => setNewTitle(e.target.value)}
        label="title"
        placeholder="Title"
      />
      <br />
      <TextField
        id="filled-basic"
        multiline={true}
        rows={1}
        variant="outlined"
        size="small"
        type="textarea"
        value={description}
        onChange={(e) => setNewDescription(e.target.value)}
        label="description"
        placeholder="Description"
      />
      <br />
      <TextField
        id="outlined-basic"
        multiline={true}
        rows={1}
        variant="outlined"
        size="small"
        type="text"
        value={imgLink}
        onChange={(e) => setNewImgLink(e.target.value)}
        label="img-link"
        placeholder="Image URL"
      />
      <br />
      <TextField
        id="outlined-basic"
        multiline={true}
        rows={1}
        variant="outlined"
        size="small"
        type="text"
        value={projectLink}
        onChange={(e) => setNewProjectLink(e.target.value)}
        label="project_link"
        placeholder="Project URL"
      />
      <br />
      {/* <FormControlLabel
        control={
          <Checkbox
            value={forSale}
            onChange={(e) => setForSale(e.target.value)}
            name="For Sale"
          />
        }
        label="For Sale"
      />
      <br /> */}
      <TextField
        id="outlined-basic"
        multiline={true}
        rows={1}
        variant="outlined"
        size="small"
        type="number"
        value={price}
        onChange={(e) => setNewPrice(e.target.value)}
        label="Price"
        placeholder="Price"
      />
      <br />
      {/* <button
        type="submit"
        value="Submit"
        onClick={() => props.onCreate(artwork)}
      >
        Submit
      </button> */}
      <Button
        variant="outlined"
        // size="small"
        type="submit"
        value="Submit"
        onClick={() => props.onCreate(artwork)}
      >
        Submit
      </Button>
    </form>
  );
}
