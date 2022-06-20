import React, { useEffect, memo, useLayoutEffect } from "react";
import img1 from "../images/illustration 1.png";
import img2 from "../images/Illustration 2.png";
import img3 from "../images/undraw_education_f8ru 1.png";
import img4 from "../images/path0.png";
import img5 from "../images/path1.png";
import img6 from "../images/path2.png";
import img7 from "../images/Vector1.png";
import img8 from "../images/Vector2.png";
import img9 from "../images/Vector3.png";
import img10 from "../images/path3.png";
import img11 from "../images/path4.png";
import img12 from "../images/path5.png";
import img13 from "../images/svgg.png";
import img14 from "../images/svgg (1).png";
import img15 from "../images/svgg (2).png";
import img16 from "../images/path6.png";
import img17 from "../images/path7.png";
import img18 from "../images/path8.png";
import img19 from "../images/gif1.gif";
import img20 from "../images/gif2.gif";
import img21 from "../images/gif3.gif";
import img22 from "../images/gif4.gif";
import img23 from "../images/gif5.gif";
import img24 from "../images/gif6.gif";
import img25 from "../images/taki.png";
import bgi from "../images/bgi.png";
import call from "../images/call.png";
import { useState } from "react";
import Modal from "../Components/PopUp/Modal";
import Button from "../UI/Button";
import CallPopUp from "../Components/PopUp/CallPopUp";
import "../styles/style1.css";
import Header from "../Components/Facultets/Header";
import Footer from "../Components/Facultets/Footer";
import Register from "../Registration/Register";
import "../styles/header-footer.css";
import axios from "axios";
import { Link } from "react-router-dom";

