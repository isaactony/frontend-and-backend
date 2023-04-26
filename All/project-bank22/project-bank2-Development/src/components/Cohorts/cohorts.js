import React, { useEffect, useState } from 'react';
import CohortForm from '../CohortForm/cohortForm';
import './cohort.css';
import Sidebar from '../sidebar/Sidebar';

const Cohorts = () => {
  const [cohorts, setCohorts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [selectedCohortIndex, setSelectedCohortIndex] = useState(-1);

  useEffect(() => {
    fetchCohorts();
  }, []);

  const fetchCohorts = async () => {
    try {
      const res = await fetch('http://localhost:3000/cohorts');
      const data = await res.json();
      setCohorts(data);
    } catch (err) {
      alert(err);
    }
  };

  // let url = '';
  // switch (cohorts.course_id) {
  //   case '1':
  //     url = 'Android Development';
  //     break;
  //   case '2':
  //     url = 'Full-Stack Development';
  //     break;
  //   case '3':
  //     url = ';
  //     break;
  //   case 'Cybersecurity':
  //     url = 'http://127.0.0.1:3000/courses/4/projects';
  //     break;
  //   default:
  //     break;
  // }

  const handleAddCohort = (newCohort) => {
    setCohorts([...cohorts, newCohort]);
    setShowForm(false);
  };

  // const handleDeleteCohort = (cohortIndex) => {
  //   const shouldDelete = window.confirm('Are you sure you want to delete this cohort?');
  //   if (shouldDelete) {
  //     const newCohorts = [...cohorts];
  //     newCohorts.splice(cohortIndex, 1);
  //     setCohorts(newCohorts);
  //   }
  // };

  const handleDeleteCohort = (id) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this cohort?');
    // if (shouldDelete) {
    //   const cohortToDelete = cohorts[cohortIndex];
  
      // Make a DELETE request to the server to delete the cohort
      fetch(`http://localhost/3000/courses/${id}/cohorts`, {
        method: 'DELETE'
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to delete cohort');
        }
  
        // If the cohort was successfully deleted, update the state
        //const newCohorts = cohorts.filter(cohort => cohort.id !== cohortToDelete.id);
        //setCohorts(newCohorts);
      })
      .catch(error => {
        console.error(error);
        alert('Failed to delete cohort');
      });
    
  };
  

  const handleShowForm = () => {
    setSelectedCohortIndex(-1);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <Sidebar />
      <div className="cohorts">
        <section className="cohortsHead">
          <h1 className="title__cohorts">COHORTS</h1>
          <button onClick={handleShowForm} className="primary__add">
            ADD COHORT
          </button>
        </section>

        {showForm && (
          <div className="popup">
            <div className="popup-inner">
              <CohortForm
                onClose={handleCloseForm}
                onAdd={handleAddCohort}
                onUpdate={setCohorts}
                selectedCohort={cohorts[selectedCohortIndex]}
              />
            </div>
          </div>
        )}

        {cohorts.length > 0 ? (
          <table className="course__details">
            <thead>
              <tr>
                <th>NAME</th>
                <th>COURSE</th>
                <th>NUMBER OF STUDENT</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {cohorts.map((cohort, index) => (
                <tr key={index}>
                  <td>{cohort.name}</td>
                  <td>{cohort.course_id}</td>
                  <td>{cohort.number_of_students}</td>
                  <td>
                    <button className="delete-button" onClick={() => handleDeleteCohort(cohort.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1 style={{ width: '100%', textAlign: 'center', position: 'absolute' }}>No cohorts found</h1>
        )}
      </div>
    </>
  );
};

export default Cohorts;
