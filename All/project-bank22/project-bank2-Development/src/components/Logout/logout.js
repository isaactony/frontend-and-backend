import React from "react";
import "./logout.css"; // Import CSS file for styling
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";




const LogoutForm = () => {
  const navigate = useNavigate();

  function handleLogout() {

    fetch("http://localhost:3000/logout/", {
      method: 'DELETE'
    })
      .then(response => {
        console.log(response)
        if (response.status === 204){
          alert("Logged out successfully")
          console.log(response.status)
          navigate('/')

          // perform any necessary cleanup here
        } else {
          alert("error logging out")
          // handle the error case here
        }
      })
      .catch(error => {
        console.error('Error logging out:', error);
        // handle the error case here
      });
  }
  return (
    <div className="logout-form-container">
      
      <div className="form-container">
        <h2 className="goingout">Logout</h2>
        <form onSubmit={handleLogout} className="logout-form">
          <p className="paragraph">Are you sure you want to logout?</p>
         <button onClick={handleLogout} className="btnn__logout" type="submit">Logout</button> 
        </form>
      </div>
    </div>
  );
};

export default LogoutForm;
