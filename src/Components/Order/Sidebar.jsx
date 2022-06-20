import React from "react";

const Sidebar = ({
	physClicked,
	setPhysClicked,
	jurClicked,
	setJurClicked,
}) => {
	const physClickState = () => {
		setPhysClicked(true);
		setJurClicked(false);
	};

	const jurClickState = () => {
		setPhysClicked(false);
		setJurClicked(true);
	};
	return (
		<div className="order-sidebar">
			<p className="order-container-title">Դիմել որպես՝</p>
			<button
				className="order-sidebar-buttons"
				style={{
					backgroundColor: physClicked ? "#AD00FF" : "#747474",
					transition: 0.5 + "s",
				}}
				onClick={physClickState}
			>
				Ֆիզիկական անձ
			</button>
			<button
				className="order-sidebar-buttons"
				style={{
					backgroundColor: jurClicked ? "#AD00FF" : "#747474",
					transition: 0.5 + "s",
				}}
				onClick={jurClickState}
			>
				Իրավաբանական անձ
			</button>
		</div>
	);
};

export default Sidebar;
