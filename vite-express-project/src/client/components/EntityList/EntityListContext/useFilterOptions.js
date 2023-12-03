import { useState, useCallback } from 'react';
import { useDebounce } from './useDebounce';
import { PRICE_BY_URL } from '../constants';

export const useFilterOptions = ({ url }) => {
  const [filterOptions, _setFilterOptions] = useState({
    selectedTypeById: { '1': true },
    valueUnder: PRICE_BY_URL[url].max * 100,
    searchWord: ''
  });

  const setFilterOptions = useCallback(({ selectedTypeById, valueUnder, searchWord }) => {
    _setFilterOptions((prev) => ({
      ...prev,
      ...(selectedTypeById !== undefined && { selectedTypeById }),
      ...(valueUnder !== undefined && { valueUnder }),
      ...(searchWord !== undefined && { searchWord })
    }));
  }, []);

  const { selectedTypeById, valueUnder, searchWord } = useDebounce(filterOptions, 500);

  return {
    selectedTypeById,
    valueUnder,
    searchWord,
    setFilterOptions
  };
}