import React, { useState } from 'react';
import { Segment, Form, List } from "semantic-ui-react";


export default function NewPostForm({ user, setIsVisible, createNewPost }) {
  console.log("user -> ", user);

  const [state, setState] = useState({
    user: user && user,
    title: '',
    description: '',
    photo: '',
    topic: 'general'
  });

  const submitForm = () => {
    createNewPost(user, state.title, state.description, state.photo, state.topic)
    // fetchPosts();
    onClose();
  };
  

  const onClose = (event) => {
    setIsVisible(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Segment raised>
      <Form onSubmit={submitForm}>

        <Form.Field>
          <Form.Input required={true}
            onChange={(e, data) => {
              console.log("working??", data);
              setState((prev) => ({
                ...prev,
                title: data.value,
              }));
            }} label='Title' placeholder='Enter post title' />
        </Form.Field>
        <Form.Field>
          <Form.TextArea required={true}
            onChange={(e, data) => {
              console.log("description", data);
              setState((prev) => ({
                ...prev,
                description: data.value,
              }));
            }} label="Location"
            placeholder="Tell us more about it" />
        </Form.Field>

        <Form.Field>

          <Form.Input onChange={(e, data) => {
            console.log("Photo", data);
            setState((prev) => ({
              ...prev,
              photo: data.value,
            }));
          }} label="Photo" placeholder='Paste you the URL of your photo' />
        </Form.Field>

        <List className={'post-topic'}>
          <List.Item>
            {state.topic
              ? "general"
              : "question"}
          </List.Item>
        </List>

        <div className="ui buttons">
          <button className="ui button" onClick={onClose} >Cancel</button>
          <div className="or"></div>
          <button type="submit" className="ui positive button" onClick={submitForm} >Save</button>
        </div>

      </Form>
    </Segment>
  );
};
