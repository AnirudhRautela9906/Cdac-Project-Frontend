import React, { useEffect, useState } from "react";
import NavbarProfile from "../../components/navbar/NavbarProfile";
import "./Style.scss";
import DownArrow from "../../Home_images/Down Icon.svg";
import FilterIcon from "../../Home_images/Filter Icon.svg";
import JobCard from "./../../components/jobCard/JobCard.jsx";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Profile = () => {
  // console.log("jknjk")
  const {isAuthenticated  } = useSelector((state) => state.user);
  const jobs =null
  //  user.jobsPosted;
  //console.log(user, "sxsk");
  const nav = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      nav("/");
    }
    //console.log(user);
  }, [isAuthenticated, nav]);

  // State to manage form visibility
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Function to show the form
  const openForm = () => {
    setIsFormVisible(true);
  };

  // Function to handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here

    // Hide the form after submission
    setIsFormVisible(false);
  };

  return (
    <>
      <NavbarProfile />
      <hr />
      <div className="nav">
        <div className="filters">
          <p>
            <img src={DownArrow} alt="" />
            <span>Nearby Jobs</span>
          </p>
          <p>
            <img src={FilterIcon} alt="" />
            <span>Filter</span>
          </p>
        </div>
        <div onClick={openForm} className="postJobButton">
          <div>Post a Job?</div>
        </div>
      </div>
      <div className="left">
        {jobs?.map((index, job) => {
          return (
            <JobCard
              picUrl={`https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg`}
              name={job.name}
              address={{
                area: job.jo,
                city: job.city,
                state: job.state,
              }}
              jobTitle={`JD in brief/ Job Title`}
            />
          );
        })}
      </div>
        {isFormVisible && (
          <div className="overlay">
            <div className="form-container">
              <form onSubmit={handleFormSubmit}>
                <label>
                  Name:
                  <input type="text" name="name" required />
                </label>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        )}
    </>
  );
};

export default Profile;
