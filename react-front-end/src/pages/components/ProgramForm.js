import React, { useState } from "react";
import { Button, Box, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";
import { usePrograms } from "../../App";

export default function ProgramForm() {
  const [programFormData, setProgramFormData] = useState({
    name: "",
    description: "",
  });

  const { programs, setPrograms } = usePrograms();

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const navigate = useNavigate();

  const addProgram = () => {
    const newProgramFormData = {
      ...programFormData,
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

  return (
    <>
      <h1>Add program</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Program Name"
          variant="standard"
          name="programName"
          type="text"
          placeholder="Enter Program Name"
          value={programFormData.name}
          onChange={(event) =>
            setProgramFormData({
              ...programFormData,
              name: event.target.value,
            })
          }
        />
        <TextField
          id="standard-textarea"
          label="Description"
          variant="standard"
          multiline
          name="Description"
          type="text"
          placeholder="Enter Description"
          value={programFormData.description}
          onChange={(event) =>
            setProgramFormData({
              ...programFormData,
              description: event.target.value,
            })
          }
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Start Date"
            value={startDate}
            onChange={(newValue) => {
              setStartDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="End Date"
            value={endDate}
            onChange={(newValue) => {
              setEndDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box>

      <Box sx={{ "& button": { m: 1 } }}>
        <Link to="/dashboard" className={"programListItem"}>
          <Button color="secondary" size="small">
            Cancel
          </Button>
        </Link>

        <Button
          variant="contained"
          color="success"
          size="small"
          onClick={addProgram}
        >
          Save
        </Button>
      </Box>
    </>
  );
}
