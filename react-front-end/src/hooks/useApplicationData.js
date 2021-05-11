import axios from "axios";
import { useReducer, useEffect } from "react";

export default function useApplicationData() {
  const SET_APPLICATION_DATA = "SET_APPLICATION_DATA";
  const SET_ACTIVE_USER = "SET_ACTIVE_USER";

  const reducer = (state, action) => {
    const actions = {
      SET_APPLICATION_DATA: {
        ...state,
        ...action.data,
      },
      SET_ACTIVE_USER: {
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
  });

  const setActiveUser = (paramId) => {
    dispatch({
      type: SET_ACTIVE_USER,
      data: { activeUser: paramId },
    });
    localStorage.setItem("User", paramId);
  };

  useEffect(() => {
    const userLogin = localStorage.getItem("User");
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
      if (userLogin) {
        const userFound = JSON.parse(userLogin);
        setActiveUser(userFound);
      }
    });
  }, []);

  return {
    state,
    setActiveUser,
  };
}
