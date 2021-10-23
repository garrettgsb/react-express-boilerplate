import { useParams } from "react-router";

const Chat = () => {
  const params = useParams();
  return (
    <div>
      <h1>chat</h1>
      <h3>id: {params.id} </h3>
    </div>
  );
};

export default Chat;
