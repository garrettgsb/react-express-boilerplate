import { PinDropSharp } from "@material-ui/icons";
import React, { useState } from "react";
import axios from "axios";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

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

export default function FormJobs() {
  const classes = useStyles();

  const [title, setNewTitle] = useState("");
  const [description, setNewDescription] = useState("");
  const [pay, setPay] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");

  // const onSubmit = (event) => {
  //   const value = event.target.value;
  //   setState({
  //     ...state,
  //     [event.target.title]: value,
  //   });
  // };

  const test = () => {
    console.log("Submit function call");
    const job = {
      title,
      description,
      pay,
      company,
      location,
      id: 1,
    };
    axios.put(`/api/jobs`, job).then(() => {
      window.location.reload();
    });
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
        variant="outlined"
        size="small"
        onChange={(e) => setNewTitle(e.target.value)}
        label="title"
        placeholder="Title"
      />
      <TextField
        id="filled-basic"
        multiline={true}
        rows={1}
        label="Filled"
        variant="outlined"
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
        size="small"
        type="number"
        value={pay}
        onChange={(e) => setPay(e.target.value)}
        label="pay"
        placeholder="Wage/Salary"
      />
      <TextField
        id="outlined-basic"
        multiline={true}
        rows={1}
        label="Outlined"
        variant="outlined"
        size="small"
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        label="Company"
        placeholder="Company Name"
      />
      <TextField
        id="outlined-basic"
        multiline={true}
        rows={1}
        label="Outlined"
        variant="outlined"
        size="small"
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        label="location"
        placeholder="Location"
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
//         type="number"
//         value={pay}
//         onChange={(e) => setPay(e.target.value)}
//         label="pay"
//         placeholder="Wage/salary"
//       />
//       <br />
//       <input
//         type="text"
//         value={company}
//         onChange={(e) => setCompany(e.target.value)}
//         label="company"
//         placeholder="Company Name"
//       />
//       <br />
//       <input
//         type="text"
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//         label="location"
//         placeholder="Location"
//       />
//       <br />

//       <button type="submit" value="Submit" onClick={test}>
//         Submit
//       </button>
//     </form>
//   );
// }

//////////////////////////////////////////////////////
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
