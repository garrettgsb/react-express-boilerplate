import React from "react";

const Moods = (props) => {
  return (
    <article>
      <br />
      <div className="MoodBox">
        <button>
      <img
        className="Avatar"
        src={require("../images/pandaprofile.png")}
        alt="PandaAvatar"
        width="200"
        height="200"
      />
      </button>
        <h3>Depressed</h3>
      </div>
      <div className="MoodBox">
        <button>
      <img
        className="Avatar"
        src={require("../images/pandaprofile.png")}
        alt="PandaAvatar"
        width="200"
        height="200"
      />
      </button>
        <h3>Anxious</h3>
      </div>
      <div className="MoodBox">
        <button>
      <img
        className="Avatar"
        src={require("../images/pandaprofile.png")}
        alt="PandaAvatar"
        width="200"
        height="200"
      />
      </button>
        <h3>Angry</h3>
      </div>
      <div className="MoodBox">
        <button>
      <img
        className="Avatar"
        src={require("../images/pandaprofile.png")}
        alt="PandaAvatar"
        width="200"
        height="200"
      />
      </button>
        <h3>Sad</h3>
      </div>
      <hr />
      <h3>More Resources</h3>
      <a href="https://www.betterhelp.com/helpme/?utm_source=AdWords&utm_medium=Search_PPC_c&utm_term=betterhelp_e&utm_content=113425365251&network=g&placement=&target=&matchtype=e&utm_campaign=10969405372&ad_type=text&adposition=&gclid=Cj0KCQjws-OEBhCkARIsAPhOkIZjT-gD9dfHaAXRWFPjDRtLjjcQPLfVxiUrsLcsDJOAQZwFgRjkqLoaAmt1EALw_wcB&not_found=1&gor=helpme" target="_blank">BetterHelp</a>
      <a href="https://www.goodnewsnetwork.org/" target="_blank">GoodNewsNetwork</a>

    </article>
  );
};

export default Moods;
