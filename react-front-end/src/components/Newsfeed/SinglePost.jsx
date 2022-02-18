import React from "react";
import "semantic-ui-css/semantic.min.css";
import { Button, Icon, Image, Segment } from "semantic-ui-react";
import { getUserById } from "../../helpers/selectors";

export default function SinglePost({ id, user_id, title, photo, description, topic, created_at, users }) {
  const user = getUserById(users, user_id);

  const getMonth = (value) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let month = '';
    let num = Number(value);
    for (let i = 0; i < months.length; i++) {
      if (num === i + 1) {
        month = months[i];
      };
    };
    return month;
  };
  
  return (

    <Segment raised>
      <h2>{title}</h2>
      <Button floated="right" color="olive">
        <Icon name="leaf" />{topic}
      </Button>
      <div>
        <Image src={user && user.avatar} avatar />
        {/* <span>Posted by <b>{user && user.name}</b> on {created_at && created_at.split('T')[0]}</span> */}
        <span>Posted by <b>{user && user.name}</b> on {created_at && getMonth(created_at.split('-')[1]) + ' ' + created_at.split('-')[2].slice(0, 2) + ', ' + created_at.split('-')[0]}</span>
      </div>
      <Segment.Group horizontal>
        <Image src={photo} width='50%' height='100%' rounded />
        <h5>{description}</h5>
      </Segment.Group>

      <Segment.Group horizontal>
        <Segment><div className="ui labeled button" tabIndex="0">
          <div className="ui button">
            <i className="heart icon"></i> Like
          </div>
          <a className="ui basic label">
            2,048
          </a>
        </div></Segment>
        <Segment><div className="ui labeled button" tabIndex="0">
          <div className="ui button">
            <i className="plus icon"></i>
          </div>
          <a className="ui basic label">
            Follow
          </a>
        </div></Segment>
        <Segment>
          <div className="ui labeled button" tabIndex="0">
            <div className="ui button">
              <i className="envelope icon"></i>
            </div>
            <a className="ui basic right pointing label">
              Message
            </a>
          </div>
        </Segment>
      </Segment.Group>

    </Segment>




  )
}