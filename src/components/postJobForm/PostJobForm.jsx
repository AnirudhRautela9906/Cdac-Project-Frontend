import React, { useState,useEffect } from "react";
import './PostJobForm.scss'
import { useSelector,useDispatch } from "react-redux";
import toast from 'react-hot-toast';
import { postApi } from "../../services/ApiConfig";
import { createJob, loadJobs } from "../../redux/actions/jobActions";


const PostJobForm = ({setIsFormVisible}) => {
    const {user} = useSelector(state => {return state.user});

  const dispatch = useDispatch();

    const [obj, setObj] = useState({
        title: "",
        longDesc: "",
        price:"",
        jobLocation: user.address
      });


      const onRegister = (event) => {

        event.preventDefault();
        setIsFormVisible(false)
        dispatch(createJob(obj)) 
      };

  return (
    <form onSubmit={onRegister}>
      <div className="form-group">
        <label htmlFor="job-name">Give a Title to Your Job</label>
        <input
          type="text"
          id="job-name"
          name="job-name"
          required
          onChange={(event) =>  { setObj((prev)=> ({...prev,title:event.target.value}))  } }
        />
      </div>
      <div className="form-group">
        <label htmlFor="job-desc">Job Description</label>
        <textarea
          id="job-desc"
          name="job-desc"
          required
          onChange={(event) =>  { setObj((prev)=> ({...prev,longDesc:event.target.value}))  } }
        />
      </div>
      <div className="form-group">
        <label htmlFor="coins">Price</label>
        <input
          type="text"
          id="coins"
          name="coins"
          required
          onChange={(event) =>  { setObj((prev)=> ({...prev,price:event.target.value}))  } }
        />
      </div>
      <button type="submit" >Submit</button>
    </form>
  );
};

export default PostJobForm;
