import React, { useState, useEffect , useContext } from "react";
import axios from 'axios';

const Moods = () => {
  const [moods, setMoods] = useState(null);

  const fetchMoods = async () => {
    const response = await axios.get('http://localhost:8080/api/resources/moods')
    setMoods(response.data)
  }

  useEffect(() => {
    fetchMoods();
  }, [])

  return (
    <div className="Moods">
      <h1>Moods</h1>
      {moods && moods.map((mood, index) => {
        return (
          <div className="mood" key={index}>
            <button onClick=''>{mood.category}</button>
          </div>
        )
      })}
        <div className="MoreResources">
        <h3>More Resources<hr></hr></h3>
        <a
          href="https://www.betterhelp.com/helpme/?utm_source=AdWords&utm_medium=Search_PPC_c&utm_term=betterhelp_e&utm_content=113425365251&network=g&placement=&target=&matchtype=e&utm_campaign=10969405372&ad_type=text&adposition=&gclid=Cj0KCQjws-OEBhCkARIsAPhOkIZjT-gD9dfHaAXRWFPjDRtLjjcQPLfVxiUrsLcsDJOAQZwFgRjkqLoaAmt1EALw_wcB&not_found=1&gor=helpme"
          target="_blank" rel="noopener noreferrer"
        >
          BetterHelp
        </a>
        <a href="https://www.goodnewsnetwork.org/" target="_blank" rel="noopener noreferrer">
          GoodNewsNetwork
        </a>
        </div>
    </div>
  );
};

export default Moods;
