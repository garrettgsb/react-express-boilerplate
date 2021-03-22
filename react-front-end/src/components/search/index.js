import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { Container, Button, Form, Row, Col } from "react-bootstrap";

import PlantList from "../plantList/plantList";
import Hero from "../hero";
import SearchOptions from "./searchOptions";


const Styles = styled.div`
  .form-control {
    font-family: "Montserrat", Helvetica, sans-serif;
  }
`;


export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [species, setSpecies] = useState([]);
  const [filteredSpecies, setFilteredSpecies] = useState([]);
  const [searchOptions, setSearchOptions] = useState({
    "A-Z": false,
    "Z-A": false,
    "Difficulty ⬆": false,
    "Difficulty ⬇": false
  });

  const sortPlants = (list, sortOptions=searchOptions) => {
    // let sortValue, sortExp;
    // find the searchOption key that is checked/true
    const sortBy = Object.keys(sortOptions).find(key => sortOptions[key] === true);
    console.log("sort by:", sortBy);
    // define sort params, then sort accordingly
    switch(sortBy) {
      case "A-Z":
        list.sort(function(a, b) {
          var nameA = a.common_name.toUpperCase();
          var nameB = b.common_name.toUpperCase();
          if (nameA < nameB) {return -1;}
          if (nameA > nameB) {return 1;}
          return 0;
        });
        break;
      case "Z-A":
        list.sort(function(a, b) {
          var nameA = a.common_name.toUpperCase();
          var nameB = b.common_name.toUpperCase();
          if (nameA > nameB) {return -1;}
          if (nameA < nameB) {return 1;}
          return 0;
        });
        break;
      case "Difficulty ⬆":
        list.sort((a,b) => a.difficulty_rating - b.difficulty_rating);
        break;
        case "Difficulty ⬇":
          list.sort((a,b) => b.difficulty_rating - a.difficulty_rating);
          break;
      default:
        console.log("no sort option selected");
    }
    // console.log("sorted:", list);
    return list;
  };


  const submitHandler = (event) => {
    event.preventDefault();
    console.log("form submit");
    const filtered= species.filter((mySpecies)=> {
      return mySpecies.common_name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    sortPlants(filtered);
    setFilteredSpecies(filtered);
  };

  useEffect(()=> {
    axios.all([
      axios.get("http://localhost:8080/search"),
      axios.get("http://localhost:8080/wishlist", {withCredentials: true})
    ]).then(axios.spread((allPlants, wishlist) => {
      // check for matches between plants and wishlist
      const plantsWithWishlisted = allPlants.data.map(plant => {
        wishlist.data.forEach(e => {
          if (e.species_id === plant.id) {
            plant.wishlisted = true;
          }
        });
        return plant;
      });
      sortPlants(plantsWithWishlisted);
      setSpecies(plantsWithWishlisted);
      setFilteredSpecies(plantsWithWishlisted);
    }));

    // axios.get("http://localhost:8080/search")
    // .then((res)=>{
    //   setSpecies(res.data);
    //   setFilteredSpecies(res.data);
    // })
  }, []);

  return (
    <Styles>
        <Hero
          header="Find a Plant"
          text="Find your next plant here"
        >
          <Form  onSubmit={submitHandler}>
            <Row className="justify-content-md-center">
              <Col sm={10} className="mb-3">
                <Form.Control type="searchTerm" placeholder="Search plants by name..." value={searchTerm} onChange={(event) => {setSearchTerm(event.target.value)}} size="lg" />
              </Col>
              <Col sm={1}>
                <Button variant="success" type="submit" size="lg">
                  <i className="fas fa-search"></i>
                </Button>
              </Col>
            </Row>
            <SearchOptions
              options={searchOptions}
              name="searchOptions"
              setOption={(searchOption, value) => {
                const truthyKey = Object.keys(searchOptions).find(key => searchOptions[key] === true);
                if (truthyKey) {
                  setSearchOptions({ ...searchOptions, [truthyKey]: false, [searchOption]: value });
                } else {
                  setSearchOptions({ ...searchOptions, [searchOption]: value });
                }
              }}
            />
          </Form>
        </Hero>
      <Container>

        <PlantList
          list={filteredSpecies}
          gardenButton
          wishlistButton
          noBreak
        />

      </Container>
    </Styles>
  );
}