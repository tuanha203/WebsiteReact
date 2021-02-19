import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoPinterest } from 'react-icons/io';
import Button from './Button';
import './Navbar.css';

function Navbar(props) {
  return (
    <nav className="Navbar">
      <div className="nav-logo">
        <Link to="/" className="nav-icon">
          <IoLogoPinterest size={32} />
          <h1>Tesla</h1>
        </Link>
      </div>
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="/profile" className="nav-link">
            Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/sign-up">
            <Button buttonSize="btn-medium" buttonStyle="btn-outline">
              Sign Up
            </Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
