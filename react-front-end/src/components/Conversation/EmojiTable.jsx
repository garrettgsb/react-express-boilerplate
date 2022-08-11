import {EmojiHappyIcon} from '@heroicons/react/outline';
import { useState, useEffect } from 'react';
// Hook credit to @ealush
import Picker from 'emoji-picker-react';

const EmojiTable = (props) => {
  // setMessage={props.setMessage} message={props.message}
  // const [clickTarget, setClickTarget] = useState(null);

  // Toggle emoji table
  const tableClickHandler = () => {
    const status = props.emojiOpen
    props.setEmojiOpen(!status);
  };

  // Handle emoji click
  const onEmojiClick = (event, emojiObject) => {
    props.setMessage(prev => prev + emojiObject.emoji);
  };

  // leaving it for stretch
  // const outsideClickDetector = (e) => {
  //   console.log('just e', e.target.className.SVGAnimatedString);
  //   if (open && e.target.className.baseVal.includes('emoji-icon') 
  //   // && !e.target.className.includes('emoji') 
  //     && (!e.target.parentNode.className === 'emoji-categories' 
  //       && !e.target.parentNode.className === 'skin-tones-list')) {
  //     console.log('clicked target', e.target.parentNode.className);
  //     props.setEmojiOpen(false);
  //     setOpen(false);
  //   }
  // };
    
  // Detect if next click is outside of the emojitable component
  // useEffect(() => {

  //   document.addEventListener('click', outsideClickDetector);

  //   return () => {
  //     document.removeEventListener('click', outsideClickDetector);
  //   };
  // }, [open])

  return (
    <>
    <EmojiHappyIcon className='emoji-icon mr-1 w-5 h-5 text-black bg-white relative' onClick={tableClickHandler}/>
    {props.emojiOpen
      ? <div className='absolute bg-white bottom-24 z-50'>
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      : <></>
    }
    </>
  )
};

export default EmojiTable;