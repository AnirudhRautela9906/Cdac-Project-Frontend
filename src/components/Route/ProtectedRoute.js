import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from "react-redux";
// import Loader from '../layout/Loader/Loader';
const ProtectedRoute = () => {
  const {  isAuthenticated,loading } = useSelector((state) => state.user);

 
  return(
    <>
      {
        
        ((isAuthenticated === true && <Outlet/>) ||  (isAuthenticated === false &&   <Navigate to="/" />))
      }
    </>
  )
};
  

export default ProtectedRoute;