import { React, memo, useEffect, useState } from "react";
import webimg1 from "../../images/web1.png";
import webimg2 from "../../images/web2.png";
import webimg3 from "../../images/web3.png";
import ReactHtmlParser from "html-react-parser";

function WebTypes() {
	const [websiteTypes, setWebsiteTypes] = useState([]);
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	useEffect(() => {
		getWebsiteTypes();
	}, []);

	function getWebsiteTypes() {
		fetch(
			"https://test.globalitc.am/kjsamcpPIBYXTvnooHTCVIyUCTCUxxrRMoK/website-type-list/"
		)
			.then((response) => response.json())
			.then((data) => setWebsiteTypes(data));
	}

	const onBtnClick = (e) => {
		setTitle(e.target.title);
		setDescription(ReactHtmlParser(e.target.name));
	};

	return (
		<div className="sec4_mother">
			<div className="sec4_nametext">
				<p>Կայքի տեսակները</p>
			</div>
			<div className="sec4_buttons">
				{websiteTypes?.map((type, index) => (
					<button
						key={index}
						onClick={onBtnClick}
						name={type?.description}
						title={type?.button_text}
					>
						{type?.button_text}
					</button>
				))}
			</div>
			<div className="sec4_buttons_respons">
				<div className="sec4-buttons_respons_1">
					{websiteTypes?.map((type, index) => (
						<button
							key={index}
							onClick={onBtnClick}
							name={type?.description}
							title={type?.button_text}
						>
							{type?.button_text}
						</button>
					))}
				</div>
				{/* <div className="sec4-buttons_respons_2">
					<button>Անձնական կայք</button>
					<button>Բիզնես կայք</button>
					<button>Պորտալ կայք</button>
					<button>Կատալոգ կայք</button>
				</div> */}
			</div>
			<p className="sec4_infotext_title">
				{title == "" ? websiteTypes?.slice(0, 1).shift()?.button_text : title}ի
				պատրաստում
			</p>
			<div className="sec4_info">
				<div className="sec4_infotext">{description == "" ? ReactHtmlParser(websiteTypes?.slice(0, 1).shift()?.description) : description}</div>
			</div>
			{/* <div className="sec4_infotext" id="sec4_infotext2">
				<p>
					Կայքում կարող են տեղ գտնել նաև զեղչեր, տարբեր ակցիաներ․ այն ամենն,
					ինչը կշարժի պոտենցիալ հաճախորդի հետաքրքրությունը։ Հաճախորդը՝ կայք
					այցելելով, միշտ համեմատություն է կատարում։ Հետևաբար, ձեր
					առավելություններն ավելի շատ պիտի լինեն։ Սակայն առավելությունները պետք
					է նաև վստահություն առաջացնեն։ Այս հարցում կօգնեն ճիշտ ընտրված
					նկարները, անհրաժեշտության դեպքում կարելի է օգտագործել նաև կարճ
					տեսանյութ։
				</p>
				<p>
					Լենդինգ կայք պատրաստելու ամենապատասխանատու պահն այս ամբողջ ինֆորմացիան
					հավաքելուց հետո, այն ճիշտ հերթականությամբ օգտատիրոջը ներկայացնելն է։
					Այն է՝ պոտենցիալ հաճախորդի մոտ հետաքրքրություն առաջացնելով՝
				</p>
				<ul className="sec4_infotext_nonestyleli">
					<li>Ձևավորել տվյալ ծառայության պահանջ</li>
					<li>Բավարարել պահանջն, առաջարկելով լավագույն տարբերակը</li>
					<li>
						Քայլ առ քայլ մղել նրան կատարել գնում (կամ ցանկացած այլ
						գործողություն) հենց ՏՎՅԱԼ ՊԱՀԻՆ
					</li>
				</ul>
			</div> */}
			<div className="sec4_infoimg">
				<img src={webimg1} className="sec4_infoimg_img"></img>
				<img src={webimg2} className="sec4_infoimg_img_big"></img>
				<img src={webimg3} className="sec4_infoimg_img"></img>
			</div>
		</div>
	);
}
export default memo(WebTypes);
