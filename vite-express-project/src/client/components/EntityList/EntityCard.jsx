import { ITEM_SIZE } from './constants';

const entityCardStyle = {
  display: 'flex',
  justifyContent: 'center'
};

export const EntityCard = ({ style, data }) => {
  return (
    <div style={{ ...style, ...entityCardStyle }}>
      <img 
        style={{ height: `${ITEM_SIZE}px`, width: `${ITEM_SIZE}px` }}
        src={`${data.images[0]}`}
        alt={data.title}
        title={data.title}
      />
    </div>
  )
};
