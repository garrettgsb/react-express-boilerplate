import { ProjectCard } from './ProjectCard';
import { LoadingIndicator } from './LoadingIndicator';
import { ITEMS_PER_ROW, MOCK_ITEM_COUNT } from './constants';

export const getColumnComponent = ({
  projectIds,
  lastRowIndex,
  isFetching
}) => ({
  columnIndex,
  rowIndex,
  style
}) => {
  const isLoadedColumn = (rowIndex * ITEMS_PER_ROW + columnIndex) < projectIds.length;
  const isLoadingRow = rowIndex === lastRowIndex;
  const isFirstColumn = columnIndex === 0;
  const isLoadedAll = projectIds.length >= MOCK_ITEM_COUNT;

  return isLoadedColumn ?
    <ProjectCard style={style} />
    : isLoadingRow && isFirstColumn && isFetching && !isLoadedAll
    ? <LoadingIndicator style={style} />
    : null;
};
