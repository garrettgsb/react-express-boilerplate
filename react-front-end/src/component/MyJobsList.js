import React, { useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import IconButton from "@material-ui/core/IconButton";

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
    //border: "1px solid grey",
  },
  deleteButton: {
    "&:hover": {
      color: "red",
    },
  },
  editButton: {
    "&:hover": {
      color: "green",
    },
  },
  editDeleteRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default function BasicTable(props) {
  useEffect(() => {}, [props.state.userJobs]);

  const classes = useStyles();

  return (
    <div className={classes.tableContainer}>
      <h1>My Jobs</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
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
            {props.state.userJobs[0] &&
              props.state.userJobs.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    <Link
                      to={`/jobs/${row.id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      {row.title}
                    </Link>
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.username}</StyledTableCell>
                  <StyledTableCell align="left">
                    {row.description}
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.pay}</StyledTableCell>
                  <StyledTableCell align="left">{row.company}</StyledTableCell>
                  <StyledTableCell
                    align="left"
                    className={classes.editDeleteRow}
                  >
                    <div>{row.location} </div>
                    <div>
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
                        size="small"
                        type="submit"
                        method="delete"
                        onClick={() => props.onDelete(row.id)}
                        className={classes.deleteButton}
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                    </div>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
