import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Grid, Paper, Container, Box } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Heatmap } from "./components/Dashboard/Heatmap";
import { UserEditForm } from "./components/Dashboard/UserEditForm";

export default function Dashboard() {
  const [dashboard, setDashboard] = useState([]);
  const [userEdit, setUserEdit] = useState(false);
  const navigate = useNavigate();
  const [data, setData] = useState([])

  // Grabs info from api and checks if user is login, if not than redirected to login
  useEffect(() => {
    getDashboard()
    getHeatmap()
  }, []);

  const getDashboard = (() => {
    Axios.get("http://localhost:8080/api/dashboard")
      .then((result) => {
        setDashboard(result.data);
        if (Cookies.get("Jason") === undefined) {
          return navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
  }) 
const getHeatmap = (() => {
  Axios.get("http://localhost:8080/api/workoutlogs")
  .then((result) => {
    setData(result.data);
  })
  .catch((err) => {
    console.log(err.message);
  });
});

  // Check to see if User reached their goal weight
  const reachGoal = function () {
    if (dashboard.current_weight - dashboard.goal_weight === 0) {
      return "Congratulations on reaching your achievement";
    } else {
      return `You are currently ${Math.abs(
        dashboard.current_weight - dashboard.goal_weight
      )} lbs away from reaching your goal`;
    }
  };

  // Button function to for Heatmap
  const WorkoutSubmitHandler = (event) => {
    const day = new Date().toISOString().split('T')[0];
    const user_id = 1;
    const value = 1;
    Axios.post("http://localhost:8080/api/workoutlogs",
     { user_id , value , day })
      .then((result) => {
        getHeatmap()
      })
      .catch((err) => {
        console.log(err.message);
      })
  };

  return (
    <>
      <h1>Welcome to your Dashboard {dashboard.first_name} </h1>
      <button
        onClick={() => {
          if (userEdit) {
            setUserEdit(false);
          } else {
            setUserEdit(true);
          }
        }}
      >
        Edit
      </button>
      <UserEditForm show={userEdit} showState={setUserEdit} getDashboard={getDashboard} />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Paper>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Goal: {dashboard.goal}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {reachGoal()}
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Current Weight:
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {dashboard.current_weight} lbs
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Goal Weight:
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {dashboard.goal_weight} lbs
                  </Typography>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
          <Grid item xs={12} md={12}>
            <Paper>
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Name for tracking user going to the gym
                  </Typography>
                </CardContent>
                <Box m="20px">
                  <Box height="75vh">
                    <Heatmap data={data} setData={setData} Heatmap={getHeatmap} />
                  </Box>
                </Box>
              </Card>
            </Paper>
          </Grid>
        </Grid>
        <button  onClick={() => {
        WorkoutSubmitHandler()
        }}
        >Already WorkedOut?</button>
      </Container>
    </>
  );
}
