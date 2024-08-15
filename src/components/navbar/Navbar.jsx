import { Link } from "react-router-dom";
import logo from "../../Home_images/logo.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect,  useRef,useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { logout } from "../../redux/actions/userActions";
import "./RightSlider.css";
import "./NotificationBell.css";
import "./Navbar.scss";
const Navbar = () => {
  const [activeLogSign, setActiveLogSign] = useState(false);
  const [activeLog, setActiveLog] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const {error,  isAuthenticated,loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveLogSign(true);
    }
    else{
      setActiveLogSign(false);
    }
    if (location.pathname === "/Signup") {
      setActiveLog(true);
    }
    else{
      setActiveLog(false);
    }
  }, [location.pathname]);

  const [isOpen, setIsOpen] = useState(false);
  const nav = useNavigate();
  const [isNotiOpen, setNotiIsOpen] = useState(false);
  const dispatch = useDispatch();
  const toggleSlider = () => {
    setIsOpen(!isOpen);
  };

  const messageBoxRef = useRef(null);

  // Toggle message box visibility
  const toggleMessageBox = () => {
    setNotiIsOpen(!isNotiOpen);
  };

  // Handle clicks outside the message box
  const handleClickOutside = (event) => {
    if (
      messageBoxRef.current &&
      !messageBoxRef.current.contains(event.target)
    ) {
      setNotiIsOpen(false);
    }
  };
  // const { error, isAuthenticated } = useSelector((state) => state.user);
  function loadJobsPosted() {
    toggleSlider();
    nav("/profile/jobsPosted");
  }
  function loadHome() {
    toggleSlider();
    nav("/profile");
  }
  function logoutUser() {
    toggleSlider();
    dispatch(logout());
  }

  useEffect(() => {
    if (isNotiOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
    // if (error) {
    //   toast.error(error);
    //   dispatch({ type: LOGIN_REQUEST });
    // }
    //  else if (!isAuthenticated) {
    //   toast.success("SEE YOU SOON");
    // }
  }, [dispatch, error, isAuthenticated, isNotiOpen]);


  return (
    <>
      {!loading && <div className="nav1">
        <div className="nav1-1">
          <img
            src={logo}
            alt=""
            onClick={() => {
              navigate("/");
            }}
          />{" "}
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>
        {activeLogSign && (
          <div className="nav1-2">
            <Link to="/Login">Log in</Link>
            <Link to="/Signup">Sign Up</Link>
          </div>
        )}
        {activeLog &&
          <div className="nav">
            <button
            onClick={() => {
              navigate("/Login");
            }}
          >
            Log in
          </button>
          </div>
        }
      {
        isAuthenticated &&<div>
          <div className="notification-container">
            <button onClick={toggleMessageBox} className="notification-bell">
              🔔
            </button>

            {isNotiOpen && (
              <div className="message-box" ref={messageBoxRef}>
                <h4>Notifications</h4>
                <ul>
                  <li>Notification 1</li>
                  <li>Notification 2</li>
                  <li>Notification 3</li>
                </ul>
              </div>
            )}
          </div>
          <button onClick={toggleSlider} className="open-slider-btn profilePic">
            Profile
          </button>

          <div className={`slider ${isOpen ? "open" : ""}`}>
            <button onClick={toggleSlider} className="toggle-button">
              {isOpen ? "Close Slider" : "Open Slider"}
            </button>

            <div className={`slider ${isOpen ? "open" : ""}`}>
              <button className="slider-button" onClick={toggleSlider}>
                x
              </button>
              <button className="slider-button" onClick={toggleSlider}>
                Account
              </button>
              <button className="slider-button" onClick={loadHome}>
                Home
              </button>
              <button className="slider-button" onClick={loadJobsPosted}>
                Jobs Posted
              </button>
              <button className="slider-button" onClick={toggleSlider}>
                Jobs Applied
              </button>
              <button className="slider-button" onClick={logoutUser}>
                Logout
              </button>
            </div>
          </div>
        </div>}
      </div>
}
    </>
  );
};

export default Navbar;
