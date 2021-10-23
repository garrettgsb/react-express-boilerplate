import { useParams } from "react-router";

const Itinerary = (props) => {
  //take the :id from url
  const params = useParams();

  return (
    <div>
      <h1>location: {props.location}</h1>
      <h2>Link: {props.children}</h2>
      <h3>id: {params.id} </h3>
    </div>
  );
};

export default Itinerary;
