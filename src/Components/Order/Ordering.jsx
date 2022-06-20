import React, { useState } from "react";
import "./order.css";
import Sidebar from "./Sidebar";
import FirstPoint from "./FirstPoint";
import PhysicalPersonDatas from "./PhysicalPersonDatas";
import JuridicalPersonDatas from "./JuridicalPersonDatas";
import SecondPoint from "./SecondPoint";
import MultiSelectOption from "./MultiSelectOption";
import MainInput from "./MainInputs";
import FileInput from "./FileInput";
import Inputs from "../Inputs";
import Footer from '../Facultets/Footer'

const Ordering = () => {
	const [physClick, setPhysClick] = useState(true);
	const [jurClick, setJurClick] = useState(false);
	const physDatas = PhysicalPersonDatas;
	const jurDatas = JuridicalPersonDatas;

	return (
		<div className="order">
			<p className="order-title">Վեբ կայքերի պատրաստում</p>
			<div className="order-form-container">
				<div className="order-sidebar-grid">
					<Sidebar
						physClicked={physClick}
						setPhysClicked={setPhysClick}
						jurClicked={jurClick}
						setJurClicked={setJurClick}
					/>
				</div>
				<div className="order-main-grid">
					<form className="form">
						<FirstPoint item={Inputs} />
						<SecondPoint clicked={physClick} setClicked={setPhysClick} />
						{physClick ? (
							<div>
								{physDatas.map((x, index) =>
									x.id == 7 ? (
										<MultiSelectOption item={x} key={index} />
									) : x.id == 6 ? (
										<FileInput item={x} key = {index}/>
									) : x.id == 10 ? (
										<FileInput item={x} key = {index} />
									) : (
										<MainInput item={x} key = {index}/>
									)
								)}
							</div>
						) : (
							<div>
								{jurDatas.map((x, index) =>
									x.id == 7 ? (
										<FileInput item={x}  key = {index}/>
									) : x.id == 11 ? (
										<FileInput item={x} key = {index} />
									) : x.id == 8 ? (
										<MultiSelectOption item={x} key={index} />
									) : (
										<MainInput item={x} key = {index}/>
									)
								)}
							</div>
						)}
						<button className="order-button">Ուղարկել</button>
					</form>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Ordering;
