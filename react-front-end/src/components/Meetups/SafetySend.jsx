import React, { useState } from 'react'
import './SafetySend.scss';

// const SafetySend
function SafetySend () {

  const [text, setText] = useState({
      recipient: '',
      textmessage: ''
    })
  
  
  function sendText () {
    // pass variables in query string
    fetch(`http://localhost:8080/text?recipient=${text.recipient}&textmessage=${text.textmessage}`)
    .then(() => console.log('successfully sent text'))
    .catch(err => console.log(err))
  }

  function selectMessage() {
    console.warn('function called')
  }

  return (
    <div className='safety-send' >
      <h2> Send Text Message </h2>
      <label> Your Phone Number </label>
      <br />
      <input value = {text.recipient} 
      // set state as user types in phone number
      onChange={e => setText({ ...text, recipient: e.target.value})} />
      <div className='spacer' />
      <label> Message </label>
      <br />
      <textarea rows={3} value={text.textmessage} className='text-area' 
      // set state as user types in message
        onChange={e => setText({ ...text, textmessage: e.target.value })}/>
      <div className='spacer' />
      <button onClick={sendText}> Send Text </button>
    </div>
  )
}

export default SafetySend;

// working version
// <div className='safety-send' >
// <h2> Send Text Message </h2>
// <label> Your Phone Number </label>
// <br />
// <input value = {text.recipient} 
// // set state as user types in phone number
// onChange={e => setText({ ...text, recipient: e.target.value})} />
// <div className='spacer' />
// <label> Message </label>
// <br />
// <textarea rows={3} value={text.textmessage} className='text-area' 
// // set state as user types in message
//   onChange={e => setText({ ...text, textmessage: e.target.value })}/>
// <div className='spacer' />
// <button onClick={sendText}> Send Text </button>
// </div>