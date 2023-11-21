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
  const isWithinTheRange = (rowIndex * ITEMS_PER_ROW + columnIndex) < projectIds.length;
  const isLoadingRow = rowIndex === lastRowIndex;
  const isLoadingColumn = columnIndex === 0;
  const isLoadedAll = projectIds.length >= MOCK_ITEM_COUNT;

  return isWithinTheRange ?
    <ProjectCard style={style} />
    : isLoadingRow && isLoadingColumn && isFetching && !isLoadedAll
    ? <LoadingIndicator style={style} />
    : null;
};
