import React from 'react'
import logo from '../../Home_images/logo.png'
import  "./Navbar.scss"
import { useNavigate } from 'react-router-dom'
const NavbarLogin = () => {
   const navigate = useNavigate();
  return (
    <>
        <div className="navLogo">
          <img src={logo} alt="" onClick={()=>{navigate("/")}} />
        </div>
    
    </>
  )
}

export default NavbarLogin