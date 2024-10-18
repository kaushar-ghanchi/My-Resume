import { useState } from "react";
import styles from "./counter.module.scss";

export const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter Example</h1>
      <div>
        <button
          className={styles.countButton}
          onClick={() => setCount(count + 1)}
        >
          {count}
        </button>
      </div>
    </div>
  );
};
export default Counter;
