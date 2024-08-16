import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className="not-found-container">
      <div className="error-code">404</div>
      <div className="error-message">The page you're looking for doesn't exist.</div>
      <div className="error-description">
        It seems the page you were trying to reach is no longer available or never existed.
      </div>
      <Link to="/" className="home-link">
        Go Back Home
      </Link>
      <div className="background-animation"></div>
    </div>
  );
};

export default NotFoundPage;
