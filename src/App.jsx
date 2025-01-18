import Adminpanel from "../src/pages/Adminpanel";
import LoginForm from "./components/LoginForm";
import { UserProfile } from "./pages/UserProfile";

let isLoggedIn = true;
let content = isLoggedIn ? <Adminpanel /> : <LoginForm />;

const App = () => {

  return (
    <div className="flex flex-row space-x-3 items-center justify-center mt-14">

      <UserProfile />
    </div>
  );
};

export default App;
