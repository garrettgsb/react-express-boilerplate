import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
// import { useStyles } from "Component_Style/User.jsx";

export default function Job(props) {
  let { id } = useParams();
  const history = useHistory();

  const addFriend = () => {
    const friend = {
      first_user_id: props.activeUser,
      second_user_id: job.user_id,
    };
    axios.put(`/api/friends`, friend).then(() => {});
    localStorage.setItem("activeConversation", [
      friend.first_user_id,
      friend.second_user_id,
    ]);
    history.push("/messages");
  };

  const [job, setJob] = useState({});

  useEffect(() => {
    axios.get(`/api/jobs/${id}`).then((res) => {
      setJob(res.data.job[0]);
    });
  }, []);

  return (
    <div className="Job">
      {job.title}
      <div className="Job">{job.username}</div>
      <div className="Job">{job.description}</div>
      <div className="Job">{job.pay}</div>
      <div className="Job">{job.company}</div>
      <div className="Job">{job.location}</div>
      <button type="submit" value="Submit" onClick={addFriend} path="/messages">
        Contact
      </button>
    </div>
  );
}
