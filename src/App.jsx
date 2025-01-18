import { useState } from "react";
import Adminpanel from "../src/pages/Adminpanel";
import LoginForm from "./components/LoginForm";

let isLoggedIn = true;
let content = isLoggedIn ? <Adminpanel /> : <LoginForm />;

const App = () => {
  const initialState = () => {
    console.log("initializing...");
    return 10;
  };

  const [count, setCount] = useState(initialState);

  const incrementFunc = () => setCount(count + 10);
  return (
    <div className="flex flex-row space-x-3 items-center justify-center mt-14">

      <span>Count: {count}</span>
      <button
        onClick={incrementFunc}
        className="bg-blue-400 px-2 py-2 border border-black"
      >
        +
      </button>

      {/* <div className="flex flex-col items-center justify-center">{content}</div> */}
    </div>
  );
};

export default App;
