import { useState } from "react";

export default function usePreviousState(init) {
  const [state, setNewState] = useState(init);
  const [prevState, setPrevState] = useState(null);
  const setState = (newState) =>{
    setPrevState(state);
    setNewState(newState);
  }
  return [state, setState, prevState];
}
