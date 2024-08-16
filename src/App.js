import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Register from "./pages/signup/SignUpForm.jsx";
import Login from "./pages/login/Login.jsx";
import Profile from "./pages/profile/Profile.jsx";
import About from "./pages/About/About.jsx";
import Contact from "./pages/contact/Contact.jsx";
import { Toaster } from "react-hot-toast";
import { useEffect } from "react";
import store from "./redux/store.js";
import { loadUser } from "./redux/actions/userActions.js";
import ProtectedRoute from "./components/Route/ProtectedRoute.js";
import JobsPosted from "./pages/JobsPosted/JobsPosted.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import TransactionTable from "./pages/TransactionTable/TransactionTable.jsx";
import NotFoundPage from "./pages/Error/NotFoundPage .js";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/Signup" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/jobsPosted" element={<JobsPosted />} />
            <Route path="/TransactionTable" element={<TransactionTable />} />
          </Route>
        </Routes>
        <Toaster />
      </Router>
    </>
  );
}

export default App;
