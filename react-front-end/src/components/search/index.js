import React, {useState, useEffect} from "react";
import axios from "axios";


export default function Search() {
  const [searchTerm, setSearchTerm] = useState("")
  const [species, setSpecies] = useState([])
  const [filteredSpecies, setFilteredSpecies] = useState([])
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("form submit");
    const filtered= species.filter((mySpecies)=> {
      return mySpecies.common_name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    setFilteredSpecies(filtered);
  }
  useEffect(()=> {
    axios.get("http://localhost:8080/search")
    .then((res)=>{
      setSpecies(res.data);
      setFilteredSpecies(res.data);
    })}, []);
  return (
    <div>
      <h2>Search Page</h2>
      <p>This is a test of the search page.</p>
      <form onSubmit={submitHandler}>
        <input value={searchTerm} onChange={(event) => {setSearchTerm(event.target.value)}} />
        <button type="submit">Search</button>
      {filteredSpecies.map((species, index)=> {
        return <p key={index}>
          {species.common_name}
        </p>
      })}
        
      </form>
    </div>
  );
}