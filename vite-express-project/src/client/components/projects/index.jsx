import { useRef, useEffect, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { VariableSizeGrid } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from "react-virtualized-auto-sizer";

import { useProjectsFetcher } from './hooks/useProjectsFetcher';
import { getColumnComponent } from './getColumnComponent';
import {
  ROW_HEIGHT,
  ROW_HEIGHT_LOADING,
  COLUMN_WIDTH_PADDING,
  MOCK_ITEM_COUNT,
  ITEMS_PER_ROW,
  LOAD_MORE_ITEMS
} from './constants';

export const Projects = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const title = splitLocation[splitLocation.length - 1] === "gigs" ? "Gigs" : "Artists";

  const gridRef = useRef(null);

  const {
    projectsById,
    projectIds,
    isFetching,
    setIsFetching,
    fetchProjects
  } = useProjectsFetcher();

  const lastRowIndex = Math.ceil(projectIds.length / ITEMS_PER_ROW);

  const getRowHeight = useCallback((rowIndex) => {
    const isLoadingRow = rowIndex === lastRowIndex;

    return isLoadingRow ? ROW_HEIGHT_LOADING : ROW_HEIGHT;
  }, [lastRowIndex]);

  const loadMoreItems = useCallback((start) => {
    if (!isFetching && !projectsById[start]) {
      setIsFetching();
      fetchProjects();
    }
  }, [isFetching, projectsById, fetchProjects, setIsFetching])

  const isItemLoaded = useCallback((index) => {
    return index < projectIds.length;
  }, [projectsById]);

  useEffect(() => {
    if (gridRef.current != null) {
      gridRef.current.resetAfterRowIndex(0, true);
    }
  }, [projectIds.length]);

  const Column = useMemo(() =>
    getColumnComponent({ projectIds, lastRowIndex, isFetching }),
    [projectIds, lastRowIndex, isFetching]
  );

  return (
    <div style={{ marginTop: "3rem", height: "70vh", width: "100%", overflow: "hidden" }}>
      <h1>{title} in your area</h1>
      <AutoSizer>
        {({ height, width }) => (
          <InfiniteLoader
            threshold={Math.ceil(LOAD_MORE_ITEMS / 2)}
            itemCount={MOCK_ITEM_COUNT}
            loadMoreItems={loadMoreItems}
            isItemLoaded={isItemLoaded}
          >
            {({ onItemsRendered, ref }) => (
              <VariableSizeGrid
                className="variable-size-grid"
                columnWidth={(_index) => Math.floor(width - COLUMN_WIDTH_PADDING) / ITEMS_PER_ROW }
                rowHeight={getRowHeight}
                height={height - 20}
                width={width}
                columnCount={ITEMS_PER_ROW}
                rowCount={lastRowIndex + 1} // +1 for loading indicator
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
               {Column}
              </VariableSizeGrid>
            )}
          </InfiniteLoader>)
        }
      </AutoSizer>
    </div>
  );
}