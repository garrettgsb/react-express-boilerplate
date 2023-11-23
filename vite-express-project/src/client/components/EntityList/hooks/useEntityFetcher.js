import { useState, useEffect, useCallback } from 'react';
import {
  MOCK_ITEM_COUNT,
  ITEMS_PER_LOAD,
  API_BY_URL
} from '../constants.js';

const defaultState = {
  entityById: {},
  entityIds: [],
  isFetching: true
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
            console.log(data);
            setState((prev) => ({
              ...prev,
              entityById: {
                ...prev.entityById,
                ...data.reduce((entityById, entity) => {
                  entityById[entity.id] = entity;
                  return entityById;
                }, {})
              },
              entityIds: [
                ...prev.entityIds,
                ...data.map((entity) => entity.id)
              ],
              isFetching: false
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
    // fetch('api/projects?offset=0&limit=20')
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    fetchEntities(0);
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