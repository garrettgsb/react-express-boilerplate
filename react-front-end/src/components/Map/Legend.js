import { useEffect } from "react";
import L from "leaflet";

//function to create map legend
function Legend({ map }) {
  useEffect(() => {
    if (map) {
      const legend = L.control({ position: "topleft" });

      const getColor = (r) => {
        return r === "5"
          ? "#264d59"
          : r === "4"
          ? "#43978d"
          : r === "3"
          ? "#f9e07f"
          : r === "2"
          ? "#f9ad6a"
          : r === "1"
          ? "#d46c4e"
          : "#FFEDA0";
      };

      legend.onAdd = () => {
        const div = L.DomUtil.create("div", "info legend");
        const grades = ["5", "4", "3", "2", "1"];
        let labels = [];
        let rating;

        for (let i = 0; i < grades.length; i++) {
          rating = grades[i];

          labels.push(
            '<i style="background:' + getColor(rating) + '"></i> ' + rating
          );
        }

        div.innerHTML = "<h4>Area</h4> <h4>Rating</h4>" + labels.join("<br>");
        return div;
      };

      legend.addTo(map);
    }
  }, [map]);
  return null;
}

export default Legend;
