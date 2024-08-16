import axios from "axios";
import {
  ALL_JOBS_REQUEST,
  ALL_JOBS_SUCCESS,
  ALL_JOBS_FAIL,

  CREATE_JOB_REQUEST,
  CREATE_JOB_SUCCESS,
  CREATE_JOB_FAIL,

  JOB_APPLY_REQUEST,
  JOB_APPLY_SUCCESS,
  JOB_APPLY_FAIL,

  ASSIGNED_USER_REQUEST,
  ASSIGNED_USER_SUCCESS,
  ASSIGNED_USER_FAIL,

  JOB_COMPLETED_REQUEST,
  JOB_COMPLETED_SUCCESS,
  JOB_COMPLETED_FAIL,

} from "../constants/jobConsants";

const url = "http://localhost:8080/seeker/job";


//   Load all Jobs
export const loadJobs = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_JOBS_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.get(
      url ,
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
      payload: error.response.data.message
    });
  }
};


//   Create
export const createJob = (body) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_JOB_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.post(
      url + `/create`,
      body,
      config
    );
    // setJobsList(data)
    // console.log(data);
    dispatch({
      type: CREATE_JOB_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: CREATE_JOB_FAIL,
      payload: error.response.data.message
    });
  }
};

//   Apply Job
export const applyJob = (jobId,body) => async (dispatch) => {
  try {
    dispatch({ type: JOB_APPLY_REQUEST });

    const config = {
     
      withCredentials: true,
    };

    const { data } = await axios.put(
      url + `/apply/${jobId}`,
      body,
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
      payload: error.response.data.message
    });
  }
};


//   Assign Job
export const assignJob = (email, jobId, body) => async (dispatch) => {
  try {
    dispatch({ type: ASSIGNED_USER_REQUEST });

    const config = {
     
      withCredentials: true,
    };

    const { data } = await axios.put(
      url + `/apply/${email}/${jobId}`,
      body,
      config
    );
    // console.log(data);
    dispatch({
      type: ASSIGNED_USER_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: ASSIGNED_USER_FAIL,
      payload: error.response.data.message
    });
  }
}


//    Job Completed
export const jobCompleted = (email, jobId, body) => async (dispatch) => {
  try {
    dispatch({ type: JOB_COMPLETED_REQUEST });

    const config = {
     
      withCredentials: true,
    };

    const { data } = await axios.put(
      url + `/apply/${email}/${jobId}`,
      body,
      config
    );
    // console.log(data);
    dispatch({
      type: JOB_COMPLETED_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: JOB_COMPLETED_FAIL,
      payload: error.response.data.message
    });
  }
}