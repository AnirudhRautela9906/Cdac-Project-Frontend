import { configureStore } from "@reduxjs/toolkit";
import { userReducer, userDetailsReducer } from "./reducers/userReducers.js";

 const store = configureStore({
  reducer: {
    user:userReducer,
    userDetails:userDetailsReducer,
  },
},window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__);

export default store;