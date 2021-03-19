import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import { Container, Button, Form, Row, Col } from "react-bootstrap";

import PlantList from "../plantList/plantList";


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
      <Container>
        <h2>Search Page</h2>
        <p>This is a test of the search page.</p>

        <Form  onSubmit={submitHandler}>
          <Row>
            <Col sm={11} className="mb-3">
              <Form.Control type="searchTerm" placeholder="Search plants by name..." value={searchTerm} onChange={(event) => {setSearchTerm(event.target.value)}} />
            </Col>
            <Col>
              <Button variant="success" type="submit">
                <i class="fas fa-search"></i>
              </Button>
            </Col>
          </Row>
          {/* <Row>
            <Form.Group controlId="sortBy">
              <Col sm={2}>
                <Form.Check type="checkbox" label="A-Z" />
              </Col>
              <Col sm={2}>
                <Form.Check type="checkbox" label="Z-A" />
              </Col>
            </Form.Group>
          </Row> */}

        </Form>

        {/* <form onSubmit={submitHandler}>
          <input value={searchTerm} onChange={(event) => {setSearchTerm(event.target.value)}} />
          <Button type="submit" variant="success">Search</Button>
        </form> */}

        {/* {filteredSpecies.map((species, index)=> {
          return <p key={index}>
            {species.common_name}
          </p>
        })} */}

        <PlantList
          list={filteredSpecies}
        />

      </Container>
    </Styles>
  );
}