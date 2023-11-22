import { ProjectCard } from './ProjectCard';
import { LoadingIndicator } from './LoadingIndicator';
import { ITEMS_PER_ROW } from './constants';
import _Footer from '../Footer';

const Footer = ({ style }) => {
  return (
    <div
      className="footer-wrapper flex items-end justify-center left-1/2"
      style={{ ...style, left: '50%', transform: 'translate(-50%)', width: '50%'}}>
      <_Footer />
    </div>
  )
}

export const getColumnComponent = ({
  projectIds,
  currentLastRowIndex,
  isFetching,
  totalCounts
}) => ({
  columnIndex,
  rowIndex,
  style,
}) => {
  const isLoadedColumn = (rowIndex * ITEMS_PER_ROW + columnIndex) < projectIds.length;
  const isLoadingRow = rowIndex === currentLastRowIndex;
  const isFirstColumn = columnIndex === 0;
  const isLoadedAll = projectIds.length >= totalCounts;
  const isFooterRow = rowIndex === currentLastRowIndex + 1;

  return isLoadedColumn ?
    <ProjectCard style={style} />
    : isLoadingRow && isFirstColumn && isFetching && !isLoadedAll
    ? <LoadingIndicator style={style} />
    : isFooterRow && isFirstColumn && projectIds.length !== 0
    ? <Footer style={style} />
    : null;    
};
