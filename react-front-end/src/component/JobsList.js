import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useHistory } from "react-router-dom";
import MyJobsList from "./MyJobsList";
import EmptyJobs from "./EmptyJobs";
import FormJobs from "./FormJobs";
import { useStyles } from "./Component_Style/JobList.jsx";

import axios from "axios";

import useApplicationData from "../hooks/useApplicationData";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

export default function BasicTable(props) {
  const { state, setJobs, setUserJobs } = useApplicationData();
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [jobId, setJobId] = useState();

  const jobForm = () => {
    setShow(true);
  };
  const NO_ACTIVE_USER = 0;

  const onEdit = (id) => {
    setEditShow(true);
    setJobId(id);
  };

  const onDelete = (id) => {
    axios.delete(`/api/jobs/${id}`).then(() => {
      setUserJobs();
      setJobs();
    });
  };

  const onEditSubmit = (job) => {
    axios.put(`/api/jobs/${jobId}`, job).then(() => {
      setJobs();
      setUserJobs();
      setEditShow(false);
    });
  };

  const onSubmit = (job) => {
    axios.put(`/api/jobs`, job).then(() => {
      setJobs();
      setUserJobs();
      setShow(false);
    });
  };

  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
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
              <TableRow
                key={row.id}
                onClick={() => {
                  history.push(`/jobs/${row.id}`);
                }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
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
      {state.activeUser !== 0 && (
        <MyJobsList state={state} onDelete={onDelete} onEdit={onEdit} />
      )}
      {state.activeUser !== NO_ACTIVE_USER && !show && !editShow && (
        <EmptyJobs onAdd={jobForm} />
      )}
      {state.activeUser !== NO_ACTIVE_USER && show && (
        <FormJobs onSubmit={onSubmit} activeUser={state.activeUser} />
      )}
      {state.activeUser !== NO_ACTIVE_USER && editShow && (
        <FormJobs onSubmit={onEditSubmit} activeUser={state.activeUser} />
      )}
    </div>
  );
}
