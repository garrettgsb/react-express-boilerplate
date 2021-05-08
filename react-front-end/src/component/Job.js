import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Job(props) {
  let { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    axios.get(`/api/jobs/${id}`).then((res) => {
      console.log("pirate treasure", res.data.job);
      setJob(res.data.job[0]);
    });
  }, []);

  return (
    <div className="Job">
      {job.title}
      <div className="Job">{job.username}</div>
      <div className="Job">{job.description}</div>
      <div className="Job">{job.pay}</div>
    </div>
  );
}
