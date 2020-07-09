import { useState, useEffect } from "react";
import axios from "axios";
// import { getAppointmentsForDay } from "helpers/selectors";

export default function useApplicationData() {
  const [state, setState] = useState({
    // Initialize application state
    tab: "Warranties",
    userData: {},
    tabs: ["Warranties", "Monthly Payments", "Transactions", "User Profile"],
    warranties: [],
    payments: [],
    transactions: [],
    currentItem: null,
    renderForm: false,
  });

  const setTab = (tab) => setState({ ...state, tab }); // Set tab with a tab string
  const setCurrentItem = (currentItem) => setState({ ...state, currentItem });
  const setWarranties = (warranties) => setState({ ...state, warranties });
  const setRenderForm = (renderForm) => setState({ ...state, renderForm });

  const onFileUpload = (fileObj, itemId) => {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("file", fileObj);

    // Details of the uploaded file
    console.log("in upload", fileObj);

    // Request made to the backend api
    // Send formData object
    axios.post(`api/uploadfile/${itemId}`, formData);
  };

  function addItem(inputObj) {
    console.log(inputObj);

    return axios.post(`/api/items`, inputObj).then((response) => {
      console.log(inputObj.files);
      for (let key in inputObj.files) {
        if (inputObj.files[key] instanceof File) {
          onFileUpload(inputObj.files[key], response.data);
        }
      }
      // inputObj.files.forEach((file) => {
      //   onFileUpload(file, response.data);
      // });
      // Insert new entry of appointment to the database
      // const days = updateSpots({ ...state, appointments }); // Calculate remaining spots of updated appointments
      // setState({ ...state, appointments, days }); // Update state with new days and appointments locally if api request resolves
    });
  }

  // // Insert a new interview to local state and remote database
  // function bookInterview(id, interview) {
  //   const appointment = {
  //     // Create a new instance of appointment object with updated interview object
  //     ...state.appointments[id],
  //     interview: { ...interview },
  //   };

  //   const appointments = {
  //     // Create a new instance of appointmens object with updated appointment to corresponding id
  //     ...state.appointments,
  //     [id]: appointment,
  //   };

  //   return axios
  //     .put(`/api/appointments/${id}`, { interview: interview })
  //     .then((response) => {
  //       // Insert new entry of appointment to the database
  //       const days = updateSpots({ ...state, appointments }); // Calculate remaining spots of updated appointments
  //       setState({ ...state, appointments, days }); // Update state with new days and appointments locally if api request resolves
  //     });
  // }
  // Delete an interview to local state and remote database with provided id
  // function cancelInterview(id) {
  //   const appointment = {
  //     // Create a new instance of appointment object with updated interview object
  //     ...state.appointments[id],
  //     interview: null,
  //   };

  //   const appointments = {
  //     // Create a new instance of appointmens object with updated appointment to corresponding id
  //     ...state.appointments,
  //     [id]: appointment,
  //   };

  //   return axios.delete(`/api/appointments/${id}`).then((response) => {
  //     // Delete corresponding entry of appointment in the database
  //     const days = updateSpots({ ...state, appointments }); // Calculate remaining spots of updated appointments
  //     setState({ ...state, appointments, days }); // Update state with new days and appointments locally if api request resolves
  //   });
  // }

  // Initialize state with database data
  useEffect(() => {
    Promise.all([
      axios.get("/api/users/1"),
      axios.get("/api/warranties"),
      // axios.get("/api/interviewers"),
    ]).then(([response, response2]) => {
      setState((prev) => ({
        ...prev,
        userData: response.data,
        warranties: response2.data,
        // interviewers: response3.data,
      }));
    });
  }, []);

  return {
    state,
    setTab,
    setCurrentItem,
    setState,
    setWarranties,
    setRenderForm,
    addItem,
  };
}
