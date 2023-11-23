import { useState, useEffect, useCallback } from 'react';
import {
  ITEMS_PER_LOAD,
  API_BY_URL
} from '../constants.js';

const defaultState = {
  entityByIndex: {},
  isFetching: true,
  currentCount: 0,
  totalCount: 0
}

export const useEntityFetcher = ({ url: _url }) => {
  const [state, setState] = useState(defaultState);

  const url = API_BY_URL[_url]

  const fetchEntities = useCallback(async (offset) => {
    let timeout;

    await new Promise((resolve) => {
      // to give delays for between 1 and 2 seconds because supabase is too fase.
      // it will not be enough to demonstrate the loading state without this delay.
      timeout = setTimeout(resolve, (Math.random() * 10000 % 1000) + 1000);
    }).then(() => {
        fetch(`${url}?offset=${offset}&limit=${ITEMS_PER_LOAD}`)
          .then((res) => res.json())
          .then((data) => {
            const { entities, totalCount } = data;

            setState((prev) => ({
              ...prev,
              entityByIndex: {
                ...prev.entityByIndex,
                ...entities.reduce((entityByIndex, entity, index) => {
                  entityByIndex[prev.currentCount + index] = entity;
                  return entityByIndex;
                }, {})
              },
              currentCount: prev.currentCount + entities.length,
              isFetching: false,
              ...totalCount ? { totalCount } : {}
            }));
          });
      }).catch((error) => {
        console.error("Server Error:", error);
        setState((prev) => ({ ...prev, isFetching: false }));
      });
    
    return () => clearTimeout(timeout);
  }, [url]);

  const setIsFetching = useCallback(() => {
    setState((prev) => ({ ...prev, isFetching: true }));
  }, []);

  useEffect(() => {
    fetchEntities(0);
  }, [fetchEntities]);

  console.log(state);

  return {
    entityByIndex: state.entityByIndex,
    isFetching: state.isFetching,
    currentCount: state.currentCount,
    totalCount: state.totalCount,
    setIsFetching,
    fetchEntities
  };
}