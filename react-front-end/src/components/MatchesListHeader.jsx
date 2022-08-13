import {useState} from 'react';

const MatchesListHeader = (props) => {
  return (
    <div className='matches-list-header h-full bg-white border-t border-l border-gray-300 text-semibold flex items-center justify-center'>
      <div className='bg-white'>
        {props.user ? props.user?.name : 'Loading'} 
      </div>
    </div>
  );
};

export default MatchesListHeader;