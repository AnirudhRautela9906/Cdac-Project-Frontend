import React, { useEffect } from 'react'
import Footer from '../../components/footerLogin/Footer'
// import NavbarLogin from '../../components/navbar/NavbarLogin'
import User from './../../Home_images/Username.svg'
import toast from 'react-hot-toast';
import './Login.scss'
import Lock from './../../Home_images/Password.svg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {login} from "../../redux/actions/userActions.js"
import { LOGIN_REQUEST } from '../../redux/constants/userConstants.js';

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [Password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [body, setBody] = useState({
    "email" : email,
    "password" : Password
  });

  const onLogin = ()=>{
  
  setBody(prev => ({
    ...prev,
    email: email,
    password: Password
  }));
  setIsLogin(true);
  dispatch(login(email,Password))
    
  }

  const {error,loading,isAuthenticated,Name,isloggedOut} = useSelector((state) => state.user)
  useEffect(()=>{
    // console.log(body,loading);
    if(!loading )
      {      
        if(error){
          toast.error("Invalid Email or Password");
          dispatch({ type:LOGIN_REQUEST })
        }
        else if(isAuthenticated)
        {
          toast.success(`Welcome ${Name}`);
          setTimeout(() => {
            navigate('/profile')
        }, 500);
        }
        
      }
      
  },[loading, body, error, isAuthenticated, Name, navigate, dispatch])
  return (
    <>
      {/* <NavbarLogin/>  */}
      <p className='p1'>Log in to Seeker</p>      
      <div className='loginBox'>
        <div className='inputContainer'>
          <div>Email</div>
          <div className='inputWrapper'>
            <img src={User} alt="Username icon" style={{height:"30px"}} />
            <input type="text" name="email"  onChange={(event)=>{setEmail(event.target.value)}}/>
          </div>
        </div>
        <div className='inputContainer'>
          <div>Password</div>
          <div className='inputWrapper'>
            <img src={Lock} alt="Username icon" style={{height:"30px"}} />
            <input type="password" name="password" onChange={(event)=>{setPassword(event.target.value)}}/>
          </div>
        </div>
        <div className="loginButtonBox">
          <button onClick={onLogin}>Login</button>
          <div>Forgot Password?</div>
        </div>
        <div className="SignupButtonBox">
          <p>Don't have a Seeker Account?</p>
          <button onClick={()=>{navigate("/Signup")}}>Sign Up</button>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Login
