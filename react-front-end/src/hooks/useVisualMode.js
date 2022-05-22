import { useState } from 'react'

// Functions that controls the flow of appointment view
export default function useVisualMode(initial) {

  // Destructured properties
  const [history, setHistory] = useState([initial]);

  // Function that changes views
  const transition = (mode, replace = false) => {
    if (!replace) {
      setHistory(prev => {
        return [...prev, mode]});
    } else {
      setHistory(prev => {
        return [...prev.slice(0, -1), mode]
      });
    };
  };

  // Function that allows return of the previous view
  const back = () => {
    if (history.length > 1) {
      setHistory(prev => {
        return [...prev.slice(0, -1)];
      });
    };
  };

  return {
    mode: history[history.length - 1],
    transition,
    back
  };
};