const MatchBubble = (props) => {
  return (
    <div className="match-bubble-container bg-white flex w-full px-2 items-center my-1" onClick={() => props.selectHandler(props.match)}>

      <div className="match-bubble-img-wrapper bg-white min-w-max">
          <img src={props.photos[0].url} alt="thumbnail" className="w-6 h-6 rounded-full match-bubble-img object-cover" />
      </div>

      <div className="match-bubble-info flex flex-col w-full bg-white px-2">
        <div className="match-bubble-name bg-white text-[0.75rem]">{props.matchName}</div>
        <div className="match-bubble-msg bg-white text-gray-400 font-light text-[0.6rem] flex items-center">
          <span className='bg-white max-w-max justify-self-start'>last sent msg</span> 
           <span className='bg-white max-w-max justify-self-center text-[3px] ml-1'>{'\u25CF'}</span> 
          <span className='bg-white max-w-max3 justify-self-end ml-1'>date</span>
        </div>
      </div>

      <div className='bg-white text-fuchsia-800 text-sm'>{'\u25CF'}</div>


    </div>
  )
};

export default MatchBubble;