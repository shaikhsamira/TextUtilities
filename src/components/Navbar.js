 import React from 'react';
//  import propTypes from 'react';
//  import defaultProps from 'react';
//  import { Link } from 'react-router-dom';
 export default function Navbar(props) {

  return (
     <>
      <nav className={`navbar navbar-expand-lg navbar-${props.Mode} bg-${props.Mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/targetNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="targetNav">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">Home</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" href="/about">{props.aboutText}</a>
        </li> */}
      </ul>
      <li className="nav-item form-check form-switch float-right">
         <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.func}/>
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </li>
    </div>
  </div>
</nav>




     </>
   );
 }
 
//  Navbar.propTypes={
//     title:propTypes.string,
//     aboutText:propTypes.string
//  };
//  Navbar.defaultProps={
//     title:"Default Title",
//     aboutText:"Default about"
//  }