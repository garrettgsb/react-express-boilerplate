import { useState, useEffect, useCallback } from 'react';
import { MOCK_ITEM_COUNT, ITEMS_PER_LOAD } from '../constants.js';

const defaultState = {
  projectsById: {},
  projectIds: [],
  isFetching: true
}

const getMockEntries = (projectsById, projectIds) => {
  const nextProjectsById = { ...projectsById };
  const nextProjectIds = [ ...projectIds ];

  const itemsLeft = Math.max(MOCK_ITEM_COUNT - nextProjectIds.length, 0);

  Array.from({ length: Math.min(itemsLeft, ITEMS_PER_LOAD) }).forEach((_, index) => {
    const nextIndex = index;
    nextProjectsById[nextIndex] = {
      id: nextIndex,
      title: `Project ${nextIndex}`
    };

    nextProjectIds.push(nextIndex);
  });
  
  return {
    projectsById: nextProjectsById,
    projectIds: nextProjectIds
  }
}

export const useProjectsFetcher = () => {
  const [state, setState] = useState(defaultState);

  const fetchProjects = useCallback(async () => {
    let timeout;

    await new Promise((resolve) => {
      timeout = setTimeout(resolve, 2000);
    }).then(() => {
      setState((prev) => {
        const { projectsById, projectIds } =
          getMockEntries(prev.projectsById, prev.projectIds);
        
        return {
          ...prev,
          isFetching: false,
          projectsById,
          projectIds
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
    fetchProjects();
  }, [fetchProjects]);

  return {
    projectsById: state.projectsById,
    projectIds: state.projectIds,
    isFetching: state.isFetching,
    totalCount: MOCK_ITEM_COUNT,
    setIsFetching,
    fetchProjects
  };
}