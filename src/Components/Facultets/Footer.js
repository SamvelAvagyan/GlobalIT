import React from "react";
import img26 from "../../images/Vector5.png";
import img27 from "../../images/Vector (1).png";
import img28 from "../../images/Vector (2).png";
import img29 from "../../images/Vector (3).png";
import img30 from "../../images/Vector (4).png";
import img31 from "../../images/Logo footer.png";
import img32 from "../../images/facebook.svg";
import img33 from "../../images/instagram.svg";
import img34 from "../../images/Linkedin.svg";
import img35 from "../../images/youtube.svg";
import img36 from "../../images/twitter.svg";

function Footer() {
	return (
		<div>
			<footer>
				<div className="footer__div">
					<div className="minidiv" id="minidiv1">
						<p className="mecc">Դասընթացներ</p>
						<ul className="list1">
							<li>Վեբ ծրագրավորում</li>
							<li>Ծրագրավորում</li>
							<li>Մուլտիմեդիա</li>
						</ul>
						<p className="mecc" id="mec1">
							Նախագծեր
						</p>
						<p className="mecc" id="mec2">
							Աշխատանք
						</p>
						<p className="mecc" id="mec2">
							Մեր մասին
						</p>
					</div>
					<div className="minidiv" id="minidiv2">
						<p className="mecc">Հասցեներ</p>
						<p className="poqr" id="poqr1">
							Ք.Երևան Ալեք Մանուկյան 15ա (Սլավոնական համալսարան)
						</p>
						<p className="mecc" id="mec3">
							Հեռախոսահամարներ
						</p>
						<p className="poqr" id="poqr2">
							+374 98 960 959
						</p>
						<p className="mecc" id="mec3">
							Էլ.հասցե
						</p>
						<ul className="mek">
							<li id="poqr4">gitedu@bk.ru</li>
							<li id="poqr3">Globalitc2021@gmail.com</li>
						</ul>
					</div>
					<div className="minidiv" id="minidiv3">
						<p className="mecc">Սոց․ ցանցեր</p>
						<div className="connector">
							<div className="miniminidiv1">
								<ul>
									<img src={img26} className="footerminiimg1"></img>
									<img src={img27} className="footerminiimg1"></img>
									<img src={img28} className="footerminiimg1"></img>
									<img src={img29} className="footerminiimg1"></img>
									<img src={img30} className="footerminiimg1"></img>
								</ul>
							</div>
							<div className="miniminidiv2">
								<ul>
									<li id="socer">Facebook</li>
									<li className="socer">Instagram</li>
									<li id="socer3">Linked In</li>
									<li id="socer1">Twitter</li>
									<li id="socer2">Youtube</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="minidiv" id="minidiv4">
						<p className="mecc">Աջակցություն</p>
						<ul className="list2">
							<li id="list2li">Օգնություն</li>
							<li className="list2li">Կարգավիճակ</li>
							<li className="list2li">Փոփոխություն</li>
							<li className="list2li">Հետադարձ կապ</li>
						</ul>
					</div>
				</div>
				<div className="verj">
					<p>
						<img src={img31} id="veerj"></img>Copyright. 2022 Բոլոր հեղինակային
						իրավունքները պաշտպանված են: Կայքը պատրաստված է «ԳԼՈԲԱԼ ԻՏ» (ՍՊԸ)-ի
						կողմից, որը հանդիսանում է ընկերության պաշտոնական կայքէջը: Կայքից
						նյութ տեղադրելիս հղումը gitedu.am-ին պարտադիր է:
					</p>
				</div>

				<div className="mobile__footer__textdiv">
					<p className="mobile__footer__secname" id="mobile__footer__conwithus">
						Կապ մեզ հետ
					</p>
					<p className="mobile__footer__p">
						Ք.Երևան Ալեք Մանուկյան 15ա (Սլավոնական համալսարան)
					</p>
					<p className="mobile__footer__p">Globalitc2021@gmail.com</p>
					<p className="mobile__footer__p">gitedu@bk.ru</p>
				</div>
				<div className="mobile__footer__socdiv">
					<p className="mobile__footer__secname" id="soccancer">
						Սոց․ցանցեր
					</p>
					<div className="mobile__footer__socs">
						<img src={img32}></img>
						<img src={img33}></img>
						<img src={img34}></img>
						<img src={img35}></img>
						<img src={img36}></img>
					</div>
				</div>
				<div className="mobile__footer__copyright">
					<p>
						GLOBAL IT Copyright. 2022 բոլոր հեղինակային <br /> իրավունքները
						պաշտպանվածեն
					</p>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
