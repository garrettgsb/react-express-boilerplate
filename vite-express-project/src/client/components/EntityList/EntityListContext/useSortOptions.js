import { useState, useCallback } from 'react';
import { SORT_ATTRIBUTE, SORT_DIRECTION, URL_ARTISTS } from '../constants';

export const useSortOptions = ({ url }) => {
  const [sortOptions, _setSortOptions] = useState({});

  const setSortOptions = useCallback(({ attribute, direction }) => {
    _setSortOptions((prev) => ({
      ...prev,
      ...(attribute && { attribute }),
      ...(direction && { direction })
    }));
  }, []);

  return {
    sortAttribute: sortOptions.attribute || (url === URL_ARTISTS ? SORT_ATTRIBUTE.NAME : SORT_ATTRIBUTE.POSTED),
    sortDirection: sortOptions.direction || SORT_DIRECTION.ASC,
    setSortOptions
  };
}