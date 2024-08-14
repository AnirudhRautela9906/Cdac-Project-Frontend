import { Link } from "react-router-dom";
import logo from "../../Home_images/logo.png";
import "./Style.scss";
const Navbar = () => {
  return (
    <>
      <div className="nav1">
        <div className="nav1-1">
          <img src={logo} alt="" />
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </div>
        <div className="nav1-2">
          <Link to="/Login">Log in</Link>
          <Link to="/Signup">Sign Up</Link>
        </div>
        {/* <div className='nav1-p' onMouseEnter={()=>{setShowDropdown((prevState)=>{return true});
        }} onMouseLeave={()=>{setShowDropdown((prevState)=>{return false})}} >
            <Link style={{width:"100px"}} to="/Profile"   >Profile</Link>
            {showDropdown && <div>
            <div style={{border:"2px solid black", height:"100px", width:"100px",position:'absolute'}} ></div>    
        </div>} */}
      </div>
    </>
  );
};

export default Navbar;