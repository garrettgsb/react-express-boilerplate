import {EmojiHappyIcon} from '@heroicons/react/outline';

const EmojiTable = (prop) => {
  return (
    <EmojiHappyIcon className='mr-1 w-5 h-5 text-black bg-white' onClick={() => console.log('clicked emoji')}/>
  )
};

export default EmojiTable;