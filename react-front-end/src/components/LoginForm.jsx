import React from 'react';
import { Button, Form, Grid, Checkbox, Image, Message, Segment } from 'semantic-ui-react';

export default function LoginForm() {
  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size='large'>
          <Segment stacked>
            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' />
            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' />
            <Form.Field>
              <Checkbox label='I agree to water my plants on time' />
            </Form.Field>
            <Button color='olive' size='large'>
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href='#'>Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
}
