import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  // Function to open Google Form
  const openGoogleForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeOGK7MV0OOALwQqo_QWKhGJJDgGBsgn4ch7Sn4X22Me_4xbg/viewform?usp=header', '_blank');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">FBlog</Link>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/create">Create Post</Link>
        <button className="join-button" onClick={openGoogleForm}>
          Join as Trainee
        </button>
      </div>
    </nav>
  );
}

export default Navbar; 