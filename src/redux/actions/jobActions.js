import axios from "axios";
import {
  ALL_JOBS_REQUEST,
  ALL_JOBS_SUCCESS,
  ALL_JOBS_FAIL,

  JOB_APPLY_REQUEST,
  JOB_APPLY_SUCCESS,
  JOB_APPLY_FAIL,
} from "../constants/jobConsants";

const url = "http://localhost:8080/seeker";


//   Load all Jobs
export const loadJobs = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_JOBS_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.get(
      url + `/job`,
      config
    );
    // setJobsList(data)
    // console.log(data);
    dispatch({
      type: ALL_JOBS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ALL_JOBS_FAIL,
      payload: error
    });
  }
};


//   Apply Job
export const applyJob = (jobId) => async (dispatch) => {
  try {
    dispatch({ type: JOB_APPLY_REQUEST });

    const config = {
     
      withCredentials: true,
    };

    const { data } = await axios.put(
      url + `/job/apply/${jobId}`,
      config
    );
    // console.log(data);
    dispatch({
      type: JOB_APPLY_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: JOB_APPLY_FAIL,
      payload: error
    });
  }
};
