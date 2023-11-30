import { FilterType } from "./FilterType";
import { FilterWage } from "./FilterWage";

export const FilterOptions = ({ url }) => {
  return (
    <div className="flex items-center">
      <FilterType url={url} />
      <FilterWage url={url} />
    </div>
  )
};
