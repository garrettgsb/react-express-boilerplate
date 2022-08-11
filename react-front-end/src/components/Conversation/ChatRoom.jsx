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
    setMessages((messages) => [...messages, message]);
  });

 return () => {
   socket.off('connect');
   socket.off('disconnect');
   socket.off('pong');
 };
}, []);

const sendPing = () => {
 socket.emit('ping');
}





//******************
 //////////////////////////////


  // // build msgdata objt to send to message history and eventually post request
  const sendMessage = (msgData) => {
    console.log('you clicked to send the msg', msgData);
    axios.post('/api/users/1/messages/new', msgData)
      .then((results) => {
        console.log('new msg from db', results.data);
        const msgFetchTrigger = props.messageSent;
        //
        socket.emit("sendMessage", { message })
        //
        props.setMessageSent(!msgFetchTrigger);
               setMessage('');
      })
      .then()
      .catch((error) => console.log('error:', error));
  };

  // map over message history and render messages on screen
  const renderedMsgs = messagesHistory?.map((msg) => {
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


// REMOVE SOCKET 


  return (
    <>


    <div className='bg-white chat-room-container flex flex-col-reverse'>
      <div className="chat-bubble-container bg-white flex flex-col px-4 py-4">
        {renderedMsgs}
      </div>
    </div>
    <InputArea selected={props.selected} user={props.user} message={message} setMessage={setMessage} sendMessage={sendMessage}/>
    </>
  );
};

export default ChatRoom;

