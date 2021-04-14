import userEvent from '@testing-library/user-event';
import React from 'react';


export default function Tweets(props) {

  //replace this with when connected to tweet streams
  const { name, handle, text, img, created_at } = props

  return (
    <article>
      <header>
        <div className="tweeter">
          <span className="profile">
            <img src={img} alt='profile picture'/>
            {name}
          </span>
          <a className="handle" href={`https://twitter.com/${handle}`} target="_blank">{handle}</a>
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