function HomePage() {
	const [callPopIsOpen, setCallPopIsOpen] = useState(false);
	const [activeHeader, setActiveHeader] = useState({});
	const [facultets, setFacultets] = useState([]);
	const [services, setServices] = useState([]);
	const [email, setEmail] = useState("");

	useLayoutEffect(() => {
		let isMounted = true;

		if (isMounted) {
			getFacultets();
			getActiveHeader();
			getServices();
		}

		return () => {
			isMounted = false;
		};
	}, []);

	async function getActiveHeader() {
		let response = await fetch(
			"https://test.globalitc.am/kjsamcpPIBYXTvnooHTCVIyUCTCUxxrRMoK/header-list/"
		 , {
			headers : { 
			  'Content-Type': 'application/json',
			  'Accept': 'application/json'
			 }
	  
		  }) ;
		let obj = await response.json();
		for (let i = 0; i < obj.length; i++) {
			if (!obj[i].draft) {
				setActiveHeader(obj[i]);
				break;
			}
		}
	}

	async function getFacultets() {
		let response = await fetch(
			"https://test.globalitc.am/kjsamcpPIBYXTvnooHTCVIyUCTCUxxrRMoK/facultet-list/"
		, {
			headers : { 
			  'Content-Type': 'application/json',
			  'Accept': 'application/json'
			 }
	  
		  });
		let obj = await response.json();
		setFacultets(obj);
	}

	async function getServices() {
		let response = await fetch(
			"https://test.globalitc.am/kjsamcpPIBYXTvnooHTCVIyUCTCUxxrRMoK/service-list/"
		, {
			headers : { 
			  'Content-Type': 'application/json',
			  'Accept': 'application/json'
			 }
	  
		  });
		let obj = await response.json();
		setServices(obj);
	}

	async function subscribeButtonClick() {
		setEmail("");
		let data = { email: email };
		await fetch(
			"https://test.globalitc.am/kjsamcpPIBYXTvnooHTCVIyUCTCUxxrRMoK/subscribes-list/",
			{
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
	}

	const handleEmailAddresses = (e) => {
		setEmail(e.target.value);
	};

	return (
		<div>
			<img
				className="call"
				src={call}
				onClick={() => setCallPopIsOpen(!callPopIsOpen)}
			/>
			<Modal
				active={callPopIsOpen}
				setActive={setCallPopIsOpen}
				children={<CallPopUp />}
			/>
			<Header />
			<section className="section1">
				<div className="section-container">
					<div className="content-box">
						<p className="content-box__title">{activeHeader?.title}</p>
						<Link to="/Facs">
							<button className="content-box__button">
								Մասնագիտություններ
							</button>
						</Link>
					</div>
					<div className="image-box">
						<img
							src={activeHeader?.header_image}
							className="image-box__image"
						/>
					</div>
				</div>
			</section>
			<section className="section2">
				<p className="section2__p1">Ինչու մենք</p>

				<div className="section2__div">
					<div id="hover1" className="section2__div_1">
						<div className="section2__div_1_div">
							<img src={img1} id="profmot"></img>
							<p className="section2__div_1_div_p1" id="profmottxt1">
								Պրոֆեսիոնալ մոտեցում
							</p>
							<p id="p1" className="section2__div_1_div_p2">
								Մեր մասնագետները ամեն ինչ կանեն որ ձեզ ապահովեն բարձորակ
								կրթությամբ և ծառայություններով։ Երկար տարիների փորձը և բարձորակ
								աշխատանքային մոտեցումը կտա իր արդյունքը։
							</p>
						</div>
					</div>
					<div id="hover2" className="section2__div_1">
						<div className="section2__div_1_div">
							<img src={img2} id="profmot2"></img>
							<p className="section2__div_1_div_p1" id="profmottxt2">
								Որակյալ աշխտանք
							</p>
							<p id="p2" className="section2__div_1_div_p2">
								Մեր պրոֆեսիոնալ աշխատակազմը երաշխավորում է բարձրորակ
								ծառայությունների մատուցում։ Եթե դուք վստահելեք ձեր աշխատանքը մեր
								թիմին ապա կարող եք վստահ լինել որ արդյունքը ձեզ կհոգանցի։
							</p>
						</div>
					</div>
					<div id="hover3" className="section2__div_1">
						<div className="section2__div_1_div">
							<img src={img3} id="profmot3"></img>
							<p className="section2__div_1_div_p1" id="profmottxt3">
								Բարձրորակ կրթություն
							</p>
							<p id="p3" className="section2__div_1_div_p2">
								Մեր մասնագետները ամեն ինչ կանեն, որ ձեզ ապահովեն բարձրորակ
								կրթությամբ և ծառայություններով: Երկար տարիների փորձը և բարձրորակ
								աշխատանքային մոտեցումը կտա իր արդյունքը:
							</p>
						</div>
					</div>
				</div>
			</section>
			<section id="section3" className="section2">
				<p className="section2__p1">ֆակուլտետներ</p>
				<div className="section2__div">
					{facultets?.map((facultet, index) => (
						<Link to="/Facs" className="link">
							<div
								id="section2__hover1"
								className="section2__div_2"
								key={index}
							>
								<img
									id="section2__div_1_img1"
									src={facultet?.image}
									className="section2__div_1_img"
								></img>
								<img
									id="section2__div_1_img1_1"
									src={facultet?.hover_image}
									className="section2__div_1_1img"
								></img>
								<p
									id="section2__div_2_div_txt1"
									className="section2__div_2_div_p1"
								>
									{facultet?.title}
									<br />
									<span>Ֆակուլտետ</span>
								</p>
								<ul className="fak11">
									{facultet?.learning_topics.map((topic, index) => (
										<li key={index}>{topic?.title}</li>
									))}
								</ul>

								<img src={img7} className="section2__div_1_img2"></img>
							</div>
						</Link>
					))}
				</div>
			</section>
			<section id="section3" className="section2">
				<p className="section2__p1">Թոփ դասընթացներ</p>
				<div className="section2__div">
					<div className="section2__div_3">
						<p className="section2__div_3_div_p1">
							Դպրոցականների
							<br />
							համար
						</p>
						<img src={img10} className="section2__div_3_img"></img>
						<img src={img16} className="section2__div_3_1img"></img>
					</div>

					<div className="section2__div_3">
						<p className="section2__div_3_div_p1">
							Քոլեջների ուսանողների
							<br />
							համար
						</p>
						<img src={img11} className="section2__div_3_img"></img>
						<img src={img17} className="section2__div_3_1img" id="pixel1"></img>
					</div>

					<div className="section2__div_3">
						<p className="section2__div_3_div_p1">
							Բուհերի ուսանողների
							<br />
							համար
						</p>
						<img src={img12} className="section2__div_3_img"></img>
						<img src={img18} className="section2__div_3_1img"></img>
					</div>
				</div>
			</section>
			<section id="section4" className="section3">
				<p className="section2__p1">Ծառայություններ</p>
				<div className="section2__div">
					{services?.map((service, index) => (
						<div className="section2__div_4" key={index}>
							<img src={service.div_image} className="gifer" />
							<div className="section2__div_4_div">
								<p
									className="section2__div_4_div_p1"
									style={{ textAlign: "left" }}
								>
									{service.title}
								</p>
								<Link to="/FacApp" state={{ title: service.title }}>
									<button className="section2__div_4_div_button">
										Պատվիրել
									</button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</section>
			<div className="takibuttonidiv">
				<button className="takibutton">Իմանալ ավելին</button>
			</div>
			<section id="section5" className="section4">
				<div className="section4__div">
					<img src={img25} className="section4__img"></img>
				</div>
				<div className="section4__div_div">
					<p>Բաժանորդագրվել</p>
					<form onSubmit={subscribeButtonClick}>
						<input
							type="email"
							placeholder="Էլ․փոստ"
							onChange={handleEmailAddresses}
						/>
						<button className="button-subscribe">Բաժանորդագրվել</button>
					</form>
				</div>
			</section>

			<section className="mobile__section1">
				<div className="mobile__section1__div">
					<p>Սկսիր քո կարիերան IT ոլորտում</p>
					<img src={bgi}></img>
					<button>Մասնագիտություններ</button>
				</div>
			</section>
			<section className="mobile__section2">
				<p className="mobile__secname">Ինչու մենք</p>
				<img
					className="call"
					src={call}
					onClick={() => setCallPopIsOpen(!callPopIsOpen)}
				></img>

				<div className="mobile__section__overflow">
					<div className="mobile__section__div" id="mobile__section2__div_1">
						<div className="mobile__swipedivhome__center">
							<img src={img1} className="mobile__section2__img"></img>
							<p className="mobile__section2__div__p1">Պրոֆեսիոնալ մոտեցում</p>
							<p className="mobile__section2__div__p2">
								Մեր մասնագետները ամեն ինչ կանեն որ ձեզ ապահովեն բարձորակ
								կրթությամբ և ծառայություններով։ Երկար տարիների փորձը և բարձորակ
								աշխատանքային մոտեցումը կտա իր արդյունքը։
							</p>
						</div>
					</div>
					<div className="mobile__section__div" id="mobile__section2__div">
						<div className="mobile__swipedivhome__center">
							<img src={img2} className="mobile__section2__img"></img>
							<p className="mobile__section2__div__p1">Որակյալ աշխտանք</p>
							<p className="mobile__section2__div__p2">
								Մեր պրոֆեսիոնալ աշխատակազմը երաշխավորում է բարձրորակ
								ծառայությունների մատուցում։ Եթե դուք վստահելեք ձեր աշխատանքը մեր
								թիմինապա կարող եք վստահ լինել որ արդյունքը ձեզ կհոգանցի։
							</p>
						</div>
					</div>
					<div className="mobile__section__div" id="mobile__section2__div">
						<div className="mobile__swipedivhome__center">
							<img
								src={img3}
								className="mobile__section2__img"
								id="mobile__section2__img3"
							></img>
							<p className="mobile__section2__div__p1">Բարձրորակ կրթություն</p>
							<p className="mobile__section2__div__p2">
								Մեր մասնագետները ամեն ինչ կանեն, որ ձեզ ապահովեն բարձրորակ
								կրթությամբ և ծառայություններով: Երկար տարիների փորձը և բարձրորակ
								աշխատանքային մոտեցումը կտա իր արդյունքը:
							</p>
						</div>
					</div>
				</div>
			</section>
			<section className="mobile__section3">
				<p className="mobile__secname">ֆակուլտետներ</p>
				<div className="mobile__section__overflow">
					{facultets?.map((facultet, index) => (
						<div id="section2__hover1" className="section2__div_2" key={index}>
							<img
								id="section2__div_1_img1"
								src={facultet?.image}
								className="section2__div_1_img"
							></img>
							<img
								id="section2__div_1_img1_1"
								src={facultet?.hover_image}
								className="section2__div_1_1img"
							></img>
							<p
								id="section2__div_2_div_txt1"
								className="section2__div_2_div_p1"
							>
								{facultet?.title}
								<br />
								<span>Ֆակուլտետ</span>
							</p>
							<ul className="fak11">
								{facultet?.learning_topics.map((topic, index) => (
									<li key={index}>{topic?.title}</li>
								))}
							</ul>

							<img src={img7} className="section2__div_1_img2"></img>
						</div>
					))}
				</div>
			</section>
			<section className="mobile__section4">
				<p className="mobile__secname">Թոփ դասընթացներ</p>
				<div className="mobile__section__overflow">
					<div className="mobile__section__div" id="mobile__section4__div_1">
						<div className="mobile__swipediv3__center">
							<p className="mobile__section4__div__p1">
								Դպրոցականների
								<br />
								համար
							</p>
							<img src={img10} className="mobile__section4__div__img"></img>
						</div>
					</div>
					<div className="mobile__section__div">
						<div className="mobile__swipediv3__center">
							<p className="mobile__section4__div__p1">
								Քոլեջների ուսանողների
								<br />
								համար
							</p>
							<img src={img11} className="mobile__section4__div__img"></img>
						</div>
					</div>
					<div className="mobile__section__div">
						<div className="mobile__swipediv3__center">
							<p className="mobile__section4__div__p1">
								Բուհերի ուսանողների
								<br />
								համար
							</p>
							<img
								src={img12}
								className="mobile__section4__div__img"
								id="mobile__section4__div__img3"
							></img>
						</div>
					</div>
				</div>
			</section>
			<section className="mobile__section5">
				<p className="mobile__secname">Ծառայություններ</p>
				{services?.map((service, index) => (
					<div className="section2__div_4" key={index}>
						<img src={service.div_image} className="gifer" />
						<div className="section2__div_4_div">
							<p
								className="section2__div_4_div_p1"
								style={{ textAlign: "left" }}
							>
								{service.title}
							</p>
							<Link to="/FacApp" state={{ title: service.title }}>
								<button className="section2__div_4_div_button">Պատվիրել</button>
							</Link>
						</div>
					</div>
				))}
			</section>
			<button className="mobile__more">Իմանալ ավելին</button>
			<section className="mobile__section6">
				<p className="mobile__secname">Բաժանորդագրվել</p>
				<img src={img25}></img>
				<form>
					<input type="email" placeholder="Էլ․փոստ" />
				</form>
				<button>Բաժանորդագրվել</button>
			</section>
			<Footer />
		</div>
	);
}

export default memo(HomePage);
