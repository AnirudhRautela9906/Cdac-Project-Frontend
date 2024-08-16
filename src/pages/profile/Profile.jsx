import React, { useEffect, useState } from "react";
// import NavbarProfile from "../../components/navbar/NavbarProfile.jsx";
import "./Profile.scss";
import DownArrow from "../../Home_images/Down Icon.svg";
import FilterIcon from "../../Home_images/Filter Icon.svg";
import JobCard from "../../components/jobCard/JobCard.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PostJobForm from "../../components/postJobForm/PostJobForm.jsx";
import JobDescriptionCard from "../../components/jobDescriptionCard/JobDescriptionCard.js";
import { loadJobs } from "../../redux/actions/jobActions.js";
import toast from "react-hot-toast";
import Loading from "../../components/loading/LoadingSpinner.js";

const Profile = () => {
  const dispatch = useDispatch();
  // console.log("jknjk")

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { jobs, loading, jobCreated, jobApplied, error } = useSelector(
    (state) => state.job
  );

  const [jobsList, setJobsList] = useState([]);
  const [filter, setFilters] = useState("none");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedJob, setSelectedJob] = useState(1);

  // State to manage form visibility
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Function to show the form
  const openForm = () => {
    setIsFormVisible(true);
  };

  useEffect(() => {
    dispatch(loadJobs());

    if (error) {
      toast.error(error);
    } else if (jobCreated) {
      toast.success("Created Successfully !");
    } else if (jobApplied) {
      toast.success("Applied Successfully !");
    }
  }, [dispatch, error, jobApplied, jobCreated]);
  // console.log(loading);
  return (
    <>
      {loading ? (
        <div>
          {/* No Jobs Found */}
          <Loading />
        </div>
      ) : (
        <div>
          {/* <NavbarProfile /> */}
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
            <div className="postJobButtonAndWallet">
              <div className="wallet">Wallet : {user.wallet} </div>
              <div onClick={openForm} className="postJobButton">
                <div>Post a Job?</div>
              </div>
            </div>
          </div>
          <div className="profile parallel">
            <div className="left">
              {jobs &&
                jobs
                  .filter((job) => job.creator.email != user.email)
                  .filter((job) => 
                    !job.appliedUsers.some((person) => person.email === user.email)
                  )
                  .map(
                    (job, index) => {
                      // if (
                      //   (filter === "area" &&
                      //   job.creator.email !== user.email &&
                      //   user.address.area === job.jobLocation.area) ||
                      // (filter === "city" &&
                      //   job.creator.email !== user.email &&
                      //   user.address.city === job.jobLocation.city) ||
                      // (filter === "state" &&
                      //   job.creator.email !== user.email &&
                      //   user.address.state === job.jobLocation.state) ||
                      // filter === "none" && job.creator.email !== user.email
                      // )
                      //  {
                      return (
                        <JobCard
                          key={job.jobId}
                          picUrl={`https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg`}
                          name={job.creator.name}
                          address={{
                            area: job.jobLocation.area,
                            city: job.jobLocation.city,
                            state: job.jobLocation.state,
                          }}
                          jobTitle={job.title}
                          cN={
                            job.jobId === selectedJob
                              ? `borderGreen`
                              : undefined
                          }
                          onClick={() => {
                            setSelectedJob(job.jobId);
                          }}
                        />
                      );
                    }
                    // }
                  )}
            </div>
            <div className="right">
              {jobs &&
                jobs
                .filter((job) => 
                  !job.appliedUsers.some((person) => person.email === user.email)
                )
                .map((job, index) => {
                  if (job.jobId === selectedJob) {
                    return (
                      <JobDescriptionCard
                        key={job.jobId}
                        image={`https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg`}
                        title={job.title}
                        jobId={job.jobId}
                        description={job.longDesc}
                      />
                    );
                  }
                })}
            </div>
          </div>
          {isFormVisible && (
            <div className="overlay">
              <PostJobForm setIsFormVisible={setIsFormVisible} />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Profile;
