import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './landingpage.css';
// import Sidebar from '../student home page/Sidebar';
// import Header from '../student home page/Header';
// import Navbar from '../Navbar/Navbar';

function Landingpage (props) {


	return (
		<div className='landingPageContainer'>
			{/* <Navbar /> */ }
			{/* <h1>Welcome {firstName} {lastName}!</h1>
      <p>Email: {email}</p> */}
			{/* <p> "LANDING PAGE TO BE POPULATED LATER " </p> */ }
			{/* Add any other content or functionality here */ }

			<section id="contentContainer">
				<h2>Learning and teaching has never been easier.</h2>
				<p>Teachers are able to add courses and student cohorts while viewing students project based learning. Come and rediscover the joy that is learning. </p>
				{/* <button className='primary'>
					<p>Join Us</p>
					<FontAwesomeIcon icon={ faArrowRightLong } />
				</button> */}
				<button className='primary join-button'>  
					<p>Join Us</p>
					<FontAwesomeIcon icon={ faArrowRightLong } />
				</button>
				
			</section>

			<section id="imageContainer">
				<span id="center-image"></span>
			</section>
		</div>
	);
}

export default Landingpage;
