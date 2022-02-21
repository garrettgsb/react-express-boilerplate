import React from "react";
import { Link } from "react-router-dom";
import { Form, Grid, Checkbox, Segment, Message } from "semantic-ui-react";

export default function LoginForm({ login, user }) {
  //const loggedUser = getUserById(users, user);

  const submitForm = () => {
    login();
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Message color="green">
          <Form onSubmit={submitForm}>
            <Form.Field>
              <Form.Input required={true} label="Email" value="bulbasaur@plant.it" placeholder="Enter your email" />
            </Form.Field>
            <Form.Field>
              <Form.Input required={true} label="Password" type="password" value="bla-bla-bla" placeholder="Enter your password" />
            </Form.Field>
            <Form.Field>
              <Segment compact>
                <Checkbox toggle label="I agree to follow watering reminders" />
              </Segment>
            </Form.Field>
            <Link to="/dashboard">
              <div className="ui buttons">
                <button className="ui yellow button">Sign Up</button>
                <div className="or"></div>
                <button type="submit" className="ui olive button" onClick={submitForm}>
                  Login
                </button>
              </div>
            </Link>
          </Form>
        </Message>
      </Grid.Column>
    </Grid>
  );
}
