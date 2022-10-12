/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/styles/RegisterUser.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import JoiningStatus from "./JoiningStatus";
import DatePicker from "react-datepicker";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState, runsState } from "../hooks/useAppData";
import useAppData from "../hooks/useAppData";
import "react-datepicker/dist/react-datepicker.css";
import AutoComplete from "./AutoComplete";

export default function RegisterRun() {

  //Get user and update form state
  const user = useRecoilValue(userState);
  const [joinButtonPressed, setJoinButtonPressed] = useState(false);

  const [runData, setRunData] = useState({
    planner_id: "",
    name: "",
    description: "",
    distance: "",
    time: `${new Date().getHours()}:${new Date().getMinutes()}`,
    date: new Date(),
    file: "",
    lat: "",
    lng: "",
    address: "",
    lat_to: "",
    lng_to: "",
    address_to: "",
  });


  const navigate = useNavigate();
  const { createRun } = useAppData();

  const handleChange = (e) => {
    setRunData({ ...runData, [e.target.name]: e.target.value });
  };

 //Submit to database
  const handleSubmit = (e) => {
    e.preventDefault();

    //form validity
    // const form = e.currentTarget;
    // if (form.checkValidity() === false) {
    //   e.preventDefault();
    //   e.stopPropagation();
    // }
    //send data
    console.log(runData);
    const response = createRun({ ...runData });
    response && setJoinButtonPressed(true);
    // setValidated(true)
    // if (validated)

  };

  const datePick = () => {
    return (
      <Form.Group controlId="date" className="mb-3" style={{ width: "100%" }}>
        <Form.Label>Date</Form.Label>
        <DatePicker
          className="date-picker"
          required
          name="date"
          selected={runData.date}
          onChange={(date) => setRunData({ ...runData, date: date })}
          key={runData.date}
        />
      </Form.Group>
    );
  };

  const distanceSelector = () => {
    return (
      <div className="mb-3">
        {[2, 5, 10].map((label, index) => {
          return (
            <Form.Check
              required
              key={label}
              inline
              type="radio"
              id={`inline-radio-1-${index}`}
              label={`${label}k`}
              value={label}
              name="distance"
              onChange={handleChange}
            />
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    if (!user) {
      navigate("/signin");
    }
    if (user) {
      setRunData({ ...runData, planner_id: user.id });
    }
  }, []);

  return (
    <div className="forms">
      <Form
        className="form-container"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
      >
        <div className="form-container-text">
          <Form.Text as="h3">Create a Run</Form.Text>
          <Form.Text as="p">
            Don't see a run event near you? Just tell us where and when and the
            rest is on us.
          </Form.Text>
        </div>
        <FloatingLabel controlId="name" label="Name" className="mb-3">
          <Form.Control
            required
            type="text"
            placeholder="Name"
            name="name"
            value={runData.name}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Enter a name for the run.
          </Form.Control.Feedback>
        </FloatingLabel>
        <FloatingLabel
          controlId="description"
          label="Description"
          className="mb-3"
        >
          <Form.Control
            required
            as="textarea"
            type="text"
            name="description"
            placeholder="Description"
            value={runData.description}
            onChange={handleChange}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Write a short description including directions, necessary
            information, etc.
          </Form.Control.Feedback>
        </FloatingLabel>

        <Row>
          <Col>
            <FloatingLabel
              controlId="location"
              label="From..."
              className="mb-3"
            >
              <AutoComplete
                setAddress={(address, lat, lng) =>
                  setRunData((prev) => {
                    return { ...prev, address: address, lat: lat, lng: lng };
                  })
                }
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Enter a valid address.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="location" label="To..." className="mb-3">
              <AutoComplete
                setAddress={(address, lat, lng) =>
                  setRunData((prev) => {
                    return {
                      ...prev,
                      address_to: address,
                      lat_to: lat,
                      lng_to: lng,
                    };
                  })
                }
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Enter a valid address.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Col>
        </Row>
        <Form.Group controlId="distance" className="mb-3">
          <Form.Label>Distance</Form.Label>
          {distanceSelector()}
        </Form.Group>

        <Row>
          <Col>{datePick()}</Col>
          <Col>
            <Form.Group controlId="time" className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Control
                required
                key={runData.time}
                type="time"
                name="time"
                placeholder="Time"
                value={runData.time}
                onChange={(event) =>
                  setRunData({ ...runData, time: event.target.value })
                }
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Enter a valid time.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Label>Upload an image</Form.Label>
          <Form.Control
            required
            name="file"
            type="file"
            onChange={(e) =>
              setRunData({ ...runData, file: e.target.files[0] })
            }
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Upload an image for this run.
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="custom" type="submit" className="btn">
          Create
        </Button>
      </Form>
      <JoiningStatus
          joinButtonPressed={joinButtonPressed}
          setJoinButtonPressed={setJoinButtonPressed}
          text="PLANNING"
        />
    </div>
  );
}
