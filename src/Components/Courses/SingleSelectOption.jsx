import React from "react";
import Select from "react-select";

const SingleSelectOption = ({student, setStudent, courseTitle}) => {
	const selectPlaceholders = [
	{ 
		title: "place",
        placeholder: "Դասընթացի անցկացման վայրը", 
        id: 1 
    },
	{ 
		title: "language",
        placeholder: "Դասընթացի անցկացման լեզուն", 
        id: 2 
    },
	{ 
		title: "option",
        placeholder: "Դասընթացի անցկացման տարբերակը", 
        id: 3 
    },
	];
	const firstOptions = [
		{
			value: "erevan",
			label: "Երևան",
		},
		{
			value: "marzer",
			label: "Մարզերում",
		},
		{
			value: "mijazgayin",
			label: "Միջազգային",
		},
	];
	const secondOptions = [
		{
			value: "arm",
			label: "Հայերեն",
		},
		{
			value: "ru",
			label: "Русский",
		},
		{
			value: "en",
			label: "English",
		},
	];
	const thirdOptions = [
		{
			value: "single",
			label: "Անհատական",
		},
		{
			value: "squad",
			label: "Խմբային",
		},
	];

	const handleSelectChange = (e, action) =>{
		setStudent({
			...student, [action.name]: e.label, course: courseTitle
		})
	}

	return (
		<div className="select-single-container">
			{selectPlaceholders.map((x, index) => (
				<Select
					options={
						x.id == 1 ? firstOptions : x.id == 2 ? secondOptions : thirdOptions
					}
					placeholder={x.placeholder}
					className="basic-single-select"
					classNamePrefix="custom-single-select"
                    key = {index}
					name = {x.title}
					onChange={handleSelectChange}
				/>
			))}
		</div>
	);
};

export default SingleSelectOption;
