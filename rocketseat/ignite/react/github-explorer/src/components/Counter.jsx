import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  const handlePlusOne = () => {
    setCounter(counter + 1);
  }

  return (
    <>
      <h1>Counting: {counter}</h1>
      <button type="button" onClick={handlePlusOne}>+1</button>
    </>
  )
}