import React, { useEffect } from "react";
import './JobDescriptionCard.scss'
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from "react-redux";
import { applyJob } from "../../redux/actions/jobActions";
import { JOB_APPLY_REQUEST } from "../../redux/constants/jobConsants";

const JobDescriptionCard = ({ title, description, image, jobId }) => {

  const dispatch = useDispatch();
  const {jobApplied ,loading, error } = useSelector((state) => state.job)

    const onApply = ()=>{
      dispatch(applyJob(jobId));

      
        // putApi(`http://localhost:8080/seeker/job/apply/${jobId}`).then((res)=>{
        //     toast.success("Applied Successfully !");
        // }).catch((error)=>{
        //     console.log(error);
        //     toast.error("Already Applied !");
        // })
    }
    useEffect(()=>{
      if(error){
        toast.error("Already Applied !");
        dispatch({ type:JOB_APPLY_REQUEST })
      }
      else if(jobApplied)
        {
          toast.success("Applied Successfully !");
        dispatch({ type:JOB_APPLY_REQUEST })
        }
    },[dispatch, error, jobApplied])

  return (
    <div className="job-card-description">
      <h2 className="job-title">{title}</h2>
      <textarea
        className="job-description" value={description}
        readOnly
      />
      <div className="job-images">
        
            <div  className="job-image">
                {console.log(image)}
                <img src={image} className="img" /> 
            </div>
        
      </div>
      <div className="job-footer">
        <div className="job-coins">50 COINS</div>
        <button className="job-apply" onClick={onApply} >Apply</button>
      </div>
    </div>
  );
};

export default JobDescriptionCard;
