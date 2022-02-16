import React from 'react'
import { Button, Checkbox, Form, Component, Segment } from 'semantic-ui-react'


class NewPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     value: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    // this.setState({description: event.target.description});
    // this.setState({topic: event.target.topic});
    // this.setState({image: event.target.image});
  }

  handleSubmit(event) {
    alert('Magic happens and new post appears: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
<Segment raised>
  <Form onSubmit={this.handleSubmit}>
    <Form.Field>
      <label>Title</label>
      <input value={this.state.title} onChange={this.handleChange} placeholder='Please enter a title for your post' />
    </Form.Field>
    <Form.Field>
      <label>Description</label>
      <textarea value={this.state.description} onChange={this.handleChange} placeholder='Tell us more...' />
    </Form.Field>

    <label>
          Topic of you post is:
          <select value={this.state.topic} onChange={this.handleChange}>
            <option value="general">General</option>
            <option value="question">Question</option>
            <option value="plant hack">Plant Hack</option>
          </select>
        </label>

    <Form.Field>
    <label>Upload an Image</label>
      <input type="file" />
    </Form.Field>

    <div class="ui buttons">
      <button class="ui button">Cancel</button>
      <div class="or"></div>
      <button class="ui positive button">Save</button>
    </div>

  </Form>
  </Segment>
    
    )
  }
}
export default NewPost
