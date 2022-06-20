import React from "react";
import Select from 'react-select';

const options = [
	{
		value: "ru",
		label: "Русский",
	},
	{
		value: "en",
		label: "English",
	},
	{
		value: "arm",
		label: "Հայերեն",
	},
];
const MultiSelectOption = ( props ) => {
	return (
		<div className="order-inputs-container" key={props.item.id}>
			<p className="order-container-title">{props.item.title}</p>
			<div className="select-container">
				<Select
					isMulti
					name="options"
					options={options}
					className="basic-multi-select"
					classNamePrefix="custom-select"
					placeholder="Լեզու"
				/>
			</div>
		</div>
	);
};

export default MultiSelectOption