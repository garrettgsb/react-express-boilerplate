// feature - when a match happens, it should add to the match list - possibly notify on nav bar too
import {useState, useEffect} from 'react';
import moment from 'moment';
import axios from 'axios';

const MatchBubble = (props) => {
  const [lastMsg, setLastMsg] = useState({});
  const [matchSeen, setMatchSeen] = useState({});

  // Filter messages based on match's id and grab the last one
  useEffect(() => {
    const filtered = props.allMessages?.filter(msg => msg.to_user_id === props.match.id || msg.from_user_id === props.match.id);
    setLastMsg({...filtered[filtered.length - 1]});

    const matchSeenInfo = {
      tableId: props?.match?.seen_ref_id,
      matchId: props?.match?.id,
      seen: props?.match?.seen
    };
    setMatchSeen({...matchSeenInfo});

  }, [props.allMessages, props.match, props.selected]);

  // Build updated latest msg data, post rqeuest to have seen the message and call selectHandler
  const selectHelper = () => {
    if (!matchSeen.seen) {
      const seen = {
        ...matchSeen,
        seen: true
      };
      setMatchSeen({...seen});
      axios.post('/api/users/matchings/update', seen)
        .then((results) => {
          const trigger = props.seenUpdate;
          props.setSeenUpdate(!trigger);
        })
        .then(() => {
          props.selectHandler(props.match);
        })
        .catch((error) => console.log('error', error));
    };

    if (!lastMsg.message_seen && Object.keys(lastMsg).length > 0) {
      const updateMsg = {
        ...lastMsg,
        message_seen: true
      };

      setLastMsg({...updateMsg});
      axios.post('/api/users/messages/seen', updateMsg)
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

    props.selectHandler(props.match);
  };
  
  if (!lastMsg) {
    return (
      <div>Loading...</div>
    )
  }


  return (
    <div className="match-bubble-container bg-white flex w-full px-2 items-center my-1" onClick={() => selectHelper()}>

      <div className="match-bubble-img-wrapper bg-white min-w-max">
          <img src={props.photos[0].url} alt="thumbnail" className="w-6 h-6 rounded-full match-bubble-img object-cover cursor-pointer" />
      </div>

      <div className="match-bubble-info flex flex-col w-full bg-white px-2 cursor-pointer">
        <div className={`match-bubble-name bg-white text-[0.75rem] 
       ${ 
        !matchSeen.seen
          ? 'font-bold' 
          : Object.keys(lastMsg).length > 0 && (!lastMsg.message_seen && lastMsg.from_user_id !== props.userId?.id)
          ? 'font-bold'
          : ''}
        `}>
          {props.matchName}
        </div>
        <div className={`match-bubble-msg bg-white text-gray-400 font-light text-[0.6rem] flex items-center`}>
          <span className={`bg-white max-w-max justify-self-start
          ${ !matchSeen.seen
            ? 'font-bold' 
            : Object.keys(lastMsg).length > 0 && (!lastMsg.message_seen && lastMsg.from_user_id !== props.userId?.id)
            ? 'font-bold'
            : ''}
          `}>
            { Object.keys(lastMsg).length < 1
              ? `Say Hi to ${props.matchName}`?.substring(0, 20)
              :  lastMsg?.message?.substring(0, 30)
            }
          </span> 
          <span className='bg-white max-w-max justify-self-center text-[3px] ml-1'>
            { Object.keys(lastMsg).length > 1
             ? '\u25CF'
             : ''
             }
          </span> 
          <span className='bg-white max-w-max3 justify-self-end ml-1'>
            { Object.keys(lastMsg).length > 0
              ? moment(lastMsg?.date_sent).format('ddd h:mm a')
              : ''
            }
          </span>
        </div>
      </div>
      { !matchSeen.seen
          ? <div className='bg-white text-fuchsia-800 text-sm'>
              {'\u25CF'}
            </div>
          : Object.keys(lastMsg).length > 0 && (!lastMsg.message_seen && lastMsg.from_user_id !== props.userId?.id)
          ? <div className='bg-white text-fuchsia-800 text-sm'>
              {'\u25CF'}
            </div>
          : <></>
      }
    </div>
  )
};

export default MatchBubble;