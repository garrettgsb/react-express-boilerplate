import React from 'react';

const tempProps = {
  name: 'Sori',
  handle: '@hansoridev',
  text: 'apecave apecave apecave mailchimpapecave apecave apecave mailchimpapecave apecave apecave mailchimpapecave apecave apecave mailchimpapecave apecave apecave mailchimpapecave apecave apecave mailchimpapecave apecave apecave mailchimp',
  img: './images/user.png',
  date: '10s ago'
}
export default function Tweets() {

  //replace this with when connected to tweet streams
  const { name, handle, text, image, date } = tempProps
  return (
    <article>
      <header>
        <div className="tweeter">
          <span className="profile">
            <img src={'./images/user.png'} alt=''/>
            {name}
          </span>
          <span className="handle">{handle}</span>
        </div>
      </header>
      <div className="tweet">{text}
      </div>
      <footer>
        {/* <div className="timestamp"><p>{date}</p></div> */}
        <div className="interact">
        </div>
      </footer>
    </article>
  );
}