import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function ProgramForm() {
  const [programFormData, setProgramFormData] = useState({
    programName: "",
    description: "",
    start_date: "",
    end_date: "",
  });

  const addProgram = () => {
    console.log("addprogram is clicked!!!");
  };

  return (
    <>
      <h1>Add program</h1>
      <form>
        <input
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
      </form>

      <Box sx={{ "& button": { m: 1 } }}>
        <Link to="/dashboard" className={"programListItem"}>
          <Button color="secondary" size="small">
            Cancel
          </Button>
        </Link>
        <Button variant="contained" color="success" size="small">
          Save
        </Button>
      </Box>
    </>
  );
}

//useState should be in the app.js //

//const addProgram = () => {
//axios post (with the right route)
//.then (props.setPrograms(returned data)) //res.data.programs (console.log what's the data look like first)
// }
