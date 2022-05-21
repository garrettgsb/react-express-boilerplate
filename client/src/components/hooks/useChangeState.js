import React, {useState} from "react";

export default function useChangeState() {
  const [isFlipped,_setFlipped] = useState(false)
      
  const flip = () => {
    _setFlipped((prevState) => !prevState);
  }

  return {flip, isFlipped};
}