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
import  { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import store from "./redux/store.js";
import { loadUser } from "./redux/actions/userActions.js";
import ProtectedRoute from "./components/Route/ProtectedRoute.js";

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
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
      <Toaster />
    </Router>
    </>
  );
}

export default App;
