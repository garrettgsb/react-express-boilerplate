import React, { createContext, useContext } from "react";
import { useEntityFetcher } from './useEntityFetcher';
import { useSortOptions } from './useSortOptions';

const EntityContext = createContext();

export const EntityContextProvider = ({ url, children }) => {
  /* ------------------------------ Sort options ------------------------------ */
  const { sortAttribute, sortDirection, setSortOptions } = useSortOptions({ url });

  /* ------------------------------ Fetching data ----------------------------- */
  const {
    entityByIndex,
    currentCount,
    isFetching,
    isInitial,
    totalCount,
    fetchEntities
  } = useEntityFetcher({ url, sortAttribute, sortDirection });


  return (
    <EntityContext.Provider
      value={{
        // fetching data
        entityByIndex,
        currentCount,
        isFetching,
        isInitial,
        totalCount,
        fetchEntities,

        // sort options
        sortAttribute,
        sortDirection,
        setSortOptions
      }}
    >
      {children}
    </EntityContext.Provider>
  )
};

export const useEntityContext = () => useContext(EntityContext);