import { useState, useEffect, useCallback } from 'react';
import {
  MOCK_ITEM_COUNT,
  ITEMS_PER_LOAD
} from '../constants.js';

const defaultState = {
  entityById: {},
  entityIds: [],
  isFetching: true
}

const getMockEntries = (entityById, entityIds) => {
  const nextEntityById = { ...entityById };
  const nextEntityIds = [ ...entityIds ];

  const itemsLeft = Math.max(MOCK_ITEM_COUNT - nextEntityIds.length, 0);

  Array.from({ length: Math.min(itemsLeft, ITEMS_PER_LOAD) }).forEach((_, index) => {
    const nextIndex = index;
    nextEntityById[nextIndex] = {
      id: nextIndex,
      title: `Project ${nextIndex}`
    };

    nextEntityIds.push(nextIndex);
  });
  
  return {
    entityById: nextEntityById,
    entityIds: nextEntityIds
  }
}

export const useEntityFetcher = ({ entityType }) => {
  const [state, setState] = useState(defaultState);

  const fetchEntities = useCallback(async () => {
    let timeout;

    await new Promise((resolve) => {
      timeout = setTimeout(resolve, 2000);
    }).then(() => {
      setState((prev) => {
        const { entityById, entityIds } =
          getMockEntries(prev.entityById, prev.entityIds);
        
        return {
          ...prev,
          isFetching: false,
          entityById,
          entityIds
        }
      });
    });
    
    return () => clearTimeout(timeout);
  }, []);

  const setIsFetching = useCallback(() => {
    setState((prev) => ({ ...prev, isFetching: true }));
  }, []);

  useEffect(() => {
    fetch('api/projects?offset=0&limit=20')
      .then((res) => res.json())
      .then((data) => console.log(data));
    fetchEntities();
  }, [fetchEntities]);

  return {
    entityById: state.entityById,
    entityIds: state.entityIds,
    isFetching: state.isFetching,
    totalCount: MOCK_ITEM_COUNT,
    setIsFetching,
    fetchEntities
  };
}