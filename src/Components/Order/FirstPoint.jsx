import React from "react";

const FirstPoint = (props) => {
	return (
		<div className="order-inputs-container">
			<p className="order-container-title">1․Տվյալներ</p>
			<div className="first-wrapper">
				{props.item.map((x) => (
					<input
						type={x.type}
						placeholder={x.placeholder}
						key={x.id}
						className={
							x.id == 2 ? "right-column" : x.id == 4 ? "right-column" : ""
						}
					></input>
				))}
			</div>
		</div>
	);
};

export default FirstPoint;
