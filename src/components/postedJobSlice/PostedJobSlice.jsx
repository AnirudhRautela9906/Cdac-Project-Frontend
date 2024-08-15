import React from 'react'
import './PostedJobSlice.scss'
const PostedJobSlice = ({title,cN, onClick}) => {
  return (
    <div className={`${cN} pjs`} onClick={onClick}>{title}</div>
  )
}

export default PostedJobSlice