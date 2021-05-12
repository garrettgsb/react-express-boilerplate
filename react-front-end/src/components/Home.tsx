import Form from './Form';
import Mood from './Mood';

const Home = () => {

  const timeElapsed: number = Date.now();
  const currentDay = new Date(timeElapsed);

  return (
    
      <div>
        <h1>Create An Entry</h1>
        <h2>{currentDay.toDateString()}</h2>
          <Mood/>
          <Form/>
      </div>
    
  );
};

export default Home;