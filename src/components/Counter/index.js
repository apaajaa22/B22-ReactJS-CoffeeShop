import React, { useState } from "react";

function Counter({ onValueChange }) {
  const [counter, setCounter] = useState(1);

  const onCount = (type) => {
    let result = counter;
    if (type === "plus") {
      result = counter + 1;
    }
    if (type === "minus") {
      if (counter > 1) {
        result = counter - 1;
      }
    }
    setCounter(result);
    // onValueChange(result);
  };
  return (
    <div className="flex flex-row space-x-4 items-center text-xl font-bold">
      <button
        onClick={() => onCount("minus")}
        className="font-bold focus:outline-none w-10 h-10 bg-yellow-400 text-3xl text-center rounded-full"
      >
        -
      </button>
      <p>{counter}</p>
      <button
        onClick={() => onCount("plus")}
        className="font-bold focus:outline-none w-10 h-10 bg-yellow-400 text-3xl text-center rounded-full"
      >
        +
      </button>
    </div>
  );
}

export default Counter;
