import React, { useState } from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
<div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>

    <ul className="navbar-nav mr-auto">
      <li className="nav-item ">
      <Link className="nav-link active" to="/">Home</Link>
      
        </li>
      <li className="nav-item">
        <Link  className="nav-link" to ="/about">About</Link>
      </li>
    </ul>

<div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
     <input className="form-check-input" onClick={props.toggle} type="checkbox" id="flexSwitchCheckDefault"/>
     <label className="form-check-label"  htmlFor="flexSwitchCheckDefault">Dark/Light Mode</label> 
</div>

</div>
</nav>
  )
}
