import React, { useState, axios } from 'react';
import { Segment, Icon, Dropdown, Button, Container } from "semantic-ui-react";

export default function FilterPosts({ posts}) {

  const [state, setState] = useState({
    posts: posts,
    topic: ''
  });

  const displayFilteredPosts = () => {
    console.log('posts', posts)
    const filteredPosts = [];
    for (const post of posts) {
      console.log('post', post)
      if (post.topic === state.topic) {
      console.log('Topic',  state.topic)
      filteredPosts.push(post)
      } 
    }
    console.log("is is this?", filteredPosts);
    setState((prev) => {
      return { ...prev, posts: [...prev.posts, filteredPosts]};
  })
  console.log("is is THAT?", state.posts);
};
  const topicFilterValues = ['general', 'question', 'plant hack'];

  const topicFilterOptions = topicFilterValues.map((element) => ({
    key: element,
    text: element,
    value: element
  }));
  
  const clickHandler = (event, data) => {
    setState((prev) => ({
      ...prev,
      topic: data.value
    }));
  };
  
   return (
    <Segment raised>
      <label>Filter Posts by Topic:</label>
     <Segment.Group horizontal>
          <Dropdown
            placeholder="Click to select your filter"
            fluid
            selection
            options={topicFilterOptions}
            onChange={clickHandler}
          />
          <Button animated onClick={displayFilteredPosts}>
            <Button.Content visible>Go</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow right' />
            </Button.Content>
          </Button>
     </Segment.Group>
     </Segment>
   )
}