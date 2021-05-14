import React from "react";
import HomeAnimation from "./home_animation";


const Home = (props) => {
  return (
    <div className="App">
      <HomeAnimation />
    </div>
  );
};

export default Home;





// I changed a few things and I don't think we need this function anymore. I will keep it here just in case I broke something - Luke 

  // const [moods, setMoods] = useState({});
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setMoods({
  //     category: e.target.value,
  //   });
  // };
  // useEffect(() => {});