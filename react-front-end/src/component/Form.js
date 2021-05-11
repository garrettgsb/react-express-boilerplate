import FormControl from "@material-ui/core/FormControl";
import { PinDropSharp } from "@material-ui/icons";
import React, { useState } from "react";
import axios from "axios";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
        size: "small",
      },
    },
  })
);

export default function BasicTextFields() {
  const classes = useStyles();
  const [title, setNewTitle] = useState("");
  const [description, setNewDescription] = useState("");
  const [imgLink, setNewImgLink] = useState("");
  const [projectLink, setNewProjectLink] = useState("");
  const [forSale, setForSale] = useState("");
  const [price, setNewPrice] = useState("");

  // const onSubmit = (event) => {
  //   const value = event.target.value;
  //   setState({
  //     ...state,
  //     [event.target.title]: value,
  //   });
  // };

  const test = () => {
    console.log("Submit function call");
    const artwork = {
      id: 1,
      title,
      description,
      imgLink,
      projectLink,
      forSale: true,
      price,
    };
    axios.put(`/api/artworks`, artwork).then(() => {
      window.location.reload();
    });
  };
  const checked = {
    borderBottom: 0,
  };
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
        onChange={(e) => setNewTitle(e.target.value)}
        label="title"
        placeholder="Title"
      />
      <TextField
        id="filled-basic"
        multiline={true}
        rows={1}
        label="Filled"
        variant="filled"
        size="small"
        type="textarea"
        value={description}
        onChange={(e) => setNewDescription(e.target.value)}
        label="description"
        placeholder="Description"
      />
      <TextField
        id="outlined-basic"
        multiline={true}
        rows={1}
        label="Outlined"
        variant="outlined"
        type="text"
        value={imgLink}
        onChange={(e) => setNewImgLink(e.target.value)}
        label="img-link"
        placeholder="Image URL"
      />
      <TextField
        id="outlined-basic"
        multiline={true}
        rows={1}
        label="Outlined"
        variant="outlined"
        type="text"
        value={projectLink}
        onChange={(e) => setNewProjectLink(e.target.value)}
        label="project_link"
        placeholder="Project URL"
      />
      <TextField
        style={checked}
        id="outlined-basic"
        multiline={true}
        rows={1}
        // label="Outlined"
        // variant="outlined"
        type="checkbox"
        value={forSale}
        onChange={(e) => setForSale(e.target.value)}
        label="for sale"
      />
      <TextField
        id="outlined-basic"
        multiline={true}
        rows={1}
        label="Outlined"
        variant="outlined"
        type="number"
        value={price}
        onChange={(e) => setNewPrice(e.target.value)}
        label="price"
        placeholder="Price"
      />
      {/* <FormControlLabel
        control={
          <Checkbox checked={jason} onChange={handleChange} name="jason" />
        }
        label="Jason Killian"
      /> */}
      <button type="submit" value="Submit" onClick={test}>
        Submit
      </button>
    </form>
  );
}

// export default function Form() {
//   const [title, setNewTitle] = useState("");
//   const [description, setNewDescription] = useState("");
//   const [imgLink, setNewImgLink] = useState("");
//   const [projectLink, setNewProjectLink] = useState("");
//   const [forSale, setForSale] = useState("");
//   const [price, setNewPrice] = useState("");

//   // const onSubmit = (event) => {
//   //   const value = event.target.value;
//   //   setState({
//   //     ...state,
//   //     [event.target.title]: value,
//   //   });
//   // };

//   const test = () => {
//     console.log("Submit function call");
//     const artwork = {
//       id: 1,
//       title,
//       description,
//       imgLink,
//       projectLink,
//       forSale: true,
//       price,
//     };
//     axios.put(`/api/artworks`, artwork).then(() => {
//       window.location.reload();
//     });
//   };

//   return (
//     <form onSubmit={(event) => event.preventDefault()}>
//       <input
//         type="text"
//         value={title}
//         onChange={(e) => setNewTitle(e.target.value)}
//         label="title"
//         placeholder="Title"
//       />
//       <br />
//       <input
//         type="textarea"
//         value={description}
//         onChange={(e) => setNewDescription(e.target.value)}
//         label="description"
//         placeholder="Description"
//       />
//       <br />
//       <input
//         type="text"
//         value={imgLink}
//         onChange={(e) => setNewImgLink(e.target.value)}
//         label="img_link"
//         placeholder="Image URL"
//       />
//       <br />
//       <input
//         type="text"
//         value={projectLink}
//         onChange={(e) => setNewProjectLink(e.target.value)}
//         label="project_link"
//         placeholder="Project URL"
//       />
//       <br />
//       <label>
//         {" "}
//         For Sale
//         <input
//           type="checkbox"
//           value={forSale}
//           onChange={(e) => setForSale(e.target.value)}
//           label="for_sale"
//         />
//       </label>
//       <br />
//       <input
//         type="number"
//         value={price}
//         onChange={(e) => setNewPrice(e.target.value)}
//         label="price"
//         placeholder="Price"
//       />
//       <br />
//       <button type="submit" value="Submit" onClick={test}>
//         Submit
//       </button>
//     </form>
//   );
// }
//////////////////////////////////////////////////////////////////////////////////////
// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value} onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// }

// const Form = (props) => {
//   state = {
//     title: "",
//     description: "",
//     img_link: "",
//     project_link: "",
//     for_sale: false,
//     price: 0,
//   };

//   const onSubmit = function (event) {
//     setName(event.target.value);
//   };

//   return (
//     <form onSubmit={(event) => event.preventDefault()}>
//       <label>
//         Title:
//         <input type="text" name="title" />
//         Description:
//         <input type="text" name="description" />
//         Image Url:
//         <input type="text" name="img_link" />
//         Project Url:
//         <input type="text" name="project_link" />
//         For Sale
//         <input type="checkbox" name="for_sale" />
//         Price
//         <input type="number" name="price" />
//       </label>
//       <input type="submit" value="Submit" onSubmit={onSubmit} />
//     </form>
//     // <FormControl>
//     //   <InputLabel htmlFor="my-input">Email address</InputLabel>
//     //   <Input id="my-input" aria-describedby="my-helper-text" />
//     //   <FormHelperText id="my-helper-text">
//     //     We'll never share your email.
//     //   </FormHelperText>
//     // </FormControl>
//   );
// };

// export default Form;
