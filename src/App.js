import "./App.css";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import Signinpage from "./pages/Signinpage";

import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="App">
      <SignupPage></SignupPage>
      <Signinpage />
      <Home />
      <Profile />
    </div>
  );
}

export default App;
