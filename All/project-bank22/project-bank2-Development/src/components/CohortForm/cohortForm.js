import React, { useState } from 'react';
import './cohortForm.css';
import Input from '../Form/input';

const CohortForm = (props) => {
	const [name, setName] = useState('');
	const [course, setCourse] = useState('');
	const [number_of_students, setNumberOfStudents] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		const newCohort = { name, number_of_students };

		// fetch POST request based on the selected course
		let url = '';
		switch (course) {
			case 'Android Development':
				url = 'http://127.0.0.1:3000/courses/1/cohorts';
				break;
			case 'Full-Stack Development':
				url = 'http://127.0.0.1:3000/courses/2/cohorts';
				break;
			case 'Data Science':
				url = 'http://127.0.0.1:3000/courses/3/cohorts';
				break;
			case 'Cybersecurity':
				url = 'http://127.0.0.1:3000/courses/4/cohorts';
				break;
			default:
				break;
		}

		if (url !== '') {
			fetch(url, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(newCohort)
			})
				.then((response) => response.json())
				.then((data) => {
					props.onAdd(data);
					props.onClose();
				})
				.catch((error) => console.log(error));
		}
	};

	const handleCancel = () => {
		props.onClose();
	};

	return (
		<>
			<h2 className='add__title'>ADD COHORT</h2>
			<div className='cohort__form'>
				<form onSubmit={handleSubmit} className='cohort-form'>
					<Input
						className='name__text'
						labelTxt={'Name'}
						id='name'
						type={'text'}
						onChangeFn={(event) => setName(event.target.value)}
						value={name}
						required={true}
					/>
					<br />
					<label className='courses__label'>
						<select
							value={course}
							onChange={(e) => setCourse(e.target.value)}
							required
							className='select-course'
						>
							<option value=''>SELECT A COURSE</option>
							<option value='Android Development'>Android Development</option>
							<option value='Full-Stack Development'>Full-Stack Development</option>
							<option value='Data Science'>Data Science</option>
							<option value='Cybersecurity'>Cybersecurity</option>
						</select>
					</label>
					<br />
					<Input
						className='input__details'
						labelTxt={'Number Of Students'}
						id='number'
						type={'number'}
						onChangeFn={(event) => setNumberOfStudents(event.target.value)}
						value={number_of_students}
						required={true}
					/>
					<br />
					<button type='submit' className='cohortButton__submit'>
						Submit
					</button>
				

				<button type="button" onClick={ handleCancel } className='cohortButton__cancel'>Cancel</button>
				<br />
			</form>
		</div>
		</>
		
	);
};

export default CohortForm;
