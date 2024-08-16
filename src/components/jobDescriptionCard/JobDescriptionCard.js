import React, { useEffect } from "react";
import './JobDescriptionCard.scss'
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from "react-redux";
import { applyJob, loadJobs } from "../../redux/actions/jobActions";
import { JOB_APPLY_REQUEST } from "../../redux/constants/jobConsants";

const JobDescriptionCard = ({title, description, image, jobId, url , status, price }) => {

  const dispatch = useDispatch();

    const onApply = ()=>{
      dispatch(applyJob(jobId));
    }

  return (
    <div className="job-card-description">
    <h2 className="job-title">{title}</h2>
    <label htmlFor="job-description" className="job-desc">Description and Instructions</label>
    <textarea name="job-description"
      className="job-description" value={description}
      readonly
    ></textarea>
    <div className="job-images">
          <div  className="job-image">
              <img src={image} className="img" /> 
          </div>
    </div>
    <div className="job-footer">
      <div className="job-coins">{price} Coins</div>
      {url === '/profile/jobsPosted' ? <div className="job-apply">{status}</div> : <div className="job-apply" onClick={onApply} >Apply</div>}
    </div>
  </div>
  );
};

export default JobDescriptionCard;
