import { useState } from 'react';
import { useDebounce } from './useDebounce';

export const useFilterOptions = () => {
  const [_searchWord, setSearchWord] = useState('');

  const searchWord = useDebounce(_searchWord, 500);

  return {
    searchWord,
    setSearchWord
  };
};
