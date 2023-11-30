import { useState, useCallback } from 'react';

export const useSortOptions = () => {
  const [sortOptions, setSortOptions] = useState({});

  return {
    sortAttribute: sortOptions.attribute || 'name',
    sortDirection: sortOptions.direction || 'asc',
    setSortOptions: (attribute, direction) => setSortOptions({ attribute, direction })
  };
}