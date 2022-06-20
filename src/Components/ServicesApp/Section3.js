import { React, useEffect, useState } from "react";
import Car from "./Car";
import ReactHtmlParser from "react-html-parser";

function Section3(props) {
	const [curriculums, setCurriculums] = useState([]);
	const [description, setDescription] = useState("");

	useEffect(() => {
		getCurriculums();
	}, []);

	function getCurriculums() {
		fetch(
			"https://test.globalitc.am/kjsamcpPIBYXTvnooHTCVIyUCTCUxxrRMoK/curriculum-list/"
		)
			.then((response) => response.json())
			.then((data) => setCurriculums(data));
	}

	const curBtnClick = (e) => {
		console.log(e.target.title)
		setDescription(e.target.title);
	};

	return (
		<div>
			<p className="sec3__p">Ինչ եք սովորելու</p>
			<div className="sec3__div">
				<Car course={props.course} />
			</div>

			<p className="sec3__p2">Ուսումնական ծրագիրը</p>
			<div className="sec3__div1">
				<div className="sec3__div1_div">
					{props.course.curriculum?.map((cur, index) => (
						<div
							className="sec3__div1_div_div1"
							key={index}
							onClick={curBtnClick}
							title={cur?.description}
						>
							<p className="sec3__div1_div_div1_p" onClick={curBtnClick} title={cur?.description}>
								{cur?.button_text}
							</p>
						</div>
						
					))}
				</div>
				<div className="sec3__div1_div">
					<p className="sec3__div1_div_p">Բնութագիր</p>
					{ReactHtmlParser(description) == "" ? ReactHtmlParser(props.course?.curriculum?.slice(0, 1).shift()?.description): ReactHtmlParser(description)}
				</div>
			</div>
		</div>
	);
}

export default Section3;
