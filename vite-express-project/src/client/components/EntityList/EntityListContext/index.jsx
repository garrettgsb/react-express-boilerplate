import React, { createContext, useContext } from "react";
import { useEntityFetcher } from './useEntityFetcher';
import { useSortOptions } from './useSortOptions';

const EntityContext = createContext();

export const EntityContextProvider = ({ url, children }) => {
  /* ------------------------------ Sort options ------------------------------ */
  const { sortAttribute, sortDirection, setSortOptions } = useSortOptions();

  /* ------------------------------ Fetching data ----------------------------- */
  const {
    entityByIndex,
    currentCount,
    isFetching,
    isInitial,
    totalCount,
    setIsFetching,
    fetchEntities
  } = useEntityFetcher({ url });


  return (
    <EntityContext.Provider
      value={{
        // fetching data
        entityByIndex,
        currentCount,
        isFetching,
        isInitial,
        totalCount,
        setIsFetching,
        fetchEntities

        // sort options
      }}
    >
      {children}
    </EntityContext.Provider>
  )
};

export const useEntityContext = () => useContext(EntityContext);