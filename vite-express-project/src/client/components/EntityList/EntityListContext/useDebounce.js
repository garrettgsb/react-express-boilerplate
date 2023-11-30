import { useState, useEffect } from 'react'

export const useDebounce = (value, milliSeconds) => {
 const [debouncedValue, setDebouncedValue] = useState(value);

 useEffect(() => {
   const timeout = setTimeout(() => {
     setDebouncedValue(value);
   }, milliSeconds);

   return () => {
     clearTimeout(timeout);
   };
 }, [value, milliSeconds]);

 return debouncedValue;
};
