import { React, useEffect, useState } from "react";
import world from "./images/world.png";
import ekrkarajamketporc from "./images/ekrkarajamketporc.svg";
import yntanekanmijavayr from "./images/yntanekanmijavayr.svg";
import timemanagment from "./images/timemanagment.svg";
import lavaguynmentorner from "./images/lavaguynmentorner.svg";

function Section5(props) {
	const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        getTrainers();
    }, []);

	function getTrainers() {
		fetch(
			"https://test.globalitc.am/kjsamcpPIBYXTvnooHTCVIyUCTCUxxrRMoK/trainer-list/"
		)
			.then((response) => response.json())
			.then((data) => {
				for (let i = 0; i < data.length; i++) {
					if (data[i]?.course == props.course?.title) {
						setTrainers(...trainers, data[i]);
					}
				}
			});
	}

	return (
		<div>
			<p className="sec5__p">
				Մենք ունենք ուսանողներ աշխարհի<br></br>
				բոլոր երկրներում
			</p>
			<img className="sec5__p_img" src={world}></img>

			<p className="sec5__p">Ինչու սովորել GLOBAL IT-ում</p>
			<div className="sec5__div">
				<div className="sec5__div_div">
					<img src={ekrkarajamketporc} className="sec5__div_div_img1"></img>
					<p className="sec5__div_div_p1">Երկար տարիների փորձ</p>
					<p className="sec5__div_div_p2">
						Մենք շուկայում ենք 2017 թվականից։ Այսօր մենք զբաղվում ենք բազմաթիվ
						աշակերտների մասնագիտական կրթությամբ և ունենք բազում ավարտած
						ուսանողներ որոնք գտել են իրենց տեղը շուկայում։
					</p>
				</div>
				<div className="sec5__div_div">
					<img src={yntanekanmijavayr} className="sec5__div_div_img1"></img>
					<p className="sec5__div_div_p1">Ընտանեկան միջավայր</p>
					<p className="sec5__div_div_p2">
						Ոչ մի անհետաքրքիր և ոչ էֆեկտիվ դասընթացներ։ GLOBAL IT - ում
						դասընթացները անցկացվելու են այնպիսի միջավայրում, որ ոչ մի վարկյան
						ձանձրալի չթվա։
					</p>
				</div>
				<div className="sec5__div_div">
					<img src={timemanagment} className="sec5__div_div_img1"></img>
					<p className="sec5__div_div_p1">Ամենա կարճ ժամկետները</p>
					<p className="sec5__div_div_p2">
						6 ամսից ուսանողը կավարտի<br></br> դասընթացը և կկարողանակ սկսել իր
						կարիերան։ Մենք ամեն ինչով<br></br> կոգնենք ձեզ ձեր առաջընթացը
						ապահովելու<br></br> համար։
					</p>
				</div>
				<div className="sec5__div_div">
					<img src={lavaguynmentorner} className="sec5__div_div_img1"></img>
					<p className="sec5__div_div_p1">Լավագույն մենթորները </p>
					<p className="sec5__div_div_p2">
						Մենք շատ խիստ ենք վերաբերվում ուսուցման որակին և դրանով իսկ
						ապահովում ձեր բարձորակ ուսուցումը։ Դուք կունենաք անձնական մենթոր ով
						կուղեքցի ձեզ ամբողջ դասընթացի ընթացքում։
					</p>
				</div>
			</div>
			{/* <p className="sec5__p1">Մեր դասախոսները</p>
			<div className="sec5__div1">
				{trainers?.map((trainer, index) => (
					<div
						className="sec5__div1_div"
						style={{ backgroundImage: URL(trainer?.photo) }}
						key={index}
					></div>
				))}
			</div> */}

			<p className="mobile__sec5__p">
				Մենք ունենք ուսանողներ աշխարհի<br></br>
				բոլոր երկրներում
			</p>
			<div className="mobile__sec5__p_img_div">
				<img className="mobile__sec5__p_img" src={world}></img>
			</div>

			<p className="mobile__sec5__p">Ինչու սովորել GLOBAL IT-ում</p>
			<div className="mobile__sec5__div">
				<div className="mobile__sec5__div_div">
					<img
						src={ekrkarajamketporc}
						className="mobile__sec5__div_div_img1"
					></img>
					<div className="mobile__sec5__div_div_textdiv">
						<p className="mobile__sec5__div_div_p1">Երկար տարիների փորձ</p>
						<p className="mobile__sec5__div_div_p2">
							Մենք շուկայում ենք 2017 թվականից։ Այսօր մենք զբաղվում ենք բազմաթիվ
							աշակերտների մասնագիտական կրթությամբ և ունենք բազում ավարտած
							ուսանողներ որոնք գտել են իրենց տեղը շուկայում։
						</p>
					</div>
				</div>
				<div className="mobile__sec5__div_div">
					<img
						src={yntanekanmijavayr}
						className="mobile__sec5__div_div_img1"
					></img>
					<div className="mobile__sec5__div_div_textdiv">
						<p className="mobile__sec5__div_div_p1">Ընտանեկան միջավայր</p>
						<p className="mobile__sec5__div_div_p2">
							Ոչ մի անհետաքրքիր և ոչ էֆեկտիվ դասընթացներ։ GLOBAL IT - ում
							դասընթացները անցկացվելու են այնպիսի միջավայրում, որ ոչ մի վարկյան
							ձանձրալի չթվա։
						</p>
					</div>
				</div>
				<div className="mobile__sec5__div_div">
					<img src={timemanagment} className="mobile__sec5__div_div_img1"></img>
					<div className="mobile__sec5__div_div_textdiv">
						<p className="mobile__sec5__div_div_p1">Ամենա կարճ ժամկետները</p>
						<p className="mobile__sec5__div_div_p2">
							6 ամսից ուսանողը կավարտի<br></br> դասընթացը և կկարողանակ սկսել իր
							կարիերան։ Մենք ամեն ինչով<br></br> կոգնենք ձեզ ձեր առաջընթացը
							ապահովելու<br></br> համար։
						</p>
					</div>
				</div>
				<div className="mobile__sec5__div_div">
					<img
						src={lavaguynmentorner}
						className="mobile__sec5__div_div_img1"
					></img>
					<div className="mobile__sec5__div_div_textdiv">
						<p className="mobile__sec5__div_div_p1">Լավագույն մենթորները </p>
						<p className="mobile__sec5__div_div_p2">
							Մենք շատ խիստ ենք վերաբերվում ուսուցման որակին և դրանով իսկ
							ապահովում ձեր բարձորակ ուսուցումը։ Դուք կունենաք անձնական մենթոր
							ով կուղեքցի ձեզ ամբողջ դասընթացի ընթացքում։
						</p>
					</div>
				</div>
			</div>
			{/* <p className="mobile__sec5__p1">Մեր դասախոսները</p>
			<div className="mobile__sec5__div1">
				{trainers?.map((trainer, index) => (
					<div
						className="mobile__sec5__div1_div"
						style={{ backgroundImage: URL(trainer?.photo) }}
						key={index}
					></div>
				))}
				<div className="mobile__sec5__div1_div"></div>
                <div className="mobile__sec5__div1_div"></div>
			</div> */}
		</div>
	);
}

export default Section5;
