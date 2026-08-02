import { FC, useState } from "react";
import * as classes from "./counter.module.css";

export const Counter: FC = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button className={classes.counter__button} onClick={handleDecrement}>
        -
      </button>
      <span>{count}</span>
      <button className={classes.counter__button} onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};
