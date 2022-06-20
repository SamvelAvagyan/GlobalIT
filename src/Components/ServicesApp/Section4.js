import React from "react";
import diagram from './images/Diagram.png'
import diagramsmall from './images/diagram1024.svg'
import Site1 from './images/Site1.png'
import Site2 from './images/Site2.png'
import vkayakan from './images/vkayakan.png'
import diagrammobile from './images/front end diagram.png'

function Section4(props){
    return(<div>
            <div className="sec4__div1">
                <div className="sec4__div1_div">
                    <div className="sec4__div1_div_div"><p className="sec4__div1_div_p1">
                    {props.course?.average_salary}
                    </p>
                    <p className="sec4__div1_div_p2">
                   <span className="sec4__div1_div_p2_span">{props.course?.title}</span>
                   <br></br>
                    Միջին աշխատավարձը
                    </p>
                    </div>
                    <p className="sec4__div1_div_p3">
                    {props.course?.average_salary_description}
                    </p>
                </div>
                <div className="sec4__div1_div1">
                    <img className="sec4__div1_div_img" src={props.course?.salary_diagram}></img>
                    <img className="sec4__div1_div_imgsmall" src={diagramsmall}></img>
                </div>
            </div>
           <div className="sec4__div2">
           <div className="sec4__div2_div">
            <p className="sec4__div1_p1">Մեր ուսանողների աշխատանքները</p>
            <p className="sec4__div1_p2">Մեր ուսանողները կուրսի ավարտից հետո ունենում են <br></br> աշխատանքներ որոնք նրանք տեղադրել են իրենց<br></br> պարտֆոլիույում</p>
           </div>
           </div>

            <div className="sec4__div3">
                <img className="sec4__div3_img1" src={Site1}></img>
                <img className="sec4__div3_img2" src={Site2}></img>
            </div>

            <div className="sec4__div4">
            <div className="sec4__div4_div"><img className="sec4__div4_img" src={props.course?.certificate}></img>
            <div className="sec4__div4_div1">
                <p className="sec4__div4_div1_p1">Ձեր ապագա
                վկայականը</p>
                <p id="sec4__div4_div1_p2_id1" className="sec4__div4_div1_p2">Դասընթացների ավարտից հետո դուք 
               <br></br> կստանաք սերտիֆիկատ, որը կդառնա ձեր<br></br>
                օգնականը IT աշխարհ մուտք գործելու<br></br> համար։</p>
                <p className="sec4__div4_div1_p2">Այն հասանելի կլինի էլեկտրոնային տարբերակով և դուք կկարողանաք հեշտությամբ այն կցել ձեր ռեզյումեին:</p>
            </div>
            </div>
            </div>

            <div className="mobile__sec4__div1">
              {/* <img className="mobile__sec4__div1_img" src={diagrammobile}></img> */}
            </div>
           <div className="mobile__sec4__div2">
           
            <p className="mobile__sec4__div1_p1">Մեր ուսանողների աշխատանքները</p>
           
           </div>

            <div className="mobile__sec4__div3">
                <img className="mobile__sec4__div3_img" src={Site1}></img>
                <img className="mobile__sec4__div3_img" src={Site2}></img>
            </div>

            <div className="mobile__sec4__div4">
            <div className="mobile__sec4__div4_div">
                <p className="mobile__sec4__div4_div1_p1">Ձեր ապագա
                վկայականը</p>
                <p id="mobile__sec4__div4_div1_p2_id1" className="mobile__sec4__div4_div1_p2">Դասընթացների ավարտից հետո դուք 
               <br></br> կստանաք սերտիֆիկատ, որը կդառնա ձեր<br></br>
                օգնականը IT աշխարհ մուտք գործելու<br></br> համար։</p>
                <p className="mobile__sec4__div4_div1_p2">Այն հասանելի կլինի էլեկտրոնային տարբերակով և դուք կկարողանաք հեշտությամբ այն կցել ձեր ռեզյումեին:</p>
            </div>
            <div className="mobile__sec4__div4_div1"><img className="mobile__sec4__div4_img" src={props.course?.certificate}></img>
           
            </div>
            </div>
        </div>)
}

export default Section4