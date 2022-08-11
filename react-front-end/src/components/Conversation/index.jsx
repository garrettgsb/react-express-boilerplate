import MatchHeader from './MatchHeader';
import ChatRoom from './ChatRoom';

const Conversation = (props) => {

  return (
    <div className='conversation-container grid border border-gray-300'>
      { props.selected 
        ? <>
          <MatchHeader selected={props.selected}/>
          <ChatRoom selected={props.selected} user={props.user} allMessages={props.allMessages} setAllMessages={props.setAllMessages}  messageSent={props.messageSent} setMessageSent={props.setMessageSent}/>
          </>
        : <div className='none-selected'> Send a message to one of your matches </div>
      }
    </div>
  )
};

export default Conversation;