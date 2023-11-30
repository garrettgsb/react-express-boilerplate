import { useState, useCallback } from 'react';
import { useEntityContext } from '../EntityListContext';
import { SORT_DIRECTION, SORT_ATTRIBUTE_BY_URL, SORT_ATTRIBUTE_DISPLAY_NAME } from '../constants';

export const SortOptions = ({ url }) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    sortAttribute,
    sortDirection,
    setSortOptions
  } = useEntityContext();

  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <div className="flex">
      <div className="dropdown">
        <button
          className="btn btn-sm flex items-center mr-1"
          onClick={handleOpen}
        >
          {SORT_ATTRIBUTE_DISPLAY_NAME[sortAttribute]}
        </button>
        {isOpen && (
          <ul className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box">
            {SORT_ATTRIBUTE_BY_URL[url].map((attribute) => (
              <li key={attribute}>
                <button
                  type="button"
                  name="sort-dropdown"
                  className="sort-controller btn btn-sm btn-block btn-ghost justify-start"
                  onClick={() => {
                    handleClose();
                    setSortOptions({
                      attribute,
                    });
                  }}
                >
                  {SORT_ATTRIBUTE_DISPLAY_NAME[attribute]}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        className="btn btn-sm flex items-center rounded-full p-2.5"
        onClick={() => {
          setSortOptions({
            direction:
              sortDirection === SORT_DIRECTION.ASC
                ? SORT_DIRECTION.DESC
                : SORT_DIRECTION.ASC,
          });
        }}
      >
        <svg
          width="12px"
          height="12px"
          className={
            "h-3 w-3 fill-current opacity-60 inline-block" +
            (sortDirection === SORT_DIRECTION.ASC ? " rotate-180" : "")
          }
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
    </button>
  </div>
  );
};
