import supabase from "../config/supabaseClient.js";
import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Landing from "./routes/LandingRoute";


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
    <>
      <NavBar />
      <Landing />
      <Footer />
    </>
  );
}

export default App;
