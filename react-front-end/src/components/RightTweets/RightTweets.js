import React from 'react';

import Tweets from './Tweets'
import tempProps from './tempTweets'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import DoubleArrowOutlinedIcon from '@material-ui/icons/DoubleArrowOutlined';

import './RightTweets.scss';

const loadTweets = tempProps.map((tweet, i) =>
  <Tweets
    key={i}
    name={tweet.name}
    handle={tweet.handle}
    text={tweet.text}
    img={tweet.img}
    date={tweet.date}
  />
);

export default function RightTweets() {

  return (
    <section className="righttweets">
      <ChatOutlinedIcon />
      <DoubleArrowOutlinedIcon />
      {loadTweets}
    </section>
  );
}