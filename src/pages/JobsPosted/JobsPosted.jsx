
import React, { useEffect, useState } from "react";
// import NavbarProfile from "../../components/navbar/NavbarProfile";
import DownArrow from "../../Home_images/Down Icon.svg";
import FilterIcon from "../../Home_images/Filter Icon.svg";
import {  useSelector } from "react-redux";
import PostedJobSlice from "../../components/postedJobSlice/PostedJobSlice.jsx";
import JobDescriptionCard from "../../components/jobDescriptionCard/JobDescriptionCard.js";
import "./JobsPosted.scss";
import ListIcon from "../../Home_images/list.svg";
import StatusIcon from "../../Home_images/status.svg";
import AppliedUsersCard from "../../components/appliedUsersCard/AppliedUsersCard.jsx";
import { useLocation } from "react-router-dom";
const JobsPosted = () => {
    // const { jobsPosted } = useSelector((state) => state.user);
    // const {userLoading} = useSelector((state) => state.user);
    const location = useLocation();
    const {user} = useSelector((state) => state.user)
  const jobsPosted = user.jobsPosted
    const [isStatus, setIsStatus] = useState(false);
    const [selectedJob, setSelectedJob] = useState(jobsPosted[0]?.jobId);
  useEffect(() => {
      // console.log(user);
      // console.log(userLoading);
    // if (user.email === "" && !userLoading) {
    //   nav("/");
    // }
    //console.log(user);
  }, []);
    return (
        <>
          {/* <NavbarProfile /> */}
          <hr />
          <div className="navPostedJobs">
        <div className="filtersPostedJobs">
          <p>
            <img src={DownArrow} alt="" />
            <span>Posted Jobs</span>
          </p>
        </div>
        <span className="span1">
            <div className="filtersPostedJobs">
              <p>
                <span onClick={()=>{setIsStatus(false)}}>List of Applied Users</span>
              </p>
            </div>
            <div className="filtersPostedJobs">
              <p>
                <span onClick={()=>{setIsStatus(true)}}>Check Job Status</span>
              </p>
            </div>
            </span>
      </div>
      <div className="profile parallel">
        <div className="left">
          {jobsPosted?.map((job, index) => {
            
              return (
                <PostedJobSlice
                  key={index}
                  title={job.title}
                  cN={job.jobId === selectedJob ? `borderGreen` : undefined}
                  onClick={() => {
                    setSelectedJob((prev) => {
                      console.log("x");
                      return job.jobId;
                    });
                  }}
                />
              );
            
          })}
        </div>
        {isStatus ? (
          <div className="right">
            {jobsPosted?.map((job, index) => {
              if (job.jobId === selectedJob) {
                return (
                  <JobDescriptionCard
                  key={index}
                  title={job.title}
                  description={job.longDesc}
                  url={location.pathname}
                  status={job.status}
                  price={job.price}
                  />
                );
              }
            })}
          </div>
        ) : (
          <div>
            {jobsPosted?.map((job, index) => {
              if (job.jobId === selectedJob) {
                return (
                  <AppliedUsersCard
                    key={index}
                    assignedUser={job.assignedUser}
                    userList={job.appliedUsers}
                    status={job.status}
                    jobId={job.jobId}
                  />
                );
              }
            })}
          </div>
        )}
      </div>
        </>
      );
    };
    

export default JobsPosted