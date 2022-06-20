import React from "react";

const physData = [
	{
		id: 2,
		title: "2․ Գործունեության տեսակը",
		type: "text",
		placeholder: "Անվանում",
	},
	{
		id: 3,
		title: "3․Կայքի տեսակը",
		type: "text",
		placeholder: "Նշեք կայքի տեսակը",
	},
];

const jurData = [
	{
		id: 2,
		title: "2․ Ընկերության անունը",
		type: "text",
		placeholder: "Անվանում",
	},
	{
		id: 3,
		title: "3․Ընկերության ՀՎՀՀ",
		type: "text",
		placeholder: "Ընկերության անվանումը",
	},
];
const SecondPoint = ({ clicked, setClicked }) => {
	return (
		<div className="order-inputs-container" id = "sec-point">
			<div className="text-wrapper">
				{clicked
					? physData.map((x) => (
							<div className="text-wrapper-items" key={x.id}>
								<p className="order-container-title">{x.title}</p>
								<input type={x.type} placeholder={x.placeholder} />
							</div>
					  ))
					: jurData.map((x) => (
							<div className="text-wrapper-items" key={x.id}>
								<p className="order-container-title">{x.title}</p>
								<input type={x.type} placeholder={x.placeholder} />
							</div>
					  ))}
			</div>
		</div>
	);
};

export default SecondPoint;
