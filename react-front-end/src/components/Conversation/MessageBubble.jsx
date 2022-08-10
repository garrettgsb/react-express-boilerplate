import { MoonIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import moment from 'moment';

const MessageBubble = (props) => {
  const [selected, setSelected] = useState();

  if (props.userId !== props.from) {
    return (
      <>
        <div className='justify-self-center self-start bg-gray-100 text-gray-700 font-light rounded-xl px-3 py-1 text-sm min-w-max my-1 mr-2 relative'>
          <div className='relative bg-gray-100 z-50'>{props.content}</div>
          <MoonIcon className='rotate-90 bg-transparent text-gray-100 w-5 h-5 absolute top-4 -left-1'/>
        </div>
        <div className="bg-white text-gray-600 text-[11px] min-w-max mt-1">{moment(props.date).format("MMM Do h:mm a")}</div>
      </>
    );
  };

  return (
    <>
    <div className='justify-self-center self-end bg-fuchsia-800 text-white font-light rounded-xl px-3 py-1 text-sm min-w-max my-1 mr-2 relative'>
      <div className='relative bg-fuchsia-800 z-50'>{props.content}</div>
      <MoonIcon className='rotate-45 bg-transparent text-fuchsia-800 w-5 h-5 absolute top-3 -right-2'/>
    </div>
    <div className="bg-white text-gray-600 text-[11px] min-w-max mt-1 mr-2 text-end">{moment(props.date).format("MMM Do h:mm a")}</div>
    </>
  );
};

export default MessageBubble;