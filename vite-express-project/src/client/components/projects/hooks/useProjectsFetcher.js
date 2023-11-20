import { useState, useEffect, useCallback } from 'react';
import { MOCK_ITEM_COUNT, LOAD_MORE_ITEMS } from '../constants';

const defaultState = {
  projectsById: {},
  projectIds: [],
  isFetching: true
}

const getMockEntries = (projectsById, projectIds) => {
  const nextProjectsById = { ...projectsById };
  const nextProjectIds = [ ...projectIds ];

  const itemsLeft = Math.max(MOCK_ITEM_COUNT - nextProjectIds.length, 0);

  Array.from({ length: Math.min(itemsLeft, LOAD_MORE_ITEMS) }).forEach((_, index) => {
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
    fetchProjects();
  }, [fetchProjects]);

  return {
    projectsById: state.projectsById,
    projectIds: state.projectIds,
    isFetching: state.isFetching,
    setIsFetching,
    fetchProjects
  };
}