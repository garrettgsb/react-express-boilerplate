import React  from "react";
import { useHistory} from "react-router-dom";
import MenuAppBar from "./navbar";

const Moods = (props) => {
  const history = useHistory();
  function handleClick(e) {
    history.push(`/moods/${e.target.value}`);
  }

  return (
    <>
      <MenuAppBar />
      <article className="MoodsPage">
        <section className="Moods">
          <div className="MoodsTop">
            <div className="MoodBox">
              <input
                value="Depressed"
                onClick={handleClick}
                type="image"
                src={require("../images/newPanda.png")}
                alt="PandaImage"
                className="Mood"
              />
              <h2>Depressed</h2>
            </div>
            <div className="MoodBox">
              <input
                value="Anxious"
                onClick={handleClick}
                type="image"
                src={require("../images/newPanda.png")}
                alt="PandaImage"
                className="Mood"             
              />
              <h2>Anxious</h2>
            </div>
          </div>
          <div className="MoodsBottom">
            <div className="MoodBox">
              <input
                value="Angry"
                onClick={handleClick}
                type="image"
                src={require("../images/newPanda.png")}
                alt="PandaImage"
                className="Mood"
              />

              <h2>Angry</h2>
            </div>
            <div className="MoodBox">
              <input
                value="Scared"
                onClick={handleClick}
                type="image"
                src={require("../images/newPanda.png")}
                alt="PandaImage"
                className="Mood"
              />
              <h2>Scared</h2>
            </div>
          </div>
        </section>
        <hr />
        <div className="MoreResources">
          <h3>
            More Resources<hr></hr>
          </h3>
          <a
            href="https://www.betterhelp.com/helpme/?utm_source=AdWords&utm_medium=Search_PPC_c&utm_term=betterhelp_e&utm_content=113425365251&network=g&placement=&target=&matchtype=e&utm_campaign=10969405372&ad_type=text&adposition=&gclid=Cj0KCQjws-OEBhCkARIsAPhOkIZjT-gD9dfHaAXRWFPjDRtLjjcQPLfVxiUrsLcsDJOAQZwFgRjkqLoaAmt1EALw_wcB&not_found=1&gor=helpme"
            target="_blank"
            rel="noopener noreferrer"
          >
            BetterHelp
          </a>
          <a
            href="https://www.goodnewsnetwork.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GoodNewsNetwork
          </a>
          <a href="/meditation" rel="noopener noreferrer">
            Meditate With Hiroki
          </a>
        </div>
      </article>
    </>
  );
};

export default Moods;
