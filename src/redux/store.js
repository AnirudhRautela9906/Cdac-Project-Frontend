import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducers.js";
import { jobReducer } from "./reducers/jobReducers.js";


 const store = configureStore({
  reducer: {
    user:userReducer,

    job:jobReducer
  },
},window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);

export default store;