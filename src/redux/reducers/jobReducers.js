import {
  ALL_JOBS_REQUEST,
  ALL_JOBS_SUCCESS,
  ALL_JOBS_FAIL,

  JOB_APPLY_REQUEST,
  JOB_APPLY_SUCCESS,
  JOB_APPLY_FAIL,
} from "../constants/jobConsants";

export const jobReducer = (state = { job: {} }, action) => {
  switch (action.type) {

    case ALL_JOBS_REQUEST:
    case JOB_APPLY_REQUEST:
      return {
        loading: true,
        error: null,
        jobApplied:null
      }
    case JOB_APPLY_SUCCESS:
      return {
        ...state,
        loading: false,
        jobApplied: action.payload
      }
      case ALL_JOBS_SUCCESS:
        return {
          ...state,
          loading: false,
          jobs: action.payload
        }

    case ALL_JOBS_FAIL:
    case JOB_APPLY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
      default:
        return state
  }
};
