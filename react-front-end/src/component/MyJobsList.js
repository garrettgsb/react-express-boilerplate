import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useContext, useParams, useState, useEffect } from "react";
import { JobsContext } from "../App.js";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

// let { id } = useParams();

export default function BasicTable(props) {
  const [myJobs, setmyJobs] = useState([]);

  const onClick = (id) => {
    console.log("PROPS ::", props);
    axios.delete(`/api/jobs/${id}`).then(() => {
      window.location.reload();
    });
  };

  // console.log("user", typeof props.activeUser);
  // console.log("id", typeof id);
  useEffect(() => {
    console.log("PROPS ::", props);

    axios.get(`/api/jobs/1`).then((res) => {
      console.log("pirate treasure", res.data);
      setmyJobs(res.data.job);
    });
  }, []);

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });
  const classes = useStyles();
  // const value = useContext(JobsContext);
  console.log("myJobs ======= ", myJobs);
  const value = myJobs;

  return (
    <div>
      <div>{/* <FormJobs /> */}</div>
      <h1>My Jobs</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">User Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Pay</TableCell>
              <TableCell align="right">Company</TableCell>
              <TableCell align="right">Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {value.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <Link to={`/jobs/${row.id}`}>{row.title}</Link>
                </TableCell>
                <TableCell align="right">{row.username}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.pay}</TableCell>
                <TableCell align="right">{row.company}</TableCell>
                <TableCell align="right">{row.location}</TableCell>
                <button
                  type="submit"
                  method="delete"
                  onClick={() => onClick(row.id)}
                >
                  Delete
                </button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
