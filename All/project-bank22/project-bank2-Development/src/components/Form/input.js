import "./input.css";

function Input ({ id, onChangeFn, labelTxt, ...rest }) {
	return (
		<div className="input-container">
			{ labelTxt ? <label htmlFor={ `${id}` }>{ labelTxt }:</label> : '' }

			<input className="field__input"
				id={ `${id}` }
				onChange={ onChangeFn }
				// required={ required ? required : false }
				{ ...rest }
			/>
		</div>
	);
}

export default Input;
