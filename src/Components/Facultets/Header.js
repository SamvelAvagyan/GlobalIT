import React, { useState, useRef, useEffect } from "react";
import logo from "../../images/Logo.png";
import lan from "../../images/lan.png";
import bmenu from "../../images/bmenu.svg";
import bmenulanvector from "../../images/bmenuvector.svg";
import lanrus from "../../images/rus.png";
import lanusa from "../../images/usa.png";
import close from "../../images/Close.svg";
import glavni from "../../images/glavni.svg";
import logout from "../../images/Logout.svg";
import { Link } from "react-router-dom";
import Modal from "../PopUp/Modal";
import Register from "../../Registration/Register";
import "../../styles/style1.css";

function Header() {
	const [regPopIsOpen, setRegPopIsOpen] = useState(false);

	function click() {
		let a = document.getElementById("vector__header__id");

		a.classList.toggle("vector__header_rot");
	}
	const ref = useRef();
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		const checkIfClickedOutside = (e) => {
			if (isOpen && ref.current && !ref.current.contains(e.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("click", checkIfClickedOutside);

		return () => {
			document.removeEventListener("click", checkIfClickedOutside);
		};
	}, [isOpen]);

	const refLan = useRef();
	const [isLanOpen, setIsLanOpen] = useState(false);

	useEffect(() => {
		const checkIfClickedOutsideLan = (e) => {
			if (isLanOpen && refLan.current && !refLan.current.contains(e.target)) {
				setIsLanOpen(false);
			}
		};

		document.addEventListener("click", checkIfClickedOutsideLan);

		return () => {
			document.removeEventListener("click", checkIfClickedOutsideLan);
		};
	}, [isLanOpen]);

	function bgmenu() {
		document
			.getElementById("mobile__bgmenu")
			.classList.toggle("mobile__bgmenu__on");
		document
			.getElementById("mobile__menu__header1")
			.classList.toggle("mobile__menu__header__off");
		document
			.getElementById("mobile__menu__header2")
			.classList.toggle("mobile__menu__header2__on");
	}
	function bgmenu2() {
		document
			.getElementById("mobile__bgmenu")
			.classList.toggle("mobile__bgmenu__on");
		document
			.getElementById("mobile__menu__header1")
			.classList.toggle("mobile__menu__header__off");
		document
			.getElementById("mobile__menu__header2")
			.classList.toggle("mobile__menu__header2__on");
	}
	function bgmenulan() {
		document
			.querySelector(".mobile__bgmenu__lans")
			.classList.toggle("mobile__bgmenu__lans__on");
		document
			.querySelector("#mobile__bgmenu")
			.classList.toggle("mobile__bgmenu__larger");
	}
	return (
		<div>
			<header>
				<Link to="/">
					<div className="div__for__header">
						<img className="logo__header" src={logo} />
					</div>
				</Link>
				<ul className="ul__header">
					<li id="vectorli" className="ul__header_li">
						<Link to="/Facs" className="link">Ֆակուլտետներ</Link>
					</li>
					<Link to = "/Com"><li className="ul__header_li">Իրադարձություններ</li></Link>
					<Link to = "/Com"><li className="ul__header_li">Աշխատանք</li></Link>
					<li className="ul__header_li">
						<Link to="/Services" className="link">Ծառայություններ</Link>
					</li>
				</ul>

				<button id="btn1__header" className="button__header">
					Մուտք գործել
				</button>
				<button
					id="btn2__header"
					className="button__header"
					// onClick={() => setRegPopIsOpen(!regPopIsOpen)}
				>
					Գրանցվել
				</button>
				<Modal
					active={regPopIsOpen}
					setActive={setRegPopIsOpen}
					children={<Register />}
				/>
				<div ref={refLan}>
					<img
						className="language__header"
						src={lan}
						onClick={() => setIsLanOpen(!isLanOpen)}
					/>
					{isLanOpen && (
						<div className="lan-wrapper">
							<img src={lanrus} className="lan-wrapper__img"></img>
							<img src={lanusa} className="lan-wrapper__img"></img>
						</div>
					)}
				</div>
				<div className="mobile__header">
					<Link to = "/"><img src={logo} className="mobile__logo__header"></img></Link>
					<img
						onClick={bgmenu}
						src={bmenu}
						className="mobile__menu__header"
						id="mobile__menu__header1"
					></img>
					<img
						onClick={bgmenu2}
						src={close}
						className="mobile__menu__header2"
						id="mobile__menu__header2"
					></img>
				</div>
				<div className="mobile__bgmenu" id="mobile__bgmenu">
					<ul>
						<li id="mobile__bgmenu__li1">
							<Link to="/" className="link">
								Գլխավոր
							</Link>
						</li>
						<li id="mobile__bgmenu__li2">
							<Link to="/FacApp" className="link">
								Ֆակուլտետներ
							</Link>
						</li>
						<Link to = "/Com"  className="link"><li id="mobile__bgmenu__li3">Իրադարձություններ</li></Link>
						<Link to = "/Com"  className="link"><li id="mobile__bgmenu__li4">Աշխատանք</li></Link>
						<li id="mobile__bgmenu__li5">
							<Link to="/Services" className="link">
								Ծառայություններ
							</Link>
						</li>
						<li id="mobile__bgmenu__li6">Մեր մասին</li>
					</ul>
					<p id="mobile__bgmenu__p1">Մուտք </p>
					<div id="mobile__bgmenu__button1__div">
						<button id="mobile__bgmenu__button1">Գրանցվել</button>
					</div>
					<div className="mobile__bgmenu__logined">
						<div className="mobile__bgmneu__logined__div">
							<img src={glavni}></img>
							<p id="mobile__bgmneu__logined__p">Օգտատեր</p>
						</div>
						<p>Դուրս գալ</p>
					</div>
					<div className="mobile__bgmenu__lang" id="mobile__bgmenu__lang">
						<img src={lan} ></img>
						<p id="mobile__bgmenu__lan">
							Հայ
						</p>
						<img
							src={bmenulanvector}
							className="bmenulanvector"
							
						></img>
					</div>
					<div className="mobile__bgmenu__lans">
						<div
							className="mobile__bgmenu__lans__div"
							id="mobile__bgmenu__lans__div1"
						>
							<img src={lanrus}></img>
							<p id="mobile__bgmenu__lan1">Рус</p>
						</div>
						<div
							className="mobile__bgmenu__lans__div"
							id="mobile__bgmenu__lans__div2"
						>
							<img src={lanusa}></img>
							<p id="mobile__bgmenu__lan2">Eng</p>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Header;
