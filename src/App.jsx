import React from "react";
import Adminpanel from "./pages/Adminpanel";
import LoginForm from "./components/LoginForm";

let isLoggedIn = true;
let content = isLoggedIn ? <Adminpanel /> : <LoginForm />;

const App = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center">{content}</div>
    </>
  );
};

export default App;
