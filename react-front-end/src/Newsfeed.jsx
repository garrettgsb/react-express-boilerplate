import React from "react";
import "semantic-ui-css/semantic.min.css"
import { Header, Segment, Container, Grid, Icon, Divider, Button } from "semantic-ui-react";
import NewPost from "./components/Newsfeed/NewPost";
import PostList from "./components/Newsfeed/PostList";
import Video from "./components/Newsfeed/Video";


export default function Newsfeed({ user, posts }) {
  const name = user && user.name;
  return (
    <Container>

      <Grid>
        <Grid.Column width={10} >
          <Segment.Group>
            <Header size='large'>Hey {name}, what's on your mind?
              <Icon name='comment alternate olive' />
            </Header>

            <div className="ui animated fade button orange">
              <div className="visible content">
                Create
              </div>
              <div className="hidden content">
                New Post
              </div>
            </div>
          </Segment.Group>

          <NewPost />
        </Grid.Column>

        <Grid.Column width={6}>
          <Video />
        </Grid.Column>

        <Grid.Column width={10} >
          <Divider horizontal>
            <Header as='h4'>
              <Icon name='rss olive' />
              Newsfeed
            </Header>
          </Divider>

          <PostList posts={posts} />

        </Grid.Column>

      </Grid>
    </Container>

  );
};