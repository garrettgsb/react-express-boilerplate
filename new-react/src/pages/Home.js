import { useState } from "react";
import Activities from "../components/Activities";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import Button from "@mui/material/Button";

const Home = () => {
  const [city, setCity] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city && start && end) console.log(city, start, end);
    setSubmit(true);
  };
  return (
    <div>
      <h1>home</h1>
      <form noValidate onSubmit={handleSubmit}>
        <TextField
          required
          id="outlined-required"
          label="Enter City"
          onChange={(e) => setCity(e.target.value)}
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Start Date"
            value={start}
            onChange={(newValue) => {
              setStart(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <DatePicker
            label="End Date"
            value={end}
            onChange={(newValue) => {
              setEnd(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </form>
      {submit && <Activities />}
    </div>
  );
};

export default Home;
