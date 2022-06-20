import React from "react";
import gif1 from "../images/gif5.gif";
import gif2 from "../images/gif3.gif";
import gif3 from "../images/gif1.gif";
import gif4 from "../images/gif4.gif";
import gif5 from "../images/gif2.gif";
import gif6 from "../images/gif6.gif";
import gif7 from "../images/gif7.gif";
import gif8 from "../images/gif8.gif";
import gif9 from "../images/gif9.gif";
import gif10 from "../images/gif10.gif";
import gif11 from "../images/gif11.gif";
import gif12 from "../images/gif12.gif";
import gif13 from "../images/gif13.gif";
import gif14 from "../images/gif14.gif";
import gif15 from "../images/gif15.gif";
import gif16 from "../images/gif16.gif";
import gif17 from "../images/gif17.gif";
import gif18 from "../images/gif18.gif";
import gif19 from "../images/gif19.gif";
import gif20 from "../images/gif20.gif";
import gif21 from "../images/gif21.gif";
import Footer from "../Components/Facultets/Footer";
import Header from "../Components/Facultets/Header";
import "./services.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Service() {
	const [services, setServices] = useState([]);

	useEffect(() => {
		getServices();
	}, []);

	async function getServices() {
		let response = await fetch(
			"https://testapi.globalitc.am/kjsamcpPIBYXTvnooHTCVIyUCTCUxxrRMoK/service-list/"
		);
		let obj = await response.json();
		setServices(obj);
	}

	return (
		<div>
			<Header />
			<section className="lessons__div">
				<p className="div_p">Ծառայություններ</p>
				{services?.map((service, index) => (
					<div className="lesson" key={index}>
						<img
							id="lesson__gif_id1"
							className="lesson__gif"
							src={service.div_image}
						></img>
						<div className="lesson__smoll">
							<p id="lesson__p_id1" className="lesson__p">
								{service.title}
							</p>
							<Link to="/FacApp" state={{ title: service.title }}>
								<button id="lesson__p_btn_id" className="lesson__btn">
									Պատվիրել
								</button>
							</Link>
						</div>
					</div>
				))}
			</section>
			<Footer />
		</div>
	);
}

export default Service;
