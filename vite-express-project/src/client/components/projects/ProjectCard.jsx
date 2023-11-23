import { ITEM_SIZE } from './constants';

const projectCardStyle = {
  display: 'flex',
  justifyContent: 'center'
};

export const ProjectCard = ({ style }) => {
  return (
    <div style={{ ...style, ...projectCardStyle }}>
      <img 
        style={{ height: `${ITEM_SIZE}px`, width: `${ITEM_SIZE}px` }}
        src="assets/close-up-of-ceramics-free-photo.jpg"
        alt="SVG"
      />
    </div>
  )
};
