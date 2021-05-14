import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
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
//import { useStyles } from "./Component_Style/JobList.jsx";

import axios from "axios";

import useApplicationData from "../hooks/useApplicationData";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  titleRowText: {
    fontWeight: "900",
    fontSize: "18px",
    // textDecoration: "underline",
  },
  titleRow: {
    border: "1px solid grey",
  },
  tableContainer: {
    marginLeft: "3%",
    marginRight: "3%",
  },
});

export default function BasicTable(props) {
  const { state, setJobs, setUserJobs } = useApplicationData();
  const [show, setShow] = useState(false);
  const [editShow, setEditShow] = useState(false);
  const [jobId, setJobId] = useState();

  const NO_ACTIVE_USER = 0;

  const jobForm = () => {
    setShow(true);
  };

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

  const onCancel = () => {
    setShow(false);
    setEditShow(false);
  };

  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.tableContainer}>
      <h1>Jobs</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow className={classes.titleRow}>
              <StyledTableCell align="left" className={classes.titleRowText}>
                Title
              </StyledTableCell>
              <StyledTableCell align="left" className={classes.titleRowText}>
                User Name
              </StyledTableCell>
              <StyledTableCell align="left" className={classes.titleRowText}>
                Description
              </StyledTableCell>
              <StyledTableCell align="left" className={classes.titleRowText}>
                Pay
              </StyledTableCell>
              <StyledTableCell align="left" className={classes.titleRowText}>
                Company
              </StyledTableCell>
              <StyledTableCell align="left" className={classes.titleRowText}>
                Location
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {state.jobs.map((row) => (
              <StyledTableRow
                key={row.id}
                onClick={() => {
                  history.push(`/jobs/${row.id}`);
                }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <StyledTableCell align="left">{row.username}</StyledTableCell>
                <StyledTableCell align="left">
                  {row.description}
                </StyledTableCell>
                <StyledTableCell align="left">{row.pay}</StyledTableCell>
                <StyledTableCell align="left">{row.company}</StyledTableCell>
                <StyledTableCell align="left">{row.location}</StyledTableCell>
              </StyledTableRow>
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
        <FormJobs
          onSubmit={onSubmit}
          onCancel={onCancel}
          activeUser={state.activeUser}
        />
      )}
      {state.activeUser !== NO_ACTIVE_USER && editShow && (
        <FormJobs
          onSubmit={onEditSubmit}
          onCancel={onCancel}
          activeUser={state.activeUser}
        />
      )}
    </div>
  );
}
