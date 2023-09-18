
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';

import Signinpage from "./pages/Signinpage";

import SignupPage from './pages/SignupPage';
import Accordion from './pages/Accordian';


function App() {
  return (
    <div className="App">
      <SignupPage></SignupPage>
      <Signinpage />
      <Home />
      <Profile />
      {/* <Accordion></Accordion> */}
    </div>
  );
}

export default App;
