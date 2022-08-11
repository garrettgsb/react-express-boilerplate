// feature - last msg received with seen_value false needs bubble bold and purple thing and gone when selected
// feature - when a match happens, it should add to the match list - possibly notify on nav bar too
import {useState, useEffect} from 'react';
import moment from 'moment';
import axios from 'axios';

const MatchBubble = (props) => {
  const [lastMsg, setLastMsg] = useState({});
  // const [newMatch, setNewMatch] = useState();

  // Filter messages based on match's id and grab the last one
  useEffect(() => {
    const filtered = props.allMessages?.filter(msg => msg.to_user_id === props.match.id || msg.from_user_id === props.match.id);

    setLastMsg({...filtered[filtered.length - 1]});

  }, [props.allMessages, props.match.id]);

  const selectHelper = () => {
    const updateMsg = {
      ...lastMsg,
      message_seen: true
    };
    axios.post('/api/users/1/messages/seen', updateMsg)
      .then((results) => {
        console.log('updated msg', results.data);
        const status = props.messageSent;
        props.setMessageSent(!status);
      })
      .then(() => {
        props.selectHandler(props.match);
      })
      .catch((error) => console.log('error', error));
  };
  
  if (!lastMsg) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div className="match-bubble-container bg-white flex w-full px-2 items-center my-1" onClick={() => selectHelper()}>

      <div className="match-bubble-img-wrapper bg-white min-w-max">
          <img src={props.photos[0].url} alt="thumbnail" className="w-6 h-6 rounded-full match-bubble-img object-cover" />
      </div>

      <div className="match-bubble-info flex flex-col w-full bg-white px-2">
        <div className={`match-bubble-name bg-white text-[0.75rem] 
          ${!lastMsg.message_seen && lastMsg.from_user_id !== props.userId
            ? 'font-bold' : ''}
        `}>
          {props.matchName}
        </div>
        <div className={`match-bubble-msg bg-white text-gray-400 font-light text-[0.6rem] flex items-center
          ${!lastMsg.message_seen && lastMsg.from_user_id !== props.userId
            ? 'font-bold' : ''}
        `}>
          <span className='bg-white max-w-max justify-self-start'>
            { lastMsg 
              ? lastMsg?.message?.substring(0, 30)
              : `Say Hi to ${props.matchName}`?.substring(0, 20)
            }
          </span> 
          <span className='bg-white max-w-max justify-self-center text-[3px] ml-1'>
            {'\u25CF'}
          </span> 
          <span className='bg-white max-w-max3 justify-self-end ml-1'>
            { lastMsg
              ? moment(lastMsg?.date_sent).format('ddd h:mm a')
              : ''
            }
          </span>
        </div>
      </div>
      {!lastMsg.message_seen && lastMsg.from_user_id !== props.userId
        ? <div className='bg-white text-fuchsia-800 text-sm'>
            {'\u25CF'}
          </div>
        : <></>
      }
    </div>
  )
};

export default MatchBubble;