import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router";
import Itinerary from "./Itinerary";

const archivedTrips = [
  {
    location: "London",
    link: "somelink1",
  },
  {
    location: "Vancouver",
    link: "somelink1",
  },
  {
    location: "Calgary",
    link: "somelink1",
  },
];

const Itineraries = () => {
  const { path, url } = useRouteMatch();
  console.log("path", path);
  console.log("url", url);

  const trip = archivedTrips.map((city, id) => {
    return (
      <Itinerary location={city.location}>
        <Link to={`itinerary/${id}`}>{id}</Link>
      </Itinerary>
    );
  });
  return (
    <div>
      <h1>Itineraries page</h1>
      {trip}
    </div>
  );
};

export default Itineraries;
