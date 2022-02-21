import React, { useState } from "react";
import { Form, Button, TextArea, Message } from "semantic-ui-react";

export default function NewCommentForm({ user_id, post_id, setIsVisibleCommentForm, createNewComment }) {
  const [state, setState] = useState({
    comment_text: "",
  });

  const onClose = (event) => {
    setIsVisibleCommentForm(false);
  };

  const submitForm = () => {
    createNewComment(post_id, user_id, state.comment_text);
    onClose();
  };

  return (
    <Message color="olive">
      <Form onSubmit={submitForm}>
        <Button icon="close" floated="right" onClick={onClose} />
        <Form.Field>
          <TextArea
            onChange={(e, data) => {
              setState((prev) => ({
                ...prev,
                comment_text: data.value,
              }));
            }}
            placeholder="Enter your text here"
            label="Post a Comment"
          />
        </Form.Field>

        <Button color="grey" onClick={submitForm}>
          Add Comment
        </Button>
      </Form>
    </Message>
  );
}
