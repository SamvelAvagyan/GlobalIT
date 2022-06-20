import React, { useEffect, useState, memo } from "react";
import Select from "react-select";
import ourworks1 from "../../images/our works 1.png";
import ourworks2 from "../../images/our works 2.png";
import ourworks3 from "../../images/our works 3.png";
import ourworks4 from "../../images/our works 4.png";
import ourworks5 from "../../images/our works 5.png";
import ourworks6 from "../../images/our works 6.png";
import webimg1 from "../../images/web1.png";
import webimg2 from "../../images/web2.png";
import webimg3 from "../../images/web3.png";

function OurWorks(props) {
	const options = [
		{
			value: "online",
			label: "Օնլայն խանութ",
		},
		{
			value: "promo",
			label: "Պրոմո կայք",
		},
		{
			value: "zlm",
			label: "Լրատվական կայք",
		},
		{
			value: "landing",
			label: "Լենդինգ կայք",
		},
		{
			value: "visit",
			label: "Այցեքարտ կայք",
		},

		{
			value: "personal",
			label: "Անձնական կայք",
		},
		{
			value: "business",
			label: "Բիզնես կայք",
		},
		{
			value: "portal",
			label: "Պորտալ կայք",
		},
		{
			value: "catalogue",
			label: "Կատալոգ կայք",
		},
	];
	return (
		<div className="sec3-container">
			<div className="sec3_motherdiv">
				<div className="sec3_textdiv">
					<p>Մեր աշխատանքները</p>
				</div>
				<div className="sec3_worksdiv">
					{props.service?.our_works?.map((val, index) => 
						<div className="sec3_worksdiv_div" key={index}>
                        	<img src={val?.screen} />
				    	</div>			
					)}  
				</div>
				<div className="sec3_buttondiv">
					<button>Դիտել ավելին</button>
				</div>
			</div>

			<div className="mobile_sec3_mother">
				<div className="mobile_sec3_textdiv">
					<p>Մեր աշխատանքները</p>
				</div>
				<div className="mobile__section__overflow">
					<img
						className="mobile_sec3_img"
						id="mobile_sec3_img1"
						src={ourworks1}
					></img>
					<img className="mobile_sec3_img" src={ourworks2}></img>
					<img className="mobile_sec3_img" src={ourworks3}></img>
					<img className="mobile_sec3_img" src={ourworks4}></img>
					<img className="mobile_sec3_img" src={ourworks5}></img>
					<img className="mobile_sec3_img" src={ourworks6}></img>
				</div>
			</div>

			<div className="mobile__select__options__container">
				<p className="ourWorks-title">Կայքի տեսակները</p>
				<Select
					options={options}
					placeholder="Տեսակը"
					className="basic-single-select-fac"
					classNamePrefix="custom-single-select-fac"
				/>
				<div className="sec4_info">
                    <p className="sec4-info-title">Լենդինգ կայքի պատրաստում</p>
					<div className="sec4_infotext">
						<p>
							Լենդինգ կայքը փոքր ու միջին բիզնեսների համար մտածված գործիք է, որն
							իր մեջ անպայման կրում է գործողության կոչ։ Այն նախատեսված է ձեր
							ընկերության ծառայությունները կամ ապրանքատեսակը վաճառելու համար։
							Նման կայքը, գլխավորապես, կազմված է լինում հետևյալ 3 կետերից՝
                            <br/>
                            <br/>

							<ul>
								<li>Լավ վերնագիր</li>
								<li>Նշանակետին խփող տեքստ</li>
								<li>Աչքի ընկնող դիզայն</li>
							</ul>
                            <br/>
							Մեր ծրագրավորողներն, իրենց փորձից ելնելով, ավելացնում են ևս մի
							քանի կետեր, հիմնված պոտենցիալ հաճախորդների հոգեբանության վրա։
                            <br/>
                            <br/>
							Օգտատերն ավելի հեշտ է ընկալում կայքում եղած ուղերձն ու
							ինֆորմացիան, երբ այն իր մեջ կրում է ոչ ավել, քան մի նպատակ։ Սա
							վերաբերում է պարզ կայքերին, ինչպիսին է նաև լենդինգ կայքը։ Այն նաև,
							բացի գործողության կոչ անելու կոճակից (գրանցվել, բաժանորդագրվել,
							զանգել, գնել), այլ հղումներ չպիտի ունենա, որպեսզի օգտատերը հասնի
							վերջնակետին առանց շեղվելու։ 
                            <br/>
                            <br/>
                            Տեքստը նման կայքում պետք է լինի պարզ,
							հակիրճ և ինֆորմատիվ։ Կարևոր է հստակ պատկերացնել նշված ծառայության,
							ապրանքատեսակի թարգեթն ու աշխատել հենց նրա համար։ Պետք է միշտ
							հիշել, որ լենդինգ կայքը պատրաստվում է ոչ թե ծանոթության, այլ
							օգտատիրոջը կոնկրետ գործողության մղելու համար։
						</p>
					</div>
					<div className="sec4_infoimg">
						<img src={webimg1} className="sec4_infoimg_img"></img>
						<img src={webimg2} className="sec4_infoimg_img_big"></img>
						<img src={webimg3} className="sec4_infoimg_img"></img>
					</div>
				</div>
			</div>
		</div>
	);
}

export default memo(OurWorks);
