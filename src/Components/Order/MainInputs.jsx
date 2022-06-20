import React from "react";

const MainInput = ( props ) => {
	return (
		<div className="order-inputs-container" key = {props.item.id}>
			<p className="order-container-title">{props.item.title}</p>
			<input type={props.item.type} placeholder={props.item.placeholder} />
		</div>
	);
};

export default MainInput;
