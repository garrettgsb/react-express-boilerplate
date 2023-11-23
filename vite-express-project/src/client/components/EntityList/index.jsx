import { useRef, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { VariableSizeGrid } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from "react-virtualized-auto-sizer";

import { useProjectsFetcher } from './hooks/useProjectsFetcher';
import { getColumnComponent } from './getColumnComponent';
import {
  ROW_HEIGHT,
  ROW_HEIGHT_LAST,
  ROW_HEIGHT_CURRENT_LAST,
  ROW_HEIGHT_LOADING,
  COLUMN_WIDTH_PADDING,
  CONTAINER_HEIGHT_PADDING,
  ITEMS_PER_ROW,
  ITEMS_PER_LOAD
} from './constants';

export const EntityList = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const title = splitLocation[splitLocation.length - 1] === "gigs" ? "Gigs" : "Artists";

  const gridRef = useRef(null);

  const {
    projectsById,
    projectIds,
    isFetching,
    totalCount,
    setIsFetching,
    fetchProjects
  } = useProjectsFetcher();

  const totalRows = Math.ceil(totalCount / ITEMS_PER_ROW);
  const currentLastRowIndex = Math.ceil(projectIds.length / ITEMS_PER_ROW);

  const getRowHeight = useCallback((rowIndex) => {
    const isCurrentLastRow = rowIndex === currentLastRowIndex - 1;
    const isLastRow = rowIndex === totalRows - 1;
    const isLoadingRow = rowIndex === currentLastRowIndex;
    const isFooterRow = rowIndex === currentLastRowIndex + 1;

    return (isLoadingRow || isFooterRow)
      ? ROW_HEIGHT_LOADING
      : isCurrentLastRow
      ? ROW_HEIGHT_CURRENT_LAST
      : isLastRow
      ? ROW_HEIGHT_LAST
      : ROW_HEIGHT;
  }, [currentLastRowIndex]);

  const loadMoreItems = useCallback((start) => {
    if (!isFetching && !projectsById[start]) {
      setIsFetching();
      fetchProjects();
    }
  }, [isFetching, projectsById, fetchProjects, setIsFetching])

  const isItemLoaded = useCallback((index) => {
    return index < projectIds.length;
  }, [projectIds]);

  // VariableSizeGrid caches variable data for grid items.
  // It prevents the grid from having stale data
  // after it loads more items, so force reset when data changes.
  useEffect(() => {
    if (gridRef.current != null) {
      gridRef.current.resetAfterRowIndex(0, true);
    }
  }, [projectIds]);

  return (
    <div className="mt-9 h-[78vh] w-full overflow-hidden">
      <h1
        className="font-subHeading text-lg font-semibold leading-6 text-accent hover:text-accentHover mb-4"
      >
        {title} in your area
      </h1>
      <AutoSizer>
        {({ height, width }) => (
          <InfiniteLoader
            threshold={Math.ceil(ITEMS_PER_LOAD / 2)}
            itemCount={totalCount}
            loadMoreItems={loadMoreItems}
            isItemLoaded={isItemLoaded}
          >
            {({ onItemsRendered, ref }) => (
              <VariableSizeGrid
                className="variable-size-grid"
                columnWidth={(_index) =>
                  // no padding will make it have a horizontal scrollbar
                  Math.floor(width - COLUMN_WIDTH_PADDING) / ITEMS_PER_ROW
                }
                rowHeight={getRowHeight}
                height={height - CONTAINER_HEIGHT_PADDING}
                width={width}
                columnCount={ITEMS_PER_ROW}
                rowCount={currentLastRowIndex + 2} // +1 for loading indicator, +1 for footer
                onItemsRendered={({ visibleRowStartIndex, visibleRowStopIndex }) => {
                  onItemsRendered({
                    visibleStartIndex: visibleRowStartIndex * ITEMS_PER_ROW,
                    visibleStopIndex: visibleRowStopIndex * ITEMS_PER_ROW + ITEMS_PER_ROW - 1,
                  });
                }}
                ref={(grid) => {
                  ref(grid);
                  gridRef.current = grid;
                }}
              >
               {getColumnComponent({ projectIds, currentLastRowIndex, isFetching, totalCount })}
              </VariableSizeGrid>
            )}
          </InfiniteLoader>)
        }
      </AutoSizer>
    </div>
  );
}