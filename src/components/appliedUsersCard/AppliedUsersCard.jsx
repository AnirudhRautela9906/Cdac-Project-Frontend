import React from "react";
import "./AppliedUsersCard.scss"; // Import the CSS file
import { putApi } from "../../services/ApiConfig";
import toast from "react-hot-toast";
import Success from "../../Home_images/Success.svg"

const AppliedUsersCard = ({ assignedUser,userList, cN, jobId, status }) => {
  const onAssign = (email, jobid) => {
    putApi(`http://localhost:8080/seeker/job/assign/${email}/${jobId}`)
      .then((res) => {
        toast.success("Job Assigned Successfully !");
        window.location.reload();
      })
      .catch((error) => {
        toast.error("Job Already Assigned !");
      });
  };

  const onCompleted = (jobid) => {
    putApi(`http://localhost:8080/seeker/job/job-completed/${jobId}`)
      .then((res) => {
        toast.success("Job Completed Successfully !");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        toast.error("Job Already Completed !");
      });
  };

  const button = (email, jobid) => {
    if (status === "POSTED") {
      return (
        <div className="assign-container">
          <button
            className="assign-button"
            onClick={() => onAssign(email, jobid)}
          >
            Assign ?
          </button>
          <hr />
        </div>
      );
    // } else if (status === "ASSIGNED") {
    } else if (assignedUser.email === email && status != "COMPLETED") {
      return (
        <div className="completed-container">
          <button className="assigned-button">Assigned</button>
          <div className="message">
            Please mark the Job Completed, <br />if Job done Successfully
          </div>
          <button className="completed-button" onClick={()=>onCompleted(jobid)}>Completed ?</button>
        </div>
      );
    } else if (assignedUser.email === email) {
      return (
        <>
          <div className="message">
            Hope, you are happy from the Seeker’s Service
          </div>
          <img src={Success} alt="" className="svg"/>
        </>
      );
    }
  };
  if (userList?.length === 0) {
    return <div className="user-assign-container">No Seekers available</div>;
  }
  return (
    <div>
      {userList?.map((user, index, jobId) => (
        <div key={index} className={`user-assign-container ${cN}`}>
          <div className="user-info">
            <span className="user-name">{user.name}</span>
          </div>
          <div className="assign-button-container">
            {button(user.email, jobId)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppliedUsersCard;
