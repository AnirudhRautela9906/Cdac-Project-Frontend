
import React, { useEffect, useState } from "react";
import NavbarProfile from "../../components/navbar/NavbarProfile";
import DownArrow from "../../Home_images/Down Icon.svg";
import FilterIcon from "../../Home_images/Filter Icon.svg";
import {  useSelector } from "react-redux";
import PostedJobSlice from "../../components/postedJobSlice/PostedJobSlice.jsx";
import JobDescriptionCard from "../../components/jobDescriptionCard/JobDescriptionCard.js";
const JobsPosted = () => {
    // const { jobsPosted } = useSelector((state) => state.user);
    // const {userLoading} = useSelector((state) => state.user);
    const {user} = useSelector((state) => state.user)
  
  const [filter, setFilters] = useState("none");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedJob, setSelectedJob] = useState(user.jobsPosted[0]?.jobId);
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
          <NavbarProfile />
          <hr />
          <div className="nav">
            <div className="filters">
              <p>
                <img src={DownArrow} alt="" />
                <span>Nearby Jobs</span>
              </p>
              <p
                onClick={() => {
                  setShowFilters(true);
                }}
              >
                <img src={FilterIcon} alt="" />
                <span>Filter</span>
              </p>
              {showFilters && (
                <div>
                  <button
                    onClick={() => {
                      setFilters("area");
                      setShowFilters(false);
                    }}
                  >
                    area
                  </button>
                  <button
                    onClick={() => {
                      setFilters("city");
                      setShowFilters(false);
                    }}
                  >
                    city
                  </button>
                  <button
                    onClick={() => {
                      setFilters("state");
                      setShowFilters(false);
                    }}
                  >
                    state
                  </button>
                  <button
                    onClick={() => {
                      setFilters("none");
                      setShowFilters(false);
                    }}
                  >
                    none
                  </button>
                </div>
              )}
              {filter !== "none1" ? (
                <span>
                  <span>{filter}</span>{" "}
                  <button
                    onClick={() => {
                      setFilters("none1");
                      setShowFilters(true);
                      setSelectedJob(-1);
                    }}
                  >
                    Clear filters
                  </button>
                </span>
              ) : (
                <span></span>
              )}
            </div>
            <div >
              
            </div>
          </div>
          <div className="profile parallel">
            {console.log(user.jobsPosted)}
                  <div className="left">
                    {user.jobsPosted?.map((job, index) => {
                      if (
                        (filter === "area" && job.creator.email !== user.email &&
                          user.address.area === job.jobLocation.area) ||
                        (filter === "city" && job.creator.email !== user.email &&
                          user.address.city === job.jobLocation.city) ||
                        (filter === "state" && job.creator.email !== user.email &&
                          user.address.state === job.jobLocation.state) ||
                          (filter === 'none')
                      ) {
                        return (
                          <PostedJobSlice key={index} title={job.title} cN={job.jobId === selectedJob ? `borderGreen` : undefined}
                          onClick={() => {
                            setSelectedJob((prev)=>{return job.jobId})
                            }}/>
                        );
                      }
                    })}
                  </div>
                  <div className="right">
                    {user.jobsPosted?.map((job, index) => {
                      if (job.jobId === selectedJob) {
                        return (
                            <JobDescriptionCard key={index} title={job.title}/>
                        );
                      }
                    })}
                  </div>
          </div>
        </>
      );
    };
    

export default JobsPosted