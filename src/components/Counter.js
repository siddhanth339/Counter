import { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <button className="countBtn" onClick={() => setCounter(counter + 1)}>
      {counter}
    </button>
  );
};

export default Counter;
