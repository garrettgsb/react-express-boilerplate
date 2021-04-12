import React from 'react';


export default function Tweets(props) {

  //replace this with when connected to tweet streams
  const { name, handle, text, image, date } = props

  console.log('props', props)
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