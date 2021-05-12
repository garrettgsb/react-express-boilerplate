import axios from "axios";
import React, { useState, setState, useEffect } from "react";

const Moods = (props) => {

  return (
    <article className="MoodsPage">
      <section className="Moods">
      <div className="MoodsTop">
        <div className="MoodBox">
        <input type="image" src={require("../images/newPanda.png")} alt="PandaImage"className="Mood" width="85%" />
      <button value="Depression" onClick={props.handleClick}>Depressed</button>
      </div>
      <div className="MoodBox">
      <input type="image" src={require("../images/newPanda.png")} alt="PandaImage"className="Mood" width="85%" />
      <button value="Anxiety" onClick={props.handleClick}>Anxious</button>
      </div>
      </div>
      <div className="MoodsBottom">
      <div className="MoodBox">
      <input type="image" src={require("../images/newPanda.png")} alt="PandaImage" className="Mood" width="85%" />
      <button value="Angry" onClick={props.handleClick}>Angry</button>
      </div>
      <div className="MoodBox">
      <input type="image" src={require("../images/newPanda.png")} alt="PandaImage" className="Mood" width="85%" />
      <button value="Scared" onClick={props.handleClick}>Scared</button>
      </div>
      </div>
      </section>
      <hr />
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
    </article>
  );
};

export default Moods;