import React from "react";
import { useHistory } from "react-router-dom";
// Artworks
import Artwork from "./Artwork";
import Grid from "@material-ui/core/Grid";
// Users
import ProfilePic from "./ProfilePic";
// Jobs table
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useStyles } from "./Component_Style/SearchResults.jsx";

const SearchResults = (props) => {
  const storage = JSON.parse(localStorage.getItem("search_results"));

  const classes = useStyles();
  const history = useHistory();

  // RETURN SEARCHED ARTWORKS
  const artworks = () => {
    return (
      <React.Fragment>
        <Grid
          container
          spacing={1}
          className={classes.gridContainer}
          justify="center"
        >
          {storage.artworks.map((artpiece) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <Artwork
                  id={artpiece.id}
                  title={artpiece.title}
                  image={artpiece.img_link}
                  description={artpiece.descrip}
                  price={artpiece.price}
                  forSale={artpiece.for_sale}
                  url={artpiece.project_link}
                  author_id={artpiece.author_id}
                />
              </Grid>
            );
          })}
        </Grid>
      </React.Fragment>
    );
  };

  // RETURN SEARCHED USERS
  const users = () => {
    return (
      <React.Fragment>
        <Grid
          container
          spacing={1}
          className={classes.gridContainer}
          justify="center"
        >
          {storage.users.map((user) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <div
                  onClick={() => {
                    history.push(`/portfolio/${user.id}`);
                  }}
                >
                  <ProfilePic userInfo={user} />
                </div>
              </Grid>
            );
          })}
        </Grid>
      </React.Fragment>
    );
  };

  // RETURN SEARCHED JOBS
  const jobs = () => {
    return (
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
            {storage.jobs.map((row) => (
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
    );
  };

  return (
    <div>
      <h2>{storage && "Art!"}</h2>
      <div>{storage && artworks()}</div>
      <h2>{storage && "People!"}</h2>
      <div>{storage && users()}</div>
      <h2>{storage && "Jobs!"}</h2>
      <div>{storage && jobs()}</div>
    </div>
  );
};

export default SearchResults;
