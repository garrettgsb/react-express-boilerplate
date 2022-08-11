import {useState, useEffect} from 'react';
import axios from 'axios';
import InputArea from './InputArea';
import MessageBubble from './MessageBubble';
////// divide socetIO part
import io from 'socket.io-client';
const socket = io();
//////


const ChatRoom = (props) => {
  const [messagesHistory, setMessagesHistory] = useState([]);
  const [message, setMessage] = useState('');
  

  // Filter messages based on user Id and who is selected in chat view
  useEffect(() => {
    const filtered = props.allMessages?.filter(msg => msg.to_user_id === props.selected.id || msg.from_user_id === props.selected.id);
    setMessagesHistory([...filtered]);
  }, [props.allMessages]);

 // SOCKET PART
 const [isConnected, setIsConnected] = useState(socket.connected);
 const [lastPong, setLastPong] = useState(null);

////////
useEffect(() => {
 socket.on('connect', () => {
   console.log(socket.id)
   setIsConnected(true);
 });

 socket.on('disconnect', () => {
   setIsConnected(false);
 });
 socket.on('pong', () => {
  setLastPong(new Date().toISOString());
});

 socket.on("message", (message) => {
   console.log("message from socket" ,message)
  setMessagesHistory((prev) => [...prev, message]);
  
  });

 return () => {
   socket.off('connect');
   socket.off('disconnect');
   socket.off('pong');
 };
}, []);

// pass data to SocketIO
const sendToServer = (data) => {
  console.log("sent to socket", data)
 socket.emit('sendMessage', data);
 const msgFetchTrigger = props.messageSent;
        props.setMessageSent(!msgFetchTrigger);
               setMessage('');
}
const sendPing = () => {
  socket.emit('ping');
}

  // // build msgdata objt to send to message history and eventually post request
  const sendMessage = (msgData) => {
    sendToServer(msgData)
  };

  // map over message history and render messages on screen
  const renderedMsgs = messagesHistory?.map((msg, index) => {
    return (
      <MessageBubble 
        key={msg.id}
        id={msg.id}
        content={msg.message}
        to={msg.to_user_id}
        toName={props.selected.name}
        from={msg.from_user_id}
        userName={props.user[0].name}
        userId={props.user[0].id}
        date={msg.date_sent}
      />
    )
  });


// REMOVE SOCKET PING


  return (
    <>


    <div className='bg-white chat-room-container flex flex-col-reverse'>
      <div className="chat-bubble-container bg-white flex flex-col px-4 py-4">
        {renderedMsgs}
      </div>
    </div>
    <InputArea selected={props.selected} user={props.user} message={message} setMessage={setMessage} sendMessage={sendMessage}/>
    <div>
      <p>Connected: { '' + isConnected }</p>
      <p>Last pong: { lastPong || '-' }</p>
      <button onClick={ sendPing }>Send ping</button>
    </div>
    </>
  );
};

export default ChatRoom;

