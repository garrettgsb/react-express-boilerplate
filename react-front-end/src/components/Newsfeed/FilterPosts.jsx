import React, { useState } from 'react';
import { Segment, Icon, Dropdown, Button } from "semantic-ui-react";

export default function FilterPosts({ posts, renderFilteredPosts, setIsVisibleFilter}) {

  const [state, setState] = useState({
    posts: posts,
    topic: ''
  });

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

  const onClick = () => {
    renderFilteredPosts(state.topic);
    setIsVisibleFilter(false);
  }
  
   return (
    <Segment raised style={{ backgroundColor: "rgba(225, 205, 48, 0.65)", textShadow: "2px 2px 2px #325036", backgroundImage: "url(https://www.transparenttextures.com/patterns/asfalt-light.png)" }}>
      <label style={{ color: "white", fontSize: "18px", fontWeight: "bold" }}>Filter Posts by Topic:</label>
     <Segment.Group horizontal>
          <Dropdown
            placeholder="Click to select your filter"
            fluid
            selection
            options={topicFilterOptions}
            onChange={clickHandler}
          />
          <Button animated onClick={onClick}>
            <Button.Content visible>Go</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow right' />
            </Button.Content>
          </Button>
     </Segment.Group>
     </Segment>
   )
}