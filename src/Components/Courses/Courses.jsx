import { React, useState } from "react";
import SingleSelectOption from "./SingleSelectOption";
import "./courses.css";
import CoursesInputs from "./CoursesInputs";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Courses = () => {
	const location = useLocation({});
	const { title } = location.state;
	const [student, setStudent] = useState({});

	console.log(title);
	const onSubmit = (e) => {
		e.preventDefault();
		e.target.reset();
		fetch(
			"https://test.globalitc.am/kjsamcpPIBYXTvnooHTCVIyUCTCUxxrRMoK/register-to-course-list/",
			{
				method: "POST",
				body: JSON.stringify(student),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
	};

	return (
		<div className="courses-container">
			<p className="form-title">Գրանցվել դասընթացին</p>
			<form onSubmit={onSubmit}>
				<CoursesInputs student={student} setStudent={setStudent} courseTitle={title}/>
				<SingleSelectOption student={student} setStudent={setStudent} courseTitle={title}/>
				<button className="form-button">Գրանցվել</button>
			</form>
		</div>
	);
};

export default Courses;
