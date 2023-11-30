import { useState, useCallback, useMemo } from 'react';
import { artistType, projectType } from "../../../constants/TypeSelections";
import { URL_ARTISTS, URL_GIGS } from "../constants";

const TYPES_BY_URL = {
  [URL_ARTISTS]: artistType,
  [URL_GIGS]: projectType,
};

export const FilterType = ({ url }) => {
  const [checkedById, setCheckedById] = useState(
    TYPES_BY_URL[url].reduce((acc, { id }) => {
      acc[id] = true;
      return acc;
    }, {})
  );

  // omit 'Select Type'
  const list = useMemo(() => {
    const [_, ...types] = TYPES_BY_URL[url];

    return types;
  }, [url]);

  const handleClick = useCallback((event) => {
    const { id } = event.target;
    setCheckedById((prev) => ({ ...prev, [id]: !prev[id] }));
  }, [list]);
  
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
              <input
                type="checkbox"
                className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                checked={checkedById[id]}
                readOnly
              />
              {name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}