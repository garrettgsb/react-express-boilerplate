import {PhoneIcon, VideoCameraIcon, DotsCircleHorizontalIcon} from '@heroicons/react/outline';

const MatchHeader = (props) => {
  return (
    <div className='bg-white flex flex-row border-b border-gray-300 items-center justify-between px-3'>
      <div className="bg-white display-match-name font-semibold flex items-center">
        {props.selected
          ? <>
              <img className='bg-white w-6 h-6 rounded-full' src={props.selected?.photos[0].url} alt="" />
              <div className='bg-white ml-2'>{props.selected?.name}</div>
            </>
          : "Loading"
        }
      </div>
      <div className="bg-white match-actions flex">
        <div className="voice-call mx-1"><PhoneIcon className='bg-white h-5 w-5 text-gray-800'/></div>
        <div className=" video-call mx-1"><VideoCameraIcon className='bg-white h-5 w-5 text-gray-800' /></div>
        <div className="options mx-1"><DotsCircleHorizontalIcon className='bg-white h-5 w-5 text-gray-800' /></div>
      </div>
    </div>
  )
};

export default MatchHeader;