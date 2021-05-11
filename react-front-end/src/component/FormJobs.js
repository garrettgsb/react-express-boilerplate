import FormControl from "@material-ui/core/FormControl";
import { PinDropSharp } from "@material-ui/icons";
import React, { useState } from "react";
import axios from "axios";

export default function FormJobs() {
  const [title, setNewTitle] = useState("");
  const [description, setNewDescription] = useState("");
  const [pay, setPay] = useState("");

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
      id: 1,
      title,
      description,
      pay,
      posted_date,
      user_id,
    };
    axios.put(`/api/jobs`, job).then(() => {
      window.location.reload();
    });
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input
        type="text"
        value={title}
        onChange={(e) => setNewTitle(e.target.value)}
        label="title"
        placeholder="Title"
      />
      <br />
      <input
        type="textarea"
        value={description}
        onChange={(e) => setNewDescription(e.target.value)}
        label="description"
        placeholder="Description"
      />
      <br />
      <input
        type="number"
        value={pay}
        onChange={(e) => setPay(e.target.value)}
        label="pay"
        placeholder="Wage/salary"
      />
      <br />
      <button type="submit" value="Submit" onClick={test}>
        Submit
      </button>
    </form>
  );
}

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
