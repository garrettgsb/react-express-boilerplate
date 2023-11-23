import { ITEM_SIZE } from './constants';

const entityCardStyle = {
  display: 'flex',
  justifyContent: 'center'
};

export const EntityCard = ({ style, data, isArtists }) => {
  return (
    <div style={{ ...style, ...entityCardStyle }}>
      <img 
        style={{ height: `${ITEM_SIZE}px`, width: `${ITEM_SIZE}px` }}
        src={isArtists ? data.profile_picture : data.images[0]}
        alt={data.title}
        title={data.title}
      />
    </div>
  )
};
