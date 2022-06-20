import React from "react";
import { Link } from "react-router-dom";
import bgi from "./images/bgi1.svg";

function Section1(props) {
	let course = props.course;

	return (
		<div>
			<div className="sec1">
				<div className="sec1__div1">
					<p className="sec1__div1_p1">{course?.title}</p>
					<p className="sec1__div1_p2">
						{course?.description}
					</p>
					<Link to="/Courses" state={{title: course?.title}}>
						<button className="sec1__div1__btn">Գրանցվել</button>
					</Link>
				</div>
				<img src={course?.header_image}></img>
			</div>
			<section className="mobile__sec1">
				<div className="mobile__sec1__div1">
					<p className="movile__sec1__div1_p1">{course?.title}</p>
					<img src={course?.header_image}></img>
					<p className="mobile__sec1__div1_p2">
						{course?.description}
					</p>
					<Link to = "/Courses" state={{title: course?.title}}>
						<button className="mobile__sec1__div1__btn">Գրանցվել</button>
					</Link>
				</div>
			</section>
		</div>
	);
}

export default Section1;
