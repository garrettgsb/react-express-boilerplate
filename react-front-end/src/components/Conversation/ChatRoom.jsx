import { useState, useEffect } from 'react';
import InputArea from './InputArea';
import MessageBubble from './MessageBubble';
////// divide socetIO part
import io from 'socket.io-client';

//////


const ChatRoom = (props) => {
  const [messagesHistory, setMessagesHistory] = useState([]);
  const [message, setMessage] = useState('');
  const [socket, setSocket] = useState();
  const [trigger, setTrigger] = useState()


  // Filter messages based on user Id and who is selected in chat view
  useEffect(() => {
    const filtered = props.allMessages?.filter(msg => msg.to_user_id === props.selected.id || msg.from_user_id === props.selected.id);
    setMessagesHistory([...filtered]);
  }, [props.allMessages, props.selected, trigger]);


  ////////
  useEffect(() => {
    const socket = io();
    setSocket(socket)
      socket.on('connect', () => {
      const data = {id: props.user.id, name: props.user.name,}
      socket.emit('user', data)
    
    });

    socket.on('disconnect', () => {
  
    });

    socket.on("message", (message) => {
      
      // need to check props.selected.id 
     
      

      if (message.from_user_id === props.user.id && message.to_user_id === props.selected.id ) {
        setMessagesHistory((prev) => [...prev, message]);
    //  setTrigger(message)
      }
      else if (message.from_user_id === props.selected.id && message.to_user_id === props.user.id) {
        setMessagesHistory((prev) => [...prev, message]);
        // setTrigger(message)
      }
    //  else return

    });

    return () => {
     
      socket.disconnect()
    

    };
  }, []);

  // pass data to SocketIO
  const sendToServer = (msgData) => {
    // console.log("sent to socket", msgData)
    socket.emit('sendMessage', msgData);
    const msgFetchTrigger = props.messageSent;
    props.setMessageSent(!msgFetchTrigger);
    setMessage('');
  }


  // // build msgdata objt to send to message history and eventually post request
  const sendMessage = (msgData) => {
    sendToServer(msgData)

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
        userName={props.user.name}
        userId={props.user.id}
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
      <InputArea selected={props.selected} user={props.user} message={message} setMessage={setMessage} sendMessage={sendMessage} />
    
    </>
  );
};

export default ChatRoom;

