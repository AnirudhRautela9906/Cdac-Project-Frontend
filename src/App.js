import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Register from "./pages/signup/SignUpForm.jsx";
import Login from "./pages/login/Login.jsx";
import Profile from "./pages/profile/Profile.jsx";
import About from "./pages/About/About.jsx";
import  { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import store from "./redux/store.js";
import { loadUser } from "./redux/actions/userActions.js";
import ProtectedRoute from "./components/Route/ProtectedRoute.js";
import JobsPosted from "./pages/JobsPosted/JobsPosted.jsx";

function App() {

  

  useEffect(() => {
    

    store.dispatch(loadUser());

  }, []);
  
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Register />} />
        <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/jobsPosted" element={<JobsPosted />} />
        </Route>
      </Routes>
      <Toaster />
    </Router>
    </>
  );
}

export default App;
