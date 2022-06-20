import React from "react";
import ButtonData from "./../Datas/ButtonData";
import { Link } from "react-router-dom";

import classes from "./Button.module.css";

const LinkArr = ["https://t.me/globalitcenter", "https://api.whatsapp.com/send?phone=37498960959"]
const Button = () => {
	return (
		<div className={classes.modal_buttons_wrapper}>
			{ButtonData.map((x, index) => (
				<a className = {classes.link} href = {x.id == 2 ? LinkArr[1] : x.id == 4 ? LinkArr[0] : "#"} key = {index} target = "_blank"><button
					key={x.id}
					style={{ backgroundColor: x.color }}
					className={classes.button}
				>
					<img src={x.icon} className={classes.icons} />
					<p>{x.value}</p>
				</button>
				</a>
			))}
		</div>
	);
};

export default Button;
