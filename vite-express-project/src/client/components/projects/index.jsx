import { useRef, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { VariableSizeGrid } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from "react-virtualized-auto-sizer";

import { useProjectsFetcher } from './hooks/useProjectsFetcher';
import { ProjectCard } from './ProjectCard';
import { LoadingIndicator } from './LoadingIndicator';
import {
  ROW_HEIGHT,
  LOADING_ROW_HEIGHT,
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
  const rowCount = lastRowIndex;

  const getRowHeight = useCallback((rowIndex) => {
    console.log(rowIndex, rowCount);
    const isLoadingRow = rowIndex === rowCount;
    return isLoadingRow ? LOADING_ROW_HEIGHT : ROW_HEIGHT;
  }, [rowCount]);

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
                rowCount={rowCount + 1} // +1 for loading indicator
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
                {({ columnIndex, rowIndex, style }) => {
                  const isWithinTheRange = (rowIndex * ITEMS_PER_ROW + columnIndex) < projectIds.length;
                  const isLoadingRow = rowIndex === rowCount;
                  const isLoadingColumn = columnIndex === 0;
                  const isLoadedAll = projectIds.length >= MOCK_ITEM_COUNT;

                  return isWithinTheRange ?
                    <ProjectCard style={style} />
                    : isLoadingRow && isLoadingColumn && isFetching && !isLoadedAll
                    ? <LoadingIndicator style={style} />
                    : null;
                }}
              </VariableSizeGrid>
            )}
          </InfiniteLoader>)
        }
      </AutoSizer>
    </div>
  );
}