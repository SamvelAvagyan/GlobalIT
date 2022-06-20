import React from "react";
import "./pop.css";
import { useState } from "react";

const Modal = ({ active, setActive, children }) => {
	return (
		<div
			className={active ? "modal active" : "modal"}
			onClick={() => setActive(false)}
		>
			<div className="modal-wrapper" onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};
export default Modal;
