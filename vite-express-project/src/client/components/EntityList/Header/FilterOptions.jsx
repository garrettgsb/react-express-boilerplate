import { FilterType } from './FilterType';
import { FilterWage } from './FilterWage';
import { useEntityContext } from '../EntityListContext';

export const FilterOptions = ({ url }) => {
  const { valueUnder, setFilterOptions } = useEntityContext();

  return (
    <div className="flex items-center">
      <FilterType
        url={url}
        setFilterOptions={setFilterOptions}
      />
      <FilterWage
        valueUnder={valueUnder}
        url={url}
      />
    </div>
  )
};
