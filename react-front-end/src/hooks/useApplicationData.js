import axios from "axios";
import { useReducer, useEffect } from "react";

export default function useApplicationData() {
  const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
  const SET_JOBS = "SET_JOBS";
  const SET_ACTIVE_USER = "SET_ACTIVE_USER";
  const SET_ACTIVE_USER_JOBS = "SET_ACTIVE_USER_JOBS";
  const SET_PORTFOLIO = "SET_PORTFOLIO";

  const reducer = (state, action) => {
    const actions = {
      SET_APPLICATION_DATA: {
        ...state,
        ...action.data,
      },
      SET_JOBS: {
        ...state,
        ...action.data,
      },
      SET_ACTIVE_USER: {
        ...state,
        ...action.data,
      },
      SET_ACTIVE_USER_JOBS: {
        ...state,
        ...action.data,
      },
      SET_PORTFOLIO: {
        ...state,
        ...action.data,
      },
      default: new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      ),
    };
    return actions[action.type] || actions.default;
  };

  const [state, dispatch] = useReducer(reducer, {
    users: [],
    artworks: [],
    jobs: [],
    activeUser: 0,
    userJobs: [],
    portfolio: [],
  });

  const setActiveUser = (userID) => {
    Promise.all([
      axios.get(`/api/jobs/${userID}`),
      axios.get(`/api/users/${userID}`),
    ]).then((all) => {
      dispatch({
        type: SET_ACTIVE_USER,
        data: { activeUser: userID },
      });
      dispatch({
        type: SET_ACTIVE_USER_JOBS,
        data: { userJobs: all[0].data.userJobs },
      });
      dispatch({
        type: SET_PORTFOLIO,
        data: { portfolio: all[1].data.portfolio },
      });
    });
    localStorage.setItem("User", userID);
  };

  const setJobs = () => {
    Promise.all([axios.get(`/api/jobs/`)]).then((all) => {
      dispatch({
        type: SET_JOBS,
        data: { jobs: all[0].data.jobs },
      });
    });
  };

  const setUserJobs = () => {
    Promise.all([axios.get(`/api/jobs/${state.activeUser}`)]).then((all) => {
      dispatch({
        type: SET_ACTIVE_USER_JOBS,
        data: { userJobs: all[0].data.userJobs },
      });
    });
  };

  const setPortfolio = () => {
    Promise.all([axios.get(`/api/users/${state.activeUser}`)]).then((all) => {
      dispatch({
        type: SET_PORTFOLIO,
        data: { portfolio: all[0].data.portfolio },
      });
    });
  };

  const checkLoggedIn = () => {
    const userLogin = localStorage.getItem("User");
    if (userLogin) {
      const userFound = JSON.parse(userLogin);
      setActiveUser(userFound);
    }
  };

  useEffect(() => {
    Promise.all([
      axios.get(`/api/users`),
      axios.get(`/api/artworks`),
      axios.get(`/api/jobs`),
    ]).then((all) => {
      dispatch({
        type: SET_APPLICATION_DATA,
        data: {
          users: all[0].data.users,
          artworks: all[1].data.artworks,
          jobs: all[2].data.jobs,
        },
      });
      checkLoggedIn();
    });
  }, []);

  return {
    state,
    setActiveUser,
    setUserJobs,
    setJobs,
    setPortfolio,
    checkLoggedIn,
  };
}
