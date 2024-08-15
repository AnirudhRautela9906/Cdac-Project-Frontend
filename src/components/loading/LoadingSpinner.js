// LoadingSpinner.js
import React from 'react';
import './LoadingSpinner.css'; // Import the CSS for styling

const LoadingSpinner = () => {
  return (
    <div className="enhanced-cartoon-loader-container">
    <div className="cartoon-character">
      <div className="eyes">
        <div className="eye left-eye"></div>
        <div className="eye right-eye"></div>
      </div>
      <div className="mouth"></div>
    </div>
    <p className='loadingText'>Loading...</p>
  </div>
  );
};

export default LoadingSpinner;
