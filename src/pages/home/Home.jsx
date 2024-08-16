import React, { useEffect } from 'react'
import './Home.scss'
import jobPoster from '../../Home_images/jobPoster.png'
import jobSeeker from '../../Home_images/jobSeeker.png'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar.jsx'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loading from "../../components/loading/LoadingSpinner.js"
const Home = () => {
  const nav = useNavigate();
   const {isAuthenticated,loading} = useSelector(state => state.user);
   useEffect(() => {
    if (isAuthenticated) {
      nav("/profile");
    }
    // if(loading){
    //   loading=!loading
    // }
    else if(!isAuthenticated)
      nav('/')
  }, [isAuthenticated, nav]);
   
    
  return (
    <>
    {  loading ? <div>
      {/* No Jobs Found */}
      <Loading/>
     </div> :
     <>
    <hr />
    <p className='p1'>Why to worry when a Seeker is Ready !!</p>
    
    <div className='home parallel'>  
        <div className='box1' onClick={()=>{nav("/Login")}}>
          <button className='box'>
            <img src={jobPoster} alt="jobPoster"/>
            <div className="special-paragraph1" >Want your job done?</div>
          </button>
        </div>
          
        
        <div className="box1" onClick={()=>{nav("/Login")}}>
          <button className='box'>
            <img src={jobSeeker} alt="jobSeeker"/>
            <div className="special-paragraph2">Want to earn by doing a job?</div>
          </button>
        </div>
          
        
    </div>  
    
    <Footer />
    </>
}
    </>
  )
}

export default Home