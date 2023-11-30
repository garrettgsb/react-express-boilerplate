import { useState, useCallback } from 'react';
import { useDebounce } from './useDebounce';
import { PRICE_BY_URL } from '../constants';

export const useFilterOptions = ({ url }) => {
  const [filterOptions, _setFilterOptions] = useState({
    selectedTypeById: { '1': true },
    valueUnder: PRICE_BY_URL[url].max * 100
  });

  const setFilterOptions = useCallback(({ selectedTypeById, valueUnder }) => {
    _setFilterOptions((prev) => ({
      ...prev,
      ...(selectedTypeById && { selectedTypeById }),
      ...(valueUnder && { valueUnder })
    }));
  }, []);

  const { selectedTypeById, valueUnder } = useDebounce(filterOptions, 500);

  return {
    selectedTypeById,
    valueUnder,
    setFilterOptions
  };
}