import { useState, useCallback, useMemo } from 'react';
import { artistType, projectType } from "../../../constants/TypeSelections";
import { URL_ARTISTS, URL_GIGS } from "../constants";

const TYPES_BY_URL = {
  [URL_ARTISTS]: artistType,
  [URL_GIGS]: projectType,
};

export const FilterType = ({ url, setFilterOptions }) => {
  const [checkedById, setUnCheckedById] = useState({ '1': true })

  const list = useMemo(() => TYPES_BY_URL[url], [url]);

  const handleClick = useCallback((event) => {
    const [_, ...types] = list;
    const { id } = event.target;

    const nextState = { ...checkedById, [id]: !checkedById[id] };
    const isAllChecked = types.every(({ id }) => nextState[id]);
    const isNothingChecked = types.every(({ id }) => !nextState[id]);

    // we store selected ids here and in useFilterOptions hook differently
    // the reason why we have separate states for the same data
    // is because we want to display checked items right away when user clicks them
    // but we don't want to fetch data every time user clicks something so we debounce them
    if (isAllChecked || id === '1' || isNothingChecked) {
      setFilterOptions({ selectedTypeById: { '1': true } });
      setUnCheckedById({ '1': true });
    } else {
      nextState['1'] = false;
      setFilterOptions({ selectedTypeById: nextState });
      setUnCheckedById(nextState);
    }
  }, [list, setFilterOptions, checkedById]);
  
  return (
    <div className="dropdown">
      <button
        className="btn btn-sm flex items-center mr-1"
      >
        TYPE
      </button>
      <ul
        className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
      >
        {list.map(({ id, name }) => (
          <li key={name}>
            <button
              type="button"
              name={name}
              id={id}
              className="filter-controller btn btn-sm btn-block btn-ghost justify-start"
              onClick={handleClick}
            >
              <div
                type="checkbox"
                className={
                  checkedById[id]
                    ? "w-3 h-3 text-blue-500 bg-blue-100 border-blue-300 rounded focus:ring-blue-500 dark:focus:ring-blue-500 dark:ring-offset-blue-500 focus:ring-2 dark:bg-blue-500 dark:border-blue-500"
                    : "w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                }
              />
              {id === 1 ? 'All' : name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}