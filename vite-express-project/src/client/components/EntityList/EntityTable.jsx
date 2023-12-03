import { useRef, useState, useEffect, useCallback } from 'react';
import { VariableSizeGrid } from 'react-window';
import InfiniteLoader from 'react-window-infinite-loader';
import AutoSizer from "react-virtualized-auto-sizer";
import { useEntityContext } from './EntityListContext';
import { FooterWrapper } from './FooterWrapper';

import { getColumnComponent } from './getColumnComponent';
import { Header } from './Header';
import {
  ROW_HEIGHT,
  ROW_HEIGHT_LAST,
  ROW_HEIGHT_CURRENT_LAST,
  ROW_HEIGHT_LOADING,
  COLUMN_WIDTH_PADDING,
  ITEMS_PER_ROW,
  ITEMS_PER_LOAD,
  URL_ARTISTS
} from './constants';

export const EntityTable = ({ url, likesData }) => {
  const [headerBottom, setHeaderBottom] = useState(0);
  const {
    // fetching data
    entityByIndex,
    currentCount,
    isFetching,
    isInitial,
    totalCount,
    fetchEntities,
    // sorting
    sortAttribute,
    sortDirection,
    // filtering
    selectedTypeById,
    valueUnder,
    searchWord
  } = useEntityContext();

  const gridRef = useRef(null);

  const totalRows = Math.ceil(totalCount / ITEMS_PER_ROW);
  const currentLastRowIndex = Math.ceil(currentCount / ITEMS_PER_ROW);

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

  const loadMoreItems = useCallback(
    (start) => {
      if (!isFetching && !entityByIndex[start] && currentCount < totalCount) {
        fetchEntities(
          currentCount,
          { 
            sortAttribute,
            sortDirection,
            selectedTypeById,
            valueUnder,
            searchWord
          }
        );
      }
    },
    [
      isFetching,
      entityByIndex,
      currentCount,
      totalCount,
      fetchEntities,
      sortAttribute,
      sortDirection,
      selectedTypeById,
      valueUnder,
      searchWord
    ]
  );

  const isItemLoaded = useCallback((index) => {
    return index < currentCount;
  }, [currentCount]);

  // VariableSizeGrid caches variable data for grid items.
  // It prevents the grid from having stale data
  // after it loads more items, so force reset when data changes.
  useEffect(() => {
    if (gridRef.current != null) {
      gridRef.current.resetAfterRowIndex(0, true);
    }
  }, [entityByIndex]);


  // initially get the header's bottom position so that AutoSizer can calculate
  // the grid's height to be the full length of the viewport that is below the header
  useEffect(() => {
    const headerElement = document.getElementById('entity-list-header');
    const navRect = headerElement.getBoundingClientRect();
    setHeaderBottom(navRect.bottom);
  }, []);

  return (
    <>
      <Header url={url} />
      <div
        className="w-full overflow-hidden"
        style={{
          height: `calc(100vh - ${headerBottom}px`
        }}
      >
        <AutoSizer>
          {({ height, width }) => (!isFetching && totalCount === 0)
            ? (
                <div
                  style={{ height, width }}
                >
                  <p className="mt-20">
                    No results found.
                  </p>
                  <FooterWrapper style={{ position: 'absolute', bottom: 0, transform: 'translateX(-50%)' }}/>
                </div>
              )
            : (
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
                      height={height}
                      width={width}
                      columnCount={ITEMS_PER_ROW}
                      rowCount={currentLastRowIndex + 2} // +1 for loading indicator, +1 for footer
                      onItemsRendered={({ visibleRowStartIndex, visibleRowStopIndex }) => {
                        onItemsRendered({
                          visibleStartIndex: visibleRowStartIndex * ITEMS_PER_ROW,
                          visibleStopIndex: visibleRowStopIndex * ITEMS_PER_ROW + ITEMS_PER_ROW - 1,
                        });
                      }}
                      itemData={entityByIndex}
                      ref={(grid) => {
                        ref(grid);
                        gridRef.current = grid;
                      }}
                    >
                    {getColumnComponent({
                        currentLastRowIndex,
                        isFetching,
                        currentCount,
                        totalCount,
                        isInitial,
                        isArtists: url === URL_ARTISTS,
                        likesData

                      })}
                    </VariableSizeGrid>
                  )}
                </InfiniteLoader>
              )
          }
        </AutoSizer>
      </div>
    </>
  );
}