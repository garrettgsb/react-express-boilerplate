import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { usePrograms } from "../../../App";
import ProgramForm from "./ProgramForm";

export default function AddProgram() {
  //State for name and description
  const [addProgramData, setAddProgramData] = useState({
    name: "",
    description: "",
  });

  //Use a UseOutletContext from App.js
  const { getAndSetPrograms } = usePrograms();

  //State for startdate
  const [startDate, setStartDate] = useState("");
  //State for enddate
  const [endDate, setEndDate] = useState("");

  const navigate = useNavigate();

  const addProgram = () => {
    //Assemble program data object
    const newProgramFormData = {
      ...addProgramData,
      start_date: startDate,
      end_date: endDate,
      user_id: 1,
    };

    //Send a request to post
    axios
      .post("/api/programs", newProgramFormData)
      .then((result) => {
        getAndSetPrograms();
        navigate(`/program/${result.data[0].id}`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  //Redirect to the homepage
  const handleCancel = () => {
    navigate("/dashboard");
  };

  //Setstate for name
  const addName = (event) => {
    setAddProgramData({
      ...addProgramData,
      name: event.target.value,
    });
  };

  //Setstate for description
  const addDescription = (event) => {
    setAddProgramData({
      ...addProgramData,
      description: event.target.value,
    });
  };

  //Setstate for startdate
  const addStartDate = (newValue) => {
    setStartDate(newValue);
  };

  //Setstate for enddate
  const addEndDate = (newValue) => {
    setEndDate(newValue);
  };

  return (
    <>
      <h1>Add program</h1>
      <ProgramForm
        nameCallback={addName}
        name={addProgramData.name}
        description={addProgramData.description}
        descriptionCallback={addDescription}
        startDate={startDate}
        startDateCallback={addStartDate}
        endDate={endDate}
        endDateCallback={addEndDate}
        cancel={handleCancel}
        save={addProgram}
      />
    </>
  );
}
