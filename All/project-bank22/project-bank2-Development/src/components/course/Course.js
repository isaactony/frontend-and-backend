import React from 'react'
import { Link } from 'react-router-dom'
import './Course.css'
function Course() {
  return (
    <>
        <h1 className='title__lec'> Courses</h1>
        <div className='course'>
       {/* <div><h1>Courses</h1></div>  */}
       <Link to="/projects">
            <div className='stack'>
                    <img className='pictures' src='https://crampete-staticfiles.s3.ap-south-1.amazonaws.com/images/blog/full-stack-development-project.png' alt='fullstack'/>
                    <span className='course_name'> Full-stack Development</span>
                </div>
       </Link>
        
        <div className='stack'>
            <img className='pictures' src='https://codersera.com/blog/wp-content/uploads/2021/08/Data-Science-project-ideas-.jpeg' alt='data science'/>
            <span className='course_name'> Data Science</span>
        </div>
        <div className='stack'>
            <img className='pictures' src='https://cdn.hackr.io/uploads/posts/large/1597418704Ko2SSJxhVk.png' alt='mobilee project'/>
            <span className='course_name'> Android Development</span>
        </div>
        <div className='stack'>
            <img className='pictures' src='https://www.itu.int/en/ITU-D/Cybersecurity/PublishingImages/Projects.jpg' alt='Cyber security'/>
            <span className='course_name'> Cyber Security</span>
        </div>
        <div className='stack'>
            <img className='pictures' src='https://fjwp.s3.amazonaws.com/blog/wp-content/uploads/2020/05/07184138/DevOps-1024x512.png' alt='Cyber security'/>
            <span className='course_name'> Devops Development</span>
        </div>
        <div className='stack'>
            <img className='pictures' src='https://i.ytimg.com/vi/ewJgxHQo0TU/maxresdefault.jpg' alt='Cyber security'/>
            <span className='course_name'> UI UX Design</span>
        </div>

    </div>
    </>
    
  )
}

export default Course