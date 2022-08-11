// feature - last msg received with seen_value false needs bubble bold and purple thing and gone when selected
// feature - when a match happens, it should add to the match list - possibly notify on nav bar too
import {useState, useEffect} from 'react';
import moment from 'moment';

const MatchBubble = (props) => {
  const [lastMsg, setLastMsg] = useState();
  // const [newMatch, setNewMatch] = useState();

  // Filter messages based on match's id and grab the last one
  useEffect(() => {
    const filtered = props.allMessages?.filter(msg => msg.to_user_id === props.match.id || msg.from_user_id === props.match.id);
    setLastMsg(filtered[filtered.length - 1]);

  }, [props.allMessages, props.match.id]);
  

  return (
    <div className="match-bubble-container bg-white flex w-full px-2 items-center my-1" onClick={() => props.selectHandler(props.match)}>

      <div className="match-bubble-img-wrapper bg-white min-w-max">
          <img src={props.photos[0].url} alt="thumbnail" className="w-6 h-6 rounded-full match-bubble-img object-cover" />
      </div>

      <div className="match-bubble-info flex flex-col w-full bg-white px-2">
        <div className="match-bubble-name bg-white text-[0.75rem]">{props.matchName}</div>
        <div className="match-bubble-msg bg-white text-gray-400 font-light text-[0.6rem] flex items-center">
          <span className='bg-white max-w-max justify-self-start'>
            { lastMsg 
              ? lastMsg?.message.substring(0, 15)
              : `Say Hi to ${props.matchName}`.substring(0, 15)
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

      <div className='bg-white text-fuchsia-800 text-sm'>{'\u25CF'}</div>


    </div>
  )
};

export default MatchBubble;