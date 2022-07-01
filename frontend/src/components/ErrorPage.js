import React from 'react';
import { NavLink } from 'react-router-dom';
import page from "../image/pageNot.webp"
const ErrorPage = () => {
  return <div className='homepage'>        
                <img src={page} alt="not"/>
                <h1>Opps!!!!</h1>
                <h1>Page Not Got....</h1>
                <NavLink to="/"><u>Back to Home Page</u></NavLink>
  
  </div>;
};

export default ErrorPage;
