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
      style={{ ...style, ...entityCardStyle }}
    >
      <img 
        style={{ height: `${ITEM_SIZE}px`, width: `${ITEM_SIZE}px` }}
        src={isArtists ? data.profile_picture : data.images[0]}
        alt={data.title}
        title={data.title}
        onClick={() => {
          navigate(`/${isArtists ? 'users' : 'projects'}/${data.id}`);
        }}
        className="border rounded-3xl"
      />
    </div>
  )
};
