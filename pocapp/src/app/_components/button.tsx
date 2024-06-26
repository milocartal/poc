import { useState } from "react";

export const Button = () => {
  const [count, setCount] = useState(0);
  return (
    <button type="button" onClick={() => setCount((_old) => _old + 1)}>
      {count}
    </button>
  );
};
