import Form from './Form';
import Mood from './Mood';
import PrivacySetting from './PrivacySetting'

const Home = () => {

  const timeElapsed: number = Date.now();
  const currentDay = new Date(timeElapsed);

  console.log("Home has loaded");
  
  return (
    
      <div>
        <h1>Create An Entry</h1>
        <h2>{currentDay.toDateString()}</h2>
          <Mood />
          <Form />
          <PrivacySetting />
      </div>
    
  );
};

export default Home;