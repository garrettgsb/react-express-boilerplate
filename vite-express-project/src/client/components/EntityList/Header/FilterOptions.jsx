import { FilterType } from './FilterType';
import { FilterWage } from './FilterWage';
import { useEntityContext } from '../EntityListContext';
import { FilterWord } from './FilterWord';

export const FilterOptions = ({ url }) => {
  const { setFilterOptions } = useEntityContext();

  return (
    <div className="flex items-center">
      <FilterType
        url={url}
        setFilterOptions={setFilterOptions}
      />
      <FilterWage
        url={url}
        setFilterOptions={setFilterOptions}
      />
      <FilterWord
        setFilterOptions={setFilterOptions}
      />
    </div>
  )
};
