import React, { useState } from "react";
import { Link } from "react-router-dom";
import path0 from "./img/path0.svg";
import path1 from "./img/path1.svg";
import path2 from "./img/path2.svg";
import path4 from "./img/path4.svg";
import Header from "./Header";
import Footer from "./Footer";
import front from "./img/front.svg";
import back from "./img/back.svg";
import prog from "./img/prog.svg";
import js from "./img/js.svg";
import gamedev from "./img/gamedev.svg";
import uxui from "./img/uxui.svg";
import Select from "react-select";
import { useEffect } from "react";

function Facs_items() {
	const [courses, setCourses] = useState([]);
	const [activeCourses, setActiveCourses] = useState([]);
	const [facultets, setFacultets] = useState([]);
	let actives = [];

	useEffect(() => {
		let isMounted = true;

		if (isMounted) {
			getCourses();
			getFacultets();
		}

		return () => (isMounted = false);
	}, []);

	async function getFacultets() {
		let response = await fetch(
			"https://test.globalitc.am/kjsamcpPIBYXTvnooHTCVIyUCTCUxxrRMoK/facultet-list/"
		);
		let obj = await response.json();
		setFacultets(obj);
	}

	async function getCourses() {
		let response = await fetch(
			"https://test.globalitc.am/kjsamcpPIBYXTvnooHTCVIyUCTCUxxrRMoK/course-list/"
		);
		let obj = await response.json();
		setCourses(obj);
	}

	const facOptions = [
		{
			value: "web",
			label: "Վեբ ծրագրավորում",
		},
		{
			value: "prog",
			label: "Ծրագրավորում",
		},
		{
			value: "mult",
			label: "Մուլտիմեդիա",
		},
	];

	const [documentSize, setDocumentSize] = useState(window.screen.width);

	useEffect(
		() =>
			(window.onresize = () => {
				setDocumentSize(window.screen.width);
			})
	);

	const onFacClick = (e) => {
		let j = 0;
		for (let i = 0; i < courses.length; i++) {
			if (courses[i]?.facultet[0]?.title == e.target.name) {
				actives[j] = courses[i];
				j++;
			}
		}

		setActiveCourses(actives);
		console.log(activeCourses);
	};

	return (
		<div className="app">
			<Header />
			<div className="fac-container">
				{documentSize > 414 ? (
					<div className="facs-wrapper">
						{facultets?.map((fac, index) => (
							<div
								key={index}
								className="facs-items-web"
								onClick={onFacClick}
								name={fac?.title}
							>
								<img
									src={fac?.image}
									onClick={onFacClick}
									alt="web"
									name={fac?.title}
								/>
								<p
									className="facs-content-web"
									onClick={onFacClick}
									name={fac?.title}
								>
									<span name={fac?.title} onClick={onFacClick}>
										{fac?.title}
									</span>
									<br />
									Ֆակուլտետ
								</p>
							</div>
						))}
					</div>
				) : (
					<div className="single-container">
						<Select
							options={facOptions}
							placeholder="Ընտրել ֆակուլտետ"
							className="basic-single-select"
							classNamePrefix="custom-single-select"
						/>
					</div>
				)}

				{/* Web */}
				<div className="web-wrapper">
					{activeCourses.length != 0 ? (
						activeCourses?.map((course, index) => (
							<div className="web-items" key={index}>
								<img src={course.div_image} alt="front" />
								<div className="web-content-wrapper">
									<p className="web-content">
										<span
											className="front-span"
											style={{ color: course.title_color }}
										>
											{course.title}
										</span>
										{window.screen.width > 414 ? <br /> : " "}
									</p>
									<Link to="/ServicesApp" state={{ title: course.title }}>
										<button className="web-button">Դիմել</button>
									</Link>
								</div>
							</div>
						))
					) : (
						courses?.map((course, index) => (
							<div className="web-items" key={index}>
								<img src={course.div_image} alt="front" />
								<div className="web-content-wrapper">
									<p className="web-content">
										<span
											className="front-span"
											style={{ color: course.title_color }}
										>
											{course.title}
										</span>
										{window.screen.width > 414 ? <br /> : " "}
									</p>
									<Link to="/ServicesApp" state={{ title: course.title }}>
										<button className="web-button">Դիմել</button>
									</Link>
								</div>
							</div>
						))
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Facs_items;
