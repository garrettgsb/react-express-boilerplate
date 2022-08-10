
const MatchBubble = (props) => {
  return (
    <div className="match-bubble-container flex w-full px-4 items-center" onClick={() => props.selectHandler(props.match)}>

      <div className="match-bubble-img-wrapper w-[50px]">
          <img src={props.photos[0].url} alt="thumbnail" className="match-bubble-img rounded-full w-full" />
      </div>

      <div className="match-bubble-info flex flex-col w-full">
        <div className="match-bubble-name">{props.matchName}</div>
        <div className="match-bubble-preview flex flex-row justify-between">
          <div className="match-bubble-msg">last sent msg</div>
          <div className="match-bubble-date">date</div>
        </div>
      </div>

    </div>
  )
};

export default MatchBubble;