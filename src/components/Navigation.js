import React from "react";
import { Link } from "react-router-dom"
import "./Navigation.css"

function Navigation(auth) {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
      <Link to="/profile">profile</Link>
      {
        (auth.authenticated === true) ? (<Link to="/logout">Logout</Link>) : (<Link to="/login">Login</Link>)
      }
      
    </div>
  )
}

export default Navigation