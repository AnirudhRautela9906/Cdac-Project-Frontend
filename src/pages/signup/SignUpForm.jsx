import React, { useState, useEffect } from "react";
import "./SignUpForm.scss";
import bgImage from "../../Home_images/SignUp_page_background.png";
import Logo from "../../components/navbar/NavbarLogin";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { postApi } from "../../services/ApiConfig";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/userSlice";
import {register} from "../..//redux/actions/userActions"
import { LOGIN_REQUEST } from "../../redux/constants/userConstants";
const SignUpForm = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const [obj, setObj] = useState({
    email: "",
    name: "",
    password: "",
    aadhar: "",
    age: 0,
    address: {
      state: "",
      city: "",
      area: "",
    },
    phoneNumber: "",
  });

  const {error,loading,isAuthenticated,Name,isloggedOut} = useSelector((state) => state.user)
  
  const onRegister = (event) => {
    event.preventDefault();

      dispatch(register(obj))
  };

  const handleChange = (field, value) => {
    setObj((prev) => ({
      ...prev,
      ...(field === "state" || field === "city" || field === "area"
        ? { address: { ...prev.address, [field]: value } }
        : { [field]: value }),
    }));
  };
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
            nav('/profile')
        }, 500);
        }
        
      }
      
  },[loading, error, isAuthenticated, Name, nav, dispatch])
  return (
    <>
      <div className="nav">
        <Logo />
        <button
          onClick={() => {
            nav("/Login");
          }}
        >
          Log in
        </button>
      </div>

      <div className="container">
        <div className="form-container">
          <form onSubmit={onRegister}>
            <div className="form-group">
              <label htmlFor="first-name">Full Name</label>
              <input
                type="text"
                id="first-name"
                name="first-name"
                required
                onChange={(event) => handleChange("name", event.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                name="city"
                required
                onChange={(event) => handleChange("city", event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                type="text"
                id="state"
                name="state"
                required
                onChange={(event) => handleChange("state", event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pincode">Pincode</label>
              <input
                type="text"
                id="pincode"
                name="pincode"
                required
                onChange={(event) => handleChange("area", event.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile-number">Mobile Number</label>
              <input
                type="text"
                id="mobile-number"
                name="mobile-number"
                required
                onChange={(event) =>
                  handleChange("phoneNumber", event.target.value)
                }
              />
              <button type="button" className="otp-button">
                Get OTP
              </button>
              <button type="button" className="otp-button">
                Resend OTP
              </button>
              <input
                placeholder="enter otp"
                type="text"
                className="otp"
                name="otp"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={(event) => handleChange("email", event.target.value)}
              />
              <button type="button" className="otp-button">
                Get OTP
              </button>
              <button type="button" className="otp-button">
                Resend OTP
              </button>
              <input
                placeholder="enter otp"
                type="text"
                className="otp"
                name="otp"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                onChange={(event) =>
                  handleChange("password", event.target.value)
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="aadhar-number">Aadhar Number</label>
              <input
                type="text"
                id="aadhar-number"
                name="aadhar-number"
                required
                onChange={(event) => handleChange("aadhar", event.target.value)}
              />
            </div>
            <div className="form-group1">
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">
                Yes, I understand and agree to the Seeker Terms of Service,
                including the User Agreement and Privacy Policy.
              </label>
            </div>
            <button type="submit" className="submit-button">
              Create my account
            </button>
            <p>
              Already have an account? <a href="/Login">Log in</a>
            </p>
          </form>
        </div>
        <div id="background-image">
          <img src={bgImage} alt="background" />
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
