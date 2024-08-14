import React from 'react'
import './style.scss'
const JobCard = ({picUrl,name,address,jobTitle}) => {
  return (
    <>
        <div className="job-card">
            <div className="firstBox">
                <img src={picUrl} alt="" />
                <div className="firstBoxDetails">
                    <div>{name}</div>
                    <div>
                        <span>{`${address.area}, `}</span>
                        <span>{`${address.city}, `}</span>
                        <span>{`${address.state} `}</span>
                    </div>
                   
                </div>
            </div>
            <div className="secondBox">
                <p>{jobTitle}</p>
            </div>
        </div>
    </>
  )
}

export default JobCard