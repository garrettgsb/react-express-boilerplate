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
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import IconButton from "@material-ui/core/IconButton";

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
    <div className={classes.tableContainer}>
      <h1>My Jobs</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" className={classes.titleRowText}>
                Title
              </TableCell>
              <TableCell align="left" className={classes.titleRowText}>
                User Name
              </TableCell>
              <TableCell align="left" className={classes.titleRowText}>
                Description
              </TableCell>
              <TableCell align="left" className={classes.titleRowText}>
                Pay
              </TableCell>
              <TableCell align="left" className={classes.titleRowText}>
                Company
              </TableCell>
              <TableCell align="left" className={classes.titleRowText}>
                Location
              </TableCell>
              <TableCell
                align="left"
                className={classes.titleRowText}
              ></TableCell>
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
                  <TableCell align="left">{row.username}</TableCell>
                  <TableCell align="left">{row.description}</TableCell>
                  <TableCell align="left">{row.pay}</TableCell>
                  <TableCell align="left">{row.company}</TableCell>
                  <TableCell align="left">{row.location}</TableCell>
                  <TableCell align="left">
                    {/* <button
                      type="submit"
                      method="delete"
                      onClick={() => props.onEdit(row.id)}
                    >
                      Edit
                    </button> */}
                    <IconButton
                      variant="outlined"
                      size="small"
                      type="submit"
                      method="delete"
                      onClick={() => props.onEdit(row.id)}
                      className={classes.editButton}
                    >
                      <EditOutlinedIcon />
                    </IconButton>
                    &nbsp; &nbsp;
                    <IconButton
                      variant="outlined"
                      // color="primary"
                      size="small"
                      type="submit"
                      method="delete"
                      onClick={() => props.onDelete(row.id)}
                      className={classes.deleteButton}
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
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
