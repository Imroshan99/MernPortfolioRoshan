import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
    
      <NavLink className="navbar-brand" to="/"><i className="fas fa-cubes fa-2x me-3" style={{color:"#ff6219"}} ></i>R0shan iT SERViCES</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent" className="pull-right">
        <ul className="navbar-nav mr-auto mb-2 ml-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="contact">Contact</NavLink>
          </li><li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li><li className="nav-item">
            <NavLink className="nav-link" to="signup">Registration</NavLink>
          </li>
        
          
          
        </ul>
       
      </div>
    </div>
  </nav>
  )  
        
};

export default Navbar;
