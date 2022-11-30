import React, { useState } from "react";
import { Button, Box, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function ProgramForm() {
  const [programFormData, setProgramFormData] = useState({
    programName: "",
    description: "",
  });

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const addProgram = () => {
    console.log("addprogram is clicked!!!");
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
          value={programFormData.programName}
          onChange={(event) =>
            setProgramFormData({
              ...programFormData,
              programName: event.target.value,
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
        <Button variant="contained" color="success" size="small" onClick={addProgram}>
          Save
        </Button>
      </Box>
    </>
  );
}

//useState should be in the app.js //

// const addProgram = () => {
// axios post (with the right route)
// .then (props.setPrograms(returned data))
// }
//res.data.programs (console.log what's the data look like first)
// }
