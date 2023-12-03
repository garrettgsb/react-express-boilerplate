import { useState, useCallback } from 'react'

export const FilterWord = ({ setFilterOptions }) => {
  const [value, setValue] = useState('');

  const handleChange = useCallback((event) => {
    const value = event.target.value;
    setValue(value);
    setFilterOptions({ searchWord: value })
  }, []);

  return (
    <div className="pl-4">
      <input
        type="text"
        value={value}
        placeholder="Search..."
        onChange={handleChange}
        className="w-56 h-8 px-4 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
      />
    </div>
  )
}