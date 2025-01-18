import React, { useState } from "react";

const Add = () => {
  const initialState = () => {
    console.log("initializing...");
    return 10;
  };

  const [count, setCount] = useState(initialState);

  const incrementFunc2 = () => setCount((prevCount) => prevCount + 2);
  return (
    <div>
      <span>Count: {count}</span>
      <button
        onClick={incrementFunc2}
        className="bg-blue-400 px-2 py-2 border border-black"
      >
        Inreasing by 2
      </button>

      {/* <div className="flex flex-col items-center justify-center">{content}</div> */}
    </div>
  );
};

export { Add };
