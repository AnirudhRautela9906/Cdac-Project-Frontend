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

export const jobReducer = (state = { job: {} }, action) => {
  switch (action.type) {
    case ALL_JOBS_REQUEST:
      return {
        loading: true,
        error: false,
        // jobApplied: null,
      };
      case JOB_APPLY_REQUEST:
        return {
          ...state,
          loading: true,
          error: false,
          jobApplied: null,
        };
        case CREATE_JOB_REQUEST:
          return {
            ...state,
            loading: true,
            error: false,
        jobCreated: null,
      };
    case CREATE_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        jobCreated:  action.payload,
      };
    case JOB_APPLY_SUCCESS:
      return {
        ...state,
        loading: false,
        jobApplied: action.payload,
      };
    case ALL_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        jobs: action.payload,
      };

    case ALL_JOBS_FAIL:
    case JOB_APPLY_FAIL:
    case CREATE_JOB_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
