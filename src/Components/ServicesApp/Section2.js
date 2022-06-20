import React from "react";
import jam from './images/jam.svg'
import anhat from './images/anhat.svg'
import lezu from './images/lezu.svg'
import nerdrum from './images/nerdrum.svg'

import knowledge from './images/knowledge.svg'
import portfolio from './images/portfolio.svg'
import sertificat from './images/sertificat.svg'
import freelance from './images/freelance.svg'

function Section2(props){
    let course = props.course;

    return(<div>
            <div className="sec2">
                <p className="sec2__p1">
                Դասընթացի տեղեկատվություն
                </p>
                <div className="sec2__div1">
                    <div className="sec2__div1_div">
                    <img id="sec2__div1_div_img_id1" className="sec2__div1_div_img" src={jam}></img>
                    <p id="sec2__div1_div_p_id" className="sec2__div1_div_p">Տևողությունը</p>
                    <p className="sec2__div1_div_p1" id="sec2__div1_div_p1_1">{course?.course_duration} ամիս շաբաթական {course?.weekly_time} անգամ</p>
                    <p className="sec2__div1_div_p1">{course?.lesson_duration}</p>
                       
                    </div>
                    <div className="sec2__div1_div">
                    <img id="sec2__div1_div_img_id2" className="sec2__div1_div_img" src={anhat}></img>
                    <p className="sec2__div1_div_p">Տարբերակը</p>
                    <p className="sec2__div1_div_p1">{course?.option_group}</p>
                    <p className="sec2__div1_div_p1">{course?.option_personal ? "Անհատական" : ""}</p>
                    
                    </div>
                    <div className="sec2__div1_div">
                    <img className="sec2__div1_div_img" id="sec2__div1_div_img_id3" src={lezu}></img>
                   
                    <p className="sec2__div1_div_p">Լեզուն</p>
                    {course?.armenian ? <p className="sec2__div1_div_p1">Հայերեն</p> : ""}
                    {course?.russian ? <p className="sec2__div1_div_p1">Русский</p> : ""}
                    {course?.english ? <p className="sec2__div1_div_p1">English</p> : ""}
                    </div>
                    <div className="sec2__div1_div">
                   
                    <img className="sec2__div1_div_img" id="sec2__div1_div_img_id4" src={nerdrum}></img>
                    <p className="sec2__div1_div_p">Քո ներդրումը</p>
                    {course?.option_personal ? <p className="sec2__div1_div_p1">Անհատական<br></br><span>{course?.personal_money} դրամ</span></p> : ""}
                    {course?.option_group ? <p className="sec2__div1_div_p1">Խմբային<br></br><span>{course?.group_money} դրամ</span></p> : ""}
                    </div>
                </div>
                    <p className="sec2__between__sec3">Ինչ է ձեզ սպասվում</p>
                    <div className="sec2__div1">
                    <div className="sec2__div1_div">
                        <img className="sec2__div1_div_img1" src={knowledge}></img>
                    </div>
                    <div className="sec2__div1_div">
                    <img className="sec2__div1_div_img1" src={portfolio}></img>

                    </div>
                    <div className="sec2__div1_div">
                    <img className="sec2__div1_div_img1" src={sertificat}></img>

                    </div>
                    <div className="sec2__div1_div">
                    <img className="sec2__div1_div_img1" src={freelance}></img>

                    </div>
                    <div className="sec2__div1__div_foot">
                        <div className="sec2__div1__div_foot1"><p className="sec2__div1__div_p1">Գիտելիքներ </p><p className="sec2__div1__div_p2">Անհրաժեշտ front end ծրագրավորման գիտելիքներ։</p></div>
                        <div className="sec2__div1__div_foot1"><p className="sec2__div1__div_p1">Պորտֆոլիո</p><p id="sec2__div1__div_p2_id1" className="sec2__div1__div_p2">Ռեալ պրոեկտներ որոնք դուք կունենաք դասընթացների վերջում։</p></div>
                        <div className="sec2__div1__div_foot1"><p className="sec2__div1__div_p1">Սերտիֆիկատ</p><p id="sec2__div1__div_p2_id2" className="sec2__div1__div_p2">Ձեր գիտելքիների հաստատումը դուք կստանաք սեռտիֆիկատի տեսքով։</p></div>
                        <div className="sec2__div1__div_foot1"><p className="sec2__div1__div_p1">Ֆրիլանս</p><p id="sec2__div1__div_p2_id3" className="sec2__div1__div_p2">Կստանաք հնարավորություն զբաղվել ֆրիլանսով մեր հարթակում։</p></div>
                    </div>
                    </div>

            </div>


            <section className="mobile__sec2">
                <p className="mobile__sec2__p1">
                Դասընթացի տեղեկատվություն
                </p>
                <div className="mobile__sec2__div1">
                <div className="mobile__section__overflow">
                    <div className="mobile__sec2__div1_div" id="mobile__sec2__div1_div_1">
                <div className="mobile__swipediv__center">

                    <img id="mobile__sec2__div1_div_img_id1" className="mobile__sec2__div1_div_img" src={jam}></img>
                    <p id="mobile__sec2__div1_div_p_id" className="mobile__sec2__div1_div_p">Տևողությունը</p>
                    <p className="mobile__sec2__div1_div_p1" id="mobile__sec2__div1_div_p1_1">{course?.course_duration} ամիս շաբաթական {course?.weekly_time} անգամ</p>
                    <p className="mobile__sec2__div1_div_p1">{course?.lesson_duration}</p>
                       </div>
                    </div>
                    <div className="mobile__sec2__div1_div">
                <div className="mobile__swipediv__center">

                    <img id="mobile__sec2__div1_div_img_id2" className="mobile__sec2__div1_div_img" src={anhat}></img>
                    <p className="mobile__sec2__div1_div_p">Տարբերակը</p>
                     <p className="sec2__div1_div_p1">{course?.option_group}</p>
                    <p className="sec2__div1_div_p1">{course?.option_personal ? "Անհատական" : ""}</p>
                    
                    </div>                    
                    </div>
                    <div className="mobile__sec2__div1_div">
                <div className="mobile__swipediv__center">

                    <img className="mobile__sec2__div1_div_img" id="mobile__sec2__div1_div_img_id3" src={lezu}></img>
                   
                    <p className="mobile__sec2__div1_div_p">Լեզուն</p>
                    {course?.armenian ? <p className="mobile__sec2__div1_div_p1">Հայերեն</p> : ""}
                    {course?.russian ? <p className="mobile__sec2__div1_div_p1">Русский</p> : ""}
                    {course?.english ? <p className="mobile__sec2__div1_div_p1">English</p> : ""}
                    </div>
                    </div>
                    <div className="mobile__sec2__div1_div">
                <div className="mobile__swipediv__center">
                   
                    <img className="mobile__sec2__div1_div_img" id="mobile__sec2__div1_div_img_id4" src={nerdrum}></img>
                    <p className="mobile__sec2__div1_div_p">Քո ներդրումը</p>
                    {/* <p className="mobile__sec2__div1_div_p1">Անհատական<br></br><span>50․000դր․</span></p>
                    <p className="mobile__sec2__div1_div_p1">Խմբային <br></br><span>35․000դր</span></p> */}
                    {course?.option_personal ? <p className="mobile__sec2__div1_div_p1">Անհատական<br></br><span>{course?.personal_money} դրամ</span></p> : ""}
                    {course?.option_group ? <p className="mobile__sec2__div1_div_p1">Խմբային<br></br><span>{course?.group_money} դրամ</span></p> : ""}
                    </div>
                    </div>
                    </div>

                </div>
                    <p id="mobile__sec2__between__sec3_id" className="mobile__sec2__between__sec3">Ինչ է ձեզ սպասվում</p>
                    <div id="mobile__sec2__div1_id" className="mobile__sec2__div1">
                        <div className="mobile__sec2__div1_motherdiv">
                    <div className="mobile__sec2__div1_div">
                        <img className="mobile__sec2__div1_div_img1" src={knowledge}></img>
                        </div>
                        <div className="mobile__sec2__div1_div_textdiv">
                            <p className="mobile__sec2__div1_div_textdiv_p1">Գիտելիքներ</p>
                            <p className="mobile__sec2__div1_div_textdiv_p2">Անհրաժեշտ front end ծրագրավորման գիտելիքներ։</p>

                        </div>
                        </div>
                        <div className="mobile__sec2__div1_motherdiv">

                    <div className="mobile__sec2__div1_div">
                    <img className="mobile__sec2__div1_div_img1" src={portfolio}></img>
                    </div>
                    <div className="mobile__sec2__div1_div_textdiv">
                            <p className="mobile__sec2__div1_div_textdiv_p1">Պորտֆոլիո</p>
                            <p className="mobile__sec2__div1_div_textdiv_p2">Ռեալ պրոեկտներ որոնք դուք կունենաք դասընթացների վերջում։</p>

                        </div>
                    </div>
                    <div className="mobile__sec2__div1_motherdiv">

                    <div className="mobile__sec2__div1_div">
                    <img className="mobile__sec2__div1_div_img1" src={sertificat}></img>
                    </div>
                    <div className="mobile__sec2__div1_div_textdiv">
                            <p className="mobile__sec2__div1_div_textdiv_p1">Սերտիֆիկատ</p>
                            <p className="mobile__sec2__div1_div_textdiv_p2">Ձեր գիտելքիների հաստատումը դուք կստանաք սերտիֆիկատի տեսքով։</p>

                        </div>
                    </div>
                    <div className="mobile__sec2__div1_motherdiv">

                    <div className="mobile__sec2__div1_div">
                    <img className="mobile__sec2__div1_div_img1" src={freelance}></img>
                    </div>
                    <div className="mobile__sec2__div1_div_textdiv">
                            <p className="mobile__sec2__div1_div_textdiv_p1">Ֆրիլանս</p>
                            <p className="mobile__sec2__div1_div_textdiv_p2">Կստանաք հնարավորություն զբաղվել ֆրիլանսով մեր հարթակում։</p>

                        </div>
                    </div>
                    {/* <div className="mobile__sec2__div1__div_foot">
                        <div className="mobile__sec2__div1__div_foot1"><p className="mobile__sec2__div1__div_p1">Գիտելիքներ </p><p className="mobile__sec2__div1__div_p2">Անհրաժեշտ front end ծրագրավորման գիտելիքներ։</p></div>
                        <div className="mobile__sec2__div1__div_foot1"><p className="mobile__sec2__div1__div_p1">Պորտֆոլիո</p><p id="mobile__sec2__div1__div_p2_id1" className="mobile__sec2__div1__div_p2">Ռեալ պրոեկտներ որոնք դուք կունենաք դասընթացների վերջում։</p></div>
                        <div className="mobile__sec2__div1__div_foot1"><p className="mobile__sec2__div1__div_p1">Սերտիֆիկատ</p><p id="mobile__sec2__div1__div_p2_id2" className="mobile__sec2__div1__div_p2">Ձեր գիտելքիների հաստատումը դուք կստանաք սեռտիֆիկատի տեսքով։</p></div>
                        <div className="mobile__sec2__div1__div_foot1"><p className="mobile__sec2__div1__div_p1">Ֆրիլանս</p><p id="mobile__sec2__div1__div_p2_id3" className="mobile__sec2__div1__div_p2">Կստանաք հնարավորություն զբաղվել ֆրիլանսով մեր հարթակում։</p></div>
                    </div> */}
                    </div>
            </section>
        </div>)
}

export default Section2;