import React from "react";
import "semantic-ui-css/semantic.min.css"
import { Header, Segment, Container, Grid, Icon, Divider } from "semantic-ui-react";
import NewPostForm from "./components/Newsfeed/NewPost";
import PostList from "./components/Newsfeed/PostList";
import { getUserById } from "./helpers/selectors";


export default function Newsfeed({ posts, users, userId, fetchPosts }) {
  const [showNewPostForm, setShowNewPostForm] = React.useState(false);
  const onClick = () => {
    !showNewPostForm ? setShowNewPostForm(true) : setShowNewPostForm(false)
  };

  const user = getUserById(users, userId);
  const name = user && user.name;
  return (
    <Container>
      
      <Grid>       
          <Grid.Column width={10} >
          <Segment.Group>
            <Header size='large'>Hey {name}, what's on your mind?
            <Icon name='comment alternate olive'/>
            </Header>
           
            < div onClick={onClick} className="ui animated fade button orange">
              <div className="visible content">
                Create
              </div>
              <div className="hidden content">
                New Post
              </div>
            </div>
            </Segment.Group>
             
            { showNewPostForm ? <NewPostForm user={user} fetchPosts={fetchPosts} onClick={onClick}/> : null }
            </Grid.Column>
         
        <Grid.Column width={10} >
            <Divider horizontal>
              <Header as='h4'>
                <Icon name='rss olive' />
                Newsfeed
              </Header>
            </Divider>

              <PostList posts={ posts } users={ users }/>

        </Grid.Column>
      </Grid>
    </Container>
    
  );
};