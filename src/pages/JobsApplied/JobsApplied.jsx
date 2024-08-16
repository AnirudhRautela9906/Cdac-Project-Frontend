
import React, { useEffect, useState } from "react";
import NavbarProfile from "../../components/navbar/NavbarProfile";
import DownArrow from "../../Home_images/Down Icon.svg";
import FilterIcon from "../../Home_images/Filter Icon.svg";
import JobCard from "./../../components/jobCard/JobCard.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ListIcon from "../../Home_images/list.svg"
import StatusIcon from "../../Home_images/status.svg" 
import { useLocation } from "react-router-dom";
import PostedJobSlice from "../../components/postedJobSlice/PostedJobSlice.jsx";
import JobDescriptionCard from "../../components/jobDescriptionCard/JobDescriptionCard.js";

import AppliedUsersCard from "../../components/appliedUsersCard/AppliedUsersCard.jsx";
const JobsApplied = () => {
    const { jobsApplied } = useSelector((state) => state.user);
    const {userLoading} = useSelector((state) => state.user);
    const {user} = useSelector((state) => state.user)
    const location = useLocation();

  const dispatch = useDispatch();

  const [filter, setFilters] = useState("none");
  const [showFilters, setShowFilters] = useState(false);
  const [isStatus, setIsStatus] = useState(false);
  const [selectedJob, setSelectedJob] = useState(jobsApplied[0]?.jobId);
  const nav = useNavigate();
  useEffect(() => {
      
      // ?console.log(userLoading);
    if (user.email === "" && !userLoading) {
      nav("/");
    }
    else if( user.email !== "" && !userLoading )
    {
      setSelectedJob(jobsApplied[0]?.jobId);
    }
    //console.log(user);
  }, [nav,userLoading]);
    return (
        <>
          <NavbarProfile />
          <hr />
          <div className="navPostedJobs">
            <div className="filtersPostedJobs">
              <p>
                <img src={DownArrow} alt="" />
                <span>Applied Jobs</span>
              </p>
            </div>
          </div>
          <div className="profile parallel">

                  <div className="left">
                    {jobsApplied?.map((job, index) => {
                       {
                        return (
                          <PostedJobSlice key={index} title={job.title} cN={job.jobId === selectedJob ? `borderGreen` : undefined}
                          onClick={() => {
                            setSelectedJob((prev)=>{return job.jobId})
                            }}/>
                        );
                      }
                    })}
                  </div>
                  {isStatus ? <div className="right">
                    {jobsApplied?.map((job, index) => {
                      if (job.jobId === selectedJob) {
                        return (
                            <JobDescriptionCard key={index} title={job.title} description={job.longDesc} url={'/profile/jobsApplied'} status={job.status} price ={job.price}/>
                        );
                      }
                    })}
                  </div> :
                   <div>
                  {jobsApplied?.map((job, index) => {
                    if (job.jobId === selectedJob) {

                      return (
                        <AppliedUsersCard key={index} userList={job.appliedUsers} status={job.status} jobId={job.jobId}/>
                      );
                    }
                  })}
                  </div>}
                  
          </div>
        </>
      );
    };
    

export default JobsApplied