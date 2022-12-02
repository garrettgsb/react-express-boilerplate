import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { usePrograms } from "../../../App";
import ProgramForm from "./ProgramForm";

export default function AddProgram() {
  const [addProgramData, setAddProgramData] = useState({
    name: "",
    description: "",
  });

  const { programs, setPrograms } = usePrograms();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();

  const addProgram = () => {
    const newProgramFormData = {
      ...addProgramData,
      start_date: startDate,
      end_date: endDate,
      user_id: 1,
    };

    axios
      .post("/api/programs", newProgramFormData)
      .then((result) => {
        setPrograms([...programs, result.data[0]]);

        navigate(`/program/${result.data[0].id}`);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  const addName = (event) => {
    setAddProgramData({
      ...addProgramData,
      name: event.target.value,
    });
  };

  const addDescription = (event) => {
    setAddProgramData({
      ...addProgramData,
      description: event.target.value,
    });
  };

  const addStartDate = (newValue) => {
    setStartDate(newValue);
  };

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
