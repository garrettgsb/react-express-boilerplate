import { useState, useCallback } from 'react';
import { PRICE_BY_URL, DEFAULT_LABEL_BY_URL } from '../constants';

export const FilterWage = ({ url, setFilterOptions }) => {
  const [value, setValue] = useState(PRICE_BY_URL[url].max);

  const handleChange = useCallback((event) => {
    const value = Number(event.target.value);
    setValue(value);
    setFilterOptions({ valueUnder: value * 100 })
  }, []);

  return (
    <div className="dropdown">
      <button
        className="btn btn-sm flex items-center mr-1 w-44"
      >
        {value === PRICE_BY_URL[url].max
          ? `${DEFAULT_LABEL_BY_URL[url]}`
          : `${DEFAULT_LABEL_BY_URL[url]}S UP TO $${value}`
        }
      </button>
      <div className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-48">
        <input
          type="range"
          name="filter-dropdown"
          className="filter-controller btn btn-sm btn-block btn-ghost p-0"
          min={PRICE_BY_URL[url].min}
          max={PRICE_BY_URL[url].max}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}