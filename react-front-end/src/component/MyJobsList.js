import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { useStyles } from "./Component_Style/MyJobsList.jsx";

export default function BasicTable(props) {
  useEffect(() => {}, [props.state.userJobs]);

  // const useStyles = makeStyles({
  //   table: {
  //     minWidth: 650,
  //   },
  // });

  const classes = useStyles();

  return (
    <div>
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
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.state.userJobs[0] &&
              props.state.userJobs.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    <Link
                      to={`/jobs/${row.id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {row.title}
                    </Link>
                  </TableCell>
                  <TableCell align="right">{row.username}</TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                  <TableCell align="right">{row.pay}</TableCell>
                  <TableCell align="right">{row.company}</TableCell>
                  <TableCell align="right">{row.location}</TableCell>
                  <TableCell align="right">
                    {/* <button
                      type="submit"
                      method="delete"
                      onClick={() => props.onEdit(row.id)}
                    >
                      Edit
                    </button> */}
                    <Button
                      variant="outlined"
                      size="small"
                      type="submit"
                      method="delete"
                      onClick={() => props.onEdit(row.id)}
                    >
                      Edit
                    </Button>
                    &nbsp; &nbsp;
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      type="submit"
                      method="delete"
                      onClick={() => props.onDelete(row.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                  {/* <TableCell align="right">
                    <button
                      type="submit"
                      method="delete"
                      onClick={() => props.onDelete(row.id)}
                    >
                      Delete
                    </button>
                  </TableCell> */}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
