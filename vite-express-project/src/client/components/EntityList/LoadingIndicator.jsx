import './LoadingIndicator.css';

const loadingWheelStyle = {
  position: 'absolute',
  left: '50%',
  transform: 'translate(-50%)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

export const LoadingIndicator = ({ style }) => {
  return (
    <div
      style={{ ...style, ...loadingWheelStyle }}
      className="loading-indicator"
    >
      <img
        className="loading-indicator__image"
        src="../../assets/spinner-solid.svg"
        alt="SVG"
        style={{
          height: '50px',
          width: '50px',
        }}
      />
    </div>
  )
};
