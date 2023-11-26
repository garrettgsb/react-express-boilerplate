import { useNavigate } from 'react-router-dom';

const entityCardStyle = {
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer',
  paddingTop: '0.5rem'
};

const polaroidStyle = {
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.5)'
};

export const EntityCard = ({ style, data, isArtists }) => {
  const navigate = useNavigate();

  return (
    <div
      className="entity-card-container"
      style={{ ...style, ...entityCardStyle }}
    >
      <div
        className="entity-image-wrapper w-60 h-72 rounded-md"
        style={{
          ...polaroidStyle,
          transform: data.transform,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#ffffff',
          paddingTop: '0.5rem'
        }}>
        <img 
          src={isArtists ? data.profile_picture : data.images[0]}
          alt={data.title}
          title={data.title}
          onClick={() => {
            navigate(`/${isArtists ? 'users' : 'projects'}/${data.id}`);
          }}
          className="w-56 h-56 object-cover"
        />
        <footer className="flex flex-col items-center">
          <p>{data.name}</p>
          <p>{data.location}</p>
        </footer>
      </div>
    </div>
  )
};
