import React from "react";
import { Button, Box, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import SaveSharpIcon from "@mui/icons-material/SaveSharp";


//ProgramForm for creating and editing program
export default function ProgramForm(props) {
  return (
    <>
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
          value={props.name}
          onChange={props.nameCallback}
        />

        <TextField
          id="standard-textarea"
          label="Description"
          variant="standard"
          multiline
          name="Description"
          type="text"
          placeholder="Enter Description"
          value={props.description}
          onChange={props.descriptionCallback}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Start Date"
            value={props.startDate}
            onChange={props.startDateCallback}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="End Date"
            value={props.endDate}
            onChange={props.endDateCallback}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </Box>

      <Box sx={{ "& button": { m: 1 } }}>
        <Button color="secondary" size="small" onClick={props.cancel}>
          Cancel
        </Button>

        <Button
          variant="contained"
          // color="success"
          size="small"
          sx={{ ml: "auto" }}
          startIcon={<SaveSharpIcon />}
          onClick={props.save}
        >
          Save
        </Button>
      </Box>
    </>
  )
}

