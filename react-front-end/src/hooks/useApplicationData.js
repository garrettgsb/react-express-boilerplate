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
    friends: [],
    jobs: [],
    messages: [],
    flag: false,
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
    Promise.all([
      axios.get(`/api/users`),
      axios.get(`/api/artworks`),
      axios.get(`/api/friends`),
      axios.get(`/api/jobs`),
      axios.get(`/api/messages`),
    ]).then((all) => {
      dispatch({
        type: SET_APPLICATION_DATA,
        data: {
          users: all[0].data.users,
          artworks: all[1].data.artworks,
          friends: all[2].data.friends,
          jobs: all[3].data.jobs,
          messages: all[4].data.messages,
          flag: true,
        },
      });
    });
  }, []);

  return { state, setActiveUser };
}
