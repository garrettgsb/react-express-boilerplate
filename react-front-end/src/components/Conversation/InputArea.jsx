import EmojiTable from "./EmojiTable";
import {useState} from 'react';

import {PaperAirplaneIcon} from '@heroicons/react/outline';

const InputArea = (props) => {

  const buildMsgData = () => {
    if (props.message) {
      const msgData = {
        from_user_id: props.user[0].id,
        message: props.message,
        to_user_id: props.selected.id,
        message_seen: false
      };
      props.sendMessage(msgData);
    } else {
      console.log('need to type something');
    }
  };

  return (
    <div className='bg-white border flex border-gray-300 rounded-2xl justify-self-center items-center w-11/12 px-2 h-2/3'>
      <EmojiTable/>
      <textarea className='msg-text-area bg-white resize-none w-full h-full align-center px-[7px] py-[1.5px] text-sm focus: outline-0' placeholder='Say something' value={props.message} onChange={(e) => props.setMessage(e.target.value)}/>
      <PaperAirplaneIcon className='ml-1 w-5 h-5 text-black bg-white' onClick={buildMsgData}/>
    </div>
  );
};

export default InputArea;