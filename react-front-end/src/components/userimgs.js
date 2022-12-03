import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function UserImgs(props){

  const [drawings, setDrawings] = useState([]);

  useEffect(() => {
    (async () => {
      let res = await Axios.post('/api/user', {
        user_id: props.user.id
      })
      setDrawings(res.data.map((drawing) => {
        return (
          <div className="img" id={drawing.id} key={drawing.id}>
            <img src={drawing.img_url} />
          </div>
        )
      }))
    })();
  }, []);

  return (
    <section className="user_images">
      <ul className="user_drawing_list">
        {drawings}
      </ul>
    </section>
  )
}