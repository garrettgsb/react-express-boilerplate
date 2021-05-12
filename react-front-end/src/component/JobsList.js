import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import MyJobsList from "./MyJobsList";
import axios from "axios";

import useApplicationData from "../hooks/useApplicationData";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable(props) {
  const { state, setJobs, setUserJobs } = useApplicationData();

  const onClick = (id) => {
    axios.delete(`/api/jobs/${id}`).then(() => {
      setUserJobs();
    });
  };

  const classes = useStyles();

  useEffect(() => {
    setJobs();
  }, [state.userJobs]);

  return (
    <div>
      <div>{/* <FormJobs /> */}</div>
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
            {state.jobs.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <Link to={`/jobs/${row.id}`}>{row.title}</Link>
                </TableCell>
                <TableCell align="right">{row.username}</TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.pay}</TableCell>
                <TableCell align="right">{row.company}</TableCell>
                <TableCell align="right">{row.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <br />
      <br />
      <br />
      {state.activeUser !== 0 && <MyJobsList state={state} onClick={onClick} />}
    </div>
  );
}
