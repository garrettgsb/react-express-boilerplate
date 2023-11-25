import { ITEM_SIZE } from './constants';
import { useNavigate } from 'react-router-dom';

const entityCardStyle = {
  display: 'flex',
  justifyContent: 'center',
  cursor: 'pointer'
};

export const EntityCard = ({ style, data, isArtists }) => {
  const navigate = useNavigate();

  return (
    <div
      className="entity-card-container"
      style={{ ...style, ...entityCardStyle }}
    >
      <div className="entity-image-wrapper w-60 h-60">
        <img 
          src={isArtists ? data.profile_picture : data.images[0]}
          alt={data.title}
          title={data.title}
          onClick={() => {
            navigate(`/${isArtists ? 'users' : 'projects'}/${data.id}`);
          }}
          className="border rounded-3xl w-full h-full object-cover"
        />
      </div>
    </div>
  )
};
