import "./App.css";
import supabase from "../config/supabaseClient.js";
import { useEffect, useState } from "react";

function App() {
  const [fetchError, setFetchError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, error } = await supabase.from("users").select();

        if (error) {
          setFetchError("Could not fetch data");
          setData(null);
          console.log(error.message);
        } else {
          setFetchError(null);
          setData(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {fetchError && <p>{fetchError}</p>}
      {data && (
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              `{`ID: ${user.id} - Name: ${user.name} - User Bio: ${user.bio}`}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
