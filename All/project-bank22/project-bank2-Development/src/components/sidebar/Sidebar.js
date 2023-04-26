import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faBook, faBriefcase, faEnvelope, faSignInAlt, faSignOutAlt  } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
      <li className="options">
        <NavLink to="/dashboard">
          <FontAwesomeIcon icon={faChartLine} /> <span>Dashboard</span>
        </NavLink>
      </li>
      <li className="options">
        <NavLink to="/">
          <FontAwesomeIcon icon={faBook} /> <span>Courses</span>
        </NavLink>
      </li>
    <li className="options">
      <NavLink to="/projects">
        <FontAwesomeIcon icon={faBriefcase} /> <span>Projects</span>
      </NavLink>
    </li>
    <li className="options">
      <NavLink to="/contact">
        <FontAwesomeIcon icon={faEnvelope} /> <span>Messages</span>
      </NavLink>
    </li>
    <li className="auth-options">
          <NavLink to="/login">
            <FontAwesomeIcon icon={faSignInAlt} /> <span>Login</span>
          </NavLink>
        </li>
        <li className="auth-options">
          <NavLink to="/logout">
            <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span>
          </NavLink>
        </li>
        
      </ul>
    </div>

  );
};

export default Sidebar; 