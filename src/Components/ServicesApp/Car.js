import { React, useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../styles/services-app.css";
import html from "./images/html-css.svg";
import js from "./images/jss.png";
import reactjs from "./images/react.svg";
import workflow from "./images/workflow.svg";
import server from "./images/server.svg";
import settings from "./images/settings.svg";

function Car(props) {
	const items = [];

	function getItems() {
		{
			props.course?.learning_topics?.map((val, index) => (
				items[index] = (
				<div
					className="carousel-items"
					id={index == 0 ? "first-item" : ""}
					key={index}
				>
					<p className="carousel-item-number">{index + 1}</p>
					<div className="carousel-items-images-wrapper">
						<img
							src={val?.image}
							alt={val?.title}
							className="carousel-items-images"
						/>
					</div>
					<span className="carousel-items-title">{val?.title}</span>
					<p className="carousel-item-text">{val?.description}</p>
				</div>
				)
			));
		}
	}

	const responsive = {
		superLargeDesktop: {
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 4,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 3,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	getItems();
	return (
		<div>
			{/* {props.course?.learning_topics?.map((topic, index) => (
				<div key={index}>
					<p>{topic?.title}</p>
				</div>
			))} */}
			{/* <Carousel autoScroll={false} showArrowBg={true} sliderType="grid">
				
			</Carousel> */}

			<Carousel responsive={responsive}>
				{items}
			</Carousel>
		</div>
	);
}

export default Car;

//const
// const arr = [
//         {
//                 value: 1,
//                 img: html,
//                 title: 'HTML CSS',
//                 text:'Դուք կծանոթանաք Front end ծրագրավորման սկզբանակն և կարևորագույն գերտեքստի նշագրման լեզվին։ Կիմանաք էթ ինչ է Flexsbox-ը, SAS-ը, և այլն։'

//         },
//         {
//                 value: 2,
//                 img: js,
//                 title: 'Javascript',
//                 text:'Նաև կսովորեք հանրահայտ Javascript ծրագրավորման լեզվի կարևորագույն և հիմանական մասերը և սկզբունքները։ Կսովորեք նաև JQquary, Ajax, JSON, API, SPA, Web socket և Service workers:'
//         },
//         {
//                 value: 3,
//                 img: reactjs,
//                 title: 'React.js',
//                 text:'Հիմնովին կտիրապետեք ամենա հայտնի Javascript գրադարանին որով դուք հետագայում կստեղծեք ձեր  պռոեկտները։ Նաև React router, Redux, Redux Saga և Styled Companents'
//         },
//         {
//                 value: 4,
//                 img: workflow,
//                 title:'Workflow',
//                 text:'Ձեր զինանոցը կլցվի այնպիսի գործիքներ ինչպիսիք են Webpack, Gulp, Github, Terminal, Yarn և npm: Ինչպես նաև Pug և PostCSS.'
//         },
//         {
//                 value: 5,
//                 img: server,
//                 title: 'SPA-ծրագրեր',
//                 text: 'Դուք կսովորեք ստեղծել ծրագրեր․ Ստեղծել սխռմաներ հաճախորդների համար և տվյալների պահպանում, կապ սերվերի հետ'
//         },
//         {
//                 value: 6,
//                 img: settings,
//                 title: 'Փորձարկում',
//                 text: 'Դուք կսովորեք ստեղծել ծրագրեր․ Ստեղծել սխռմաներ հաճախորդների համար և տվյալների պահպանում, կապ սերվերի հետ'
//         }
// ]
