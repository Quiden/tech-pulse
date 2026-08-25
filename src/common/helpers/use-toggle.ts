import { useState } from "react";

export const useToggle = (initialState: boolean | (() => boolean) = false) => {
  const [state, setState] = useState(initialState);

  const toggle = () => setState((prev) => !prev);
  const makeTrue = () => setState(true);
  const makeFalse = () => setState(false);

  return [state, toggle, makeTrue, makeFalse] as const;
};
