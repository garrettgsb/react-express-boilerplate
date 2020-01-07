import { useState } from "react"

export default function useVisualMode(initial: any) {
  const [mode, setMode] = useState(initial)
  const [history, setHistory] = useState([initial]);

  const transition = (mode: any, replace = false) => {
    if (replace === false) {
      setMode(mode)
      setHistory(prev => ([...prev, mode]))
    } else {
      setMode(mode)
    }
  }

  const back = () => {
    history.pop()
    if (history.length < 1) return
    setMode(history[history.length - 1])
  }

  return {
    mode,
    transition,
    back
  }
}
