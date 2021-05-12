interface Props {
  message: string;
};
const Home = ({ message }: Props) => {
  return (
    <div>
      <h2>Home</h2>
      {message}
    </div>
  );
};

export default Home;