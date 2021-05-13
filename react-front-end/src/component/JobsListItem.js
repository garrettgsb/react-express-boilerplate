import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

export default function Job(props) {
  let { id } = useParams();
  const history = useHistory();

  const addFriend = () => {
    const friend = {
      first_user_id: 1,
      second_user_id: job.user_id,
    };
    axios.put(`/api/friends`, friend).then(() => {
      // window.location.reload();
    });
    history.push("/messages");
  };

  const [job, setJob] = useState({});
  console.log("id", typeof id);

  useEffect(() => {
    axios.get(`/api/jobs/${id}`).then((res) => {
      console.log("pirate treasure", res.data);
      setJob(res.data.job[0]);
    });
  }, []);
  console.log("job flag = ", job);
  return (
    <div className="Job">
      {job.title}
      <div className="Job">{job.username}</div>
      <div className="Job">{job.description}</div>
      <div className="Job">{job.pay}</div>
      <div className="Job">{job.company}</div>
      <div className="Job">{job.location}</div>
      {/* <button type="submit" value="Submit"> */}
      <button type="submit" value="Submit" onClick={addFriend} path="/messages">
        Contact
      </button>
    </div>
  );
}
