import Adminpanel from "../src/pages/Adminpanel";
import LoginForm from "./components/LoginForm";
import { Add } from "./pages/Add";
import { Datafetch } from "./pages/Datafetch";

let isLoggedIn = true;
let content = isLoggedIn ? <Adminpanel /> : <LoginForm />;

const App = () => {

  return (
    <div className="flex flex-row space-x-3 items-center justify-center mt-14">
      <Datafetch />
    </div>
  );
};

export default App;
