import React from "react";

export default function FileInput(props) {
	return (
		<div className="order-inputs-container" key={props.item.index}>
			<p className="order-container-title">{props.item.title}</p>
			<div className="wrapper">
				<input type={props.item.type} placeholder={props.item.placeholder} />
				<label htmlFor="file">Կցել ֆայլ</label>
				<input type="file" className="custom-file-uploader" id="file" />
			</div>
		</div>
	);
}
