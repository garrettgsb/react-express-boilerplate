import {useState, useEffect} from 'react';
import InputArea from './InputArea';
import MessageBubble from './MessageBubble';

const ChatRoom = (props) => {
  const [messageHistory, setMessageHistory] = useState([]);
  const [message, setMessage] = useState('');

  // set message history as state
  useEffect(() => {
    const filteredMsgs = props.messages?.filter(msg => msg.to_user_id === props.match.id || msg.from_user_id === props.match.id);
    setMessageHistory([...filteredMsgs]);
  }, [])

  // build msgdata objt to send to message history and eventually post request
  const sendMessage = (msgData) => {
    console.log('you clicked to send the msg', msgData);
    const newMsgs = [...messageHistory, msgData];
    setMessageHistory(newMsgs);
    setMessage('');
  };

  // map over message history and render messages on screen
  const renderedMsgs = messageHistory?.map((msg) => {
    return (
      <MessageBubble 
        key={msg.id}
        id={msg.id}
        content={msg.message}
        to={msg.to_user_id}
        toName={props.match.name}
        from={msg.from_user_id}
        userName={props.user[0].name}
        userId={props.user[0].id}
        date={msg.date_sent}
      />
    )
  });

  return (
    <>
    <div className='bg-white chat-room-container flex flex-col px-4 py-4 justify-end'>
      {renderedMsgs}
    </div>
    <InputArea user={props.user} match={props.match} message={message} setMessage={setMessage} sendMessage={sendMessage}/>
    </>
  );
};

export default ChatRoom;