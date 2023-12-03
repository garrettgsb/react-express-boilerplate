import React, { createContext, useContext } from "react";
import { useEntityFetcher } from './useEntityFetcher';
import { useSortOptions } from './useSortOptions';
import { useFilterOptions } from './useFilterOptions';

const EntityContext = createContext();

export const EntityContextProvider = ({ url, children }) => {
  /* ------------------------------ Sort options ------------------------------ */
  const { sortAttribute, sortDirection, setSortOptions } = useSortOptions({ url });

  /* ----------------------------- Filter options ----------------------------- */
  const { selectedTypeById, valueUnder, searchWord, setFilterOptions } = useFilterOptions({ url });

  /* ------------------------------ Fetching data ----------------------------- */
  const {
    entityByIndex,
    currentCount,
    isFetching,
    isInitial,
    totalCount,
    fetchEntities
  } = useEntityFetcher({
    url,
    sortAttribute,
    sortDirection,
    selectedTypeById,
    valueUnder,
    searchWord
  });


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
        setSortOptions,

        // filter options
        selectedTypeById,
        valueUnder,
        searchWord,
        setFilterOptions
      }}
    >
      {children}
    </EntityContext.Provider>
  )
};

export const useEntityContext = () => useContext(EntityContext);