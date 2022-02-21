import React, { useState } from "react";
import "semantic-ui-css/semantic.min.css";
import "./Newsfeed.css";
import { Header, Segment, Container, Grid, Icon, Divider, Item, Button } from "semantic-ui-react";
import PostList from "./components/Newsfeed/PostList";
import { getUserById } from "./helpers/selectors";
import Video from "./components/Newsfeed/Video";
import NewPost from "./components/Newsfeed/NewPost";
import FilterPosts from "./components/Newsfeed/FilterPosts";

export default function Newsfeed({ posts, comments, users, userId, createNewPost, renderFilteredPosts }) {
  const [isVisibleForm, setIsVisibleForm] = useState(false);
  const [isVisibleFilter, setIsVisibleFilter] = useState(false);

  const user = getUserById(users, userId);
  const name = user && user.name;
  return (
    <Container className="newsfeed">
      <Grid>
        <Grid.Row>
          <Grid.Column width={10}>
            <Segment clearing horizontal>
              <Header size="large">Hey {name}, what's on your mind?</Header>

              <Button floated="right" onClick={() => setIsVisibleForm(true)} animated="fade" color="orange">
                <Button.Content visible>Create New Post?</Button.Content>
                <Button.Content hidden>Sure!</Button.Content>
              </Button>

              <Button floated="right" onClick={() => setIsVisibleFilter(true)} animated="vertical" basic color="green">
                <Button.Content hidden>Filter</Button.Content>
                <Button.Content visible>
                  <Icon name="filter" />
                </Button.Content>
              </Button>
            </Segment>

            <br></br>
            {isVisibleForm && <NewPost user={user} setIsVisibleForm={setIsVisibleForm} createNewPost={createNewPost} />}
            <br></br>
          </Grid.Column>

          <Grid.Column width={6}>
            <Video />
          </Grid.Column>

          <Grid.Column width={10}>
            {isVisibleFilter && (
              <FilterPosts posts={posts} renderFilteredPosts={renderFilteredPosts} setIsVisibleFilter={setIsVisibleFilter} />
            )}
            <Divider horizontal>
              <Header as="h4">
                <Icon name="rss olive" />
                Newsfeed
              </Header>
            </Divider>
            <PostList posts={posts} comments={comments} users={users} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
