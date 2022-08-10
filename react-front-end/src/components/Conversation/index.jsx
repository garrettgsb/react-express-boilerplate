import MatchHeader from './MatchHeader';
import ChatRoom from './ChatRoom';

const Conversation = (props) => {
  return (
    <div className='conversation-container grid border border-gray-300'>
      { props.selected 
        ? <>
          <MatchHeader match={props.selected}/>
          <ChatRoom match={props.selected} messages={props.messages} user={props.user}/>
          </>
        : <div className='none-selected'> Send a message to one of your matches </div>
      }
    </div>
  )
};

export default Conversation;