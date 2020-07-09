import React, { useState } from "react";

export default function Form(props) {
  const { addItem } = props;

  const [state, setState] = useState({
    // Initialize application state
    // Item section
    itemName: props.itemName || "",
    itemCategory: props.itemCategory || "Other",
    itemDescription: props.itemDescription || "",

    // Warranty section
    warrantySectionActive: props.warrantySectionActive || false,
    warrantyStartDate: props.warrantyStartDate || "",
    warrantyDuration: props.warrantyDuration || "",
    warrantySmsNotification: props.warrantySmsNotification || false,
    warrantyEmailNotification: props.warrantyEmailNotification || false,
    warrantyNotifyDaysPrior: props.warrantyNotifyDaysPrior || "",

    // Payment section
    paymentMonthly: props.paymentMonthly || false,
    paymentSectionActive: props.warrantySectionActive || false,
    paymentStartDate: props.warrantyStartDate || "",
    paymentDuration: props.warrantyDuration || "",
    paymentSmsNotification: props.warrantySmsNotification || false,
    paymentEmailNotification: props.warrantyEmailNotification || false,
    paymentNotifyDaysPrior: props.warrantyNotifyDaysPrior || "",
    //File
    files: null,
    error: "",
  });

  // Item section
  const setItemName = (itemName) => setState({ ...state, itemName });
  const setItemCategory = (itemCategory) =>
    setState({ ...state, itemCategory });
  const setItemDescription = (itemDescription) =>
    setState({ ...state, itemDescription });

  // Warranty section
  const setWarrantySectionActive = (warrantySectionActive) =>
    setState({ ...state, warrantySectionActive });
  const setWarrantyStartDate = (warrantyStartDate) =>
    setState({ ...state, warrantyStartDate });
  const setWarrantyDuration = (warrantyDuration) =>
    setState({ ...state, warrantyDuration });
  const setWarrantySmsNotification = (warrantySmsNotification) =>
    setState({ ...state, warrantySmsNotification });
  const setWarrantyEmailNotification = (warrantyEmailNotification) =>
    setState({ ...state, warrantyEmailNotification });
  const setWarrantyNotifyDaysPrior = (warrantyNotifyDaysPrior) =>
    setState({ ...state, warrantyNotifyDaysPrior });

  // Payment section
  const setPaymentSectionActive = (paymentSectionActive) =>
    setState({ ...state, paymentSectionActive });
  const setPaymentMonthly = (paymentMonthly) =>
    setState({ ...state, paymentMonthly });
  const setPaymentStartDate = (paymentStartDate) =>
    setState({ ...state, paymentStartDate });
  const setPaymentDuration = (paymentDuration) =>
    setState({ ...state, paymentDuration });
  const setPaymentSmsNotification = (paymentSmsNotification) =>
    setState({ ...state, paymentSmsNotification });
  const setPaymentEmailNotification = (paymentEmailNotification) =>
    setState({ ...state, paymentEmailNotification });
  const setPaymentNotifyDaysPrior = (paymentNotifyDaysPrior) =>
    setState({ ...state, paymentNotifyDaysPrior });

  const setFiles = (files) => setState({ ...state, files });
  const setError = (error) => setState({ ...state, error });

  const {
    itemName,
    itemCategory,
    itemDescription,
    warrantySectionActive,
    warrantyStartDate,
    warrantyDuration,
    warrantySmsNotification,
    warrantyEmailNotification,
    warrantyNotifyDaysPrior,
    paymentSectionActive,
    paymentStartDate,
    paymentDuration,
    paymentSmsNotification,
    paymentEmailNotification,
    paymentNotifyDaysPrior,
    paymentMonthly,
    files,
    error,
  } = state;

  const categoryOptions = [
    "Other",
    "Personal and Household",
    "Transportation",
    "Grocery and Retail",
    "Hotels, Entertainment, and Recreation",
    "Restaurants",
    "Health and Education",
    "Sports Equipment",
    "Mobile",
    "Appliance",
    "Electronics",
    "Camera",
    "Musical Instruments",
    "Audio",
  ].map((category) => {
    return <option>{category}</option>;
  });

  function validate() {
    if (itemName === "") {
      setError("Item name cannot be blank");
      return;
    }
    setError("");

    addItem({
      itemName,
      itemCategory,
      itemDescription,
      warrantyStartDate,
      warrantyDuration,
      warrantySmsNotification,
      warrantyEmailNotification,
      warrantyNotifyDaysPrior,
      paymentStartDate,
      paymentDuration,
      paymentSmsNotification,
      paymentEmailNotification,
      paymentNotifyDaysPrior,
      paymentMonthly,
      files,
    });
  }

  return (
    <div>
      <button onClick={(e) => props.setRenderForm(false)}>
        <i class="fa fa-times" aria-hidden="true"></i>
      </button>
      <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
        {/* Item section */}
        <label>Name:</label>
        <input
          type="text"
          value={itemName}
          onChange={(event) => setItemName(event.target.value)}
          placeholder="Enter Item Name"
        ></input>
        <p>{error}</p>
        <label>Category: </label>
        <select
          value={itemCategory}
          onChange={(event) => setItemCategory(event.target.value)}
        >
          {categoryOptions}
        </select>
        <label>Description:</label>
        <input
          type="text"
          value={itemDescription}
          onChange={(event) => setItemDescription(event.target.value)}
          placeholder="Enter Description"
        ></input>

        {/* Warranty section */}
        <input
          type="checkbox"
          name="warrantyCheckBox"
          checked={warrantySectionActive}
          onChange={(event) => setWarrantySectionActive(event.target.checked)}
        ></input>
        <fieldset disabled={!warrantySectionActive}>
          <h3>Warranty</h3>
          <label>Start Date:</label>
          <input
            type="date"
            value={warrantyStartDate}
            onChange={(event) => setWarrantyStartDate(event.target.value)}
          ></input>
          <label>Duration in months:</label>
          <input
            type="number"
            value={warrantyDuration}
            onChange={(event) => setWarrantyDuration(event.target.value)}
          ></input>
          <label>Notifications</label>
          <label>SMS: </label>
          <input
            type="checkbox"
            name="smsCheckBox"
            checked={warrantySmsNotification}
            onChange={(event) =>
              setWarrantySmsNotification(event.target.checked)
            }
          ></input>
          <label>E-mail: </label>
          <input
            type="checkbox"
            name="emailCheckBox"
            checked={warrantyEmailNotification}
            onChange={(event) =>
              setWarrantyEmailNotification(event.target.checked)
            }
          ></input>
          <input
            type="number"
            value={warrantyNotifyDaysPrior}
            onChange={(event) => setWarrantyNotifyDaysPrior(event.target.value)}
          ></input>
        </fieldset>

        {/* Payment section */}
        <input
          type="checkbox"
          name="paymentCheckBox"
          checked={paymentSectionActive}
          onChange={(event) => setPaymentSectionActive(event.target.checked)}
        ></input>
        <fieldset disabled={!paymentSectionActive}>
          <h3>Payment</h3>
          <input
            type="radio"
            checked={!paymentMonthly}
            onChange={(event) => setPaymentMonthly(!event.target.checked)}
          ></input>
          <label>One-time</label>
          <input
            type="radio"
            checked={paymentMonthly}
            onChange={(event) => setPaymentMonthly(event.target.checked)}
          ></input>
          <label>Monthly</label>

          <label>{paymentMonthly ? "Start Date" : "Date"}</label>
          <input
            type="date"
            value={paymentStartDate}
            onChange={(event) => setPaymentStartDate(event.target.value)}
          ></input>
          <label>Duration in months:</label>
          <input
            type="number"
            value={paymentDuration}
            onChange={(event) => setPaymentDuration(event.target.value)}
          ></input>
          <label>Notifications</label>
          <label>SMS: </label>
          <input
            type="checkbox"
            name="smsCheckBox"
            checked={paymentSmsNotification}
            onChange={(event) =>
              setPaymentSmsNotification(event.target.checked)
            }
          ></input>
          <label>E-mail: </label>
          <input
            type="checkbox"
            name="emailCheckBox"
            checked={paymentEmailNotification}
            onChange={(event) =>
              setPaymentEmailNotification(event.target.checked)
            }
          ></input>
          <input
            type="number"
            value={paymentNotifyDaysPrior}
            onChange={(event) => setPaymentNotifyDaysPrior(event.target.value)}
          ></input>
        </fieldset>
        <input
          type="file"
          files={files}
          multiple
          onChange={(event) => setFiles(event.target.files)}
        ></input>
      </form>

      <button onClick={validate}>Save</button>
    </div>
  );
}

// import axios from "axios";

// import React, { Component } from "react";

// class App extends Component {
//   state = {
//     // Initially, no file is selected
//     selectedFile: null,
//   };

//   // On file select (from the pop up)
//   onFileChange = (event) => {
//     // Update the state
//     this.setState({ selectedFile: event.target.files[0] });
//   };

//   // On file upload (click the upload button)
//   onFileUpload = () => {
//     // Create an object of formData
//     const formData = new FormData();

//     // Update the formData object
//     formData.append(
//       "myFile",
//       this.state.selectedFile,
//       this.state.selectedFile.name
//     );

//     // Details of the uploaded file
//     console.log(this.state.selectedFile);

//     // Request made to the backend api
//     // Send formData object
//     axios.post("api/uploadfile", formData);
//   };

//   // File content to be displayed after
//   // file upload is complete
//   fileData = () => {
//     if (this.state.selectedFile) {
//       return (
//         <div>
//           <h2>File Details:</h2>
//           <p>File Name: {this.state.selectedFile.name}</p>
//           <p>File Type: {this.state.selectedFile.type}</p>
//           <p>
//             Last Modified:{" "}
//             {this.state.selectedFile.lastModifiedDate.toDateString()}
//           </p>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <br />
//           <h4>Choose before Pressing the Upload button</h4>
//         </div>
//       );
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>GeeksforGeeks</h1>
//         <h3>File Upload using React!</h3>
//         <div>
//           <input type="file" name="file" onChange={this.onFileChange} />
//           <button onClick={this.onFileUpload}>Upload!</button>
//         </div>
//         {this.fileData()}
//       </div>
//     );
//   }
// }

// export default App;
