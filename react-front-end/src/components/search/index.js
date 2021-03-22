import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { Container, Button, Form, Row, Col } from "react-bootstrap";

import PlantList from "../plantList/plantList";
import Hero from "../hero";


const Styles = styled.div`
  .form-control {
    font-family: "Montserrat", Helvetica, sans-serif;
  }
`;


export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [species, setSpecies] = useState([]);
  const [filteredSpecies, setFilteredSpecies] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("form submit");
    const filtered= species.filter((mySpecies)=> {
      return mySpecies.common_name.toLowerCase().includes(searchTerm.toLowerCase());
    })
    setFilteredSpecies(filtered);
  };

  useEffect(()=> {
    axios.get("http://localhost:8080/search")
    .then((res)=>{
      setSpecies(res.data);
      setFilteredSpecies(res.data);
    })
  }, []);

  return (
    <Styles>
        <Hero
          header="Find a Plant"
          text="Find you next plant here"
        >
          <Form  onSubmit={submitHandler}>
            <Row>
              <Col sm={11} className="mb-3">
                <Form.Control type="searchTerm" placeholder="Search plants by name..." value={searchTerm} onChange={(event) => {setSearchTerm(event.target.value)}} />
              </Col>
              <Col sm={1}>
                <Button variant="success" type="submit">
                  <i className="fas fa-search"></i>
                </Button>
              </Col>
            </Row>
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