import {React, memo} from "react";
import clock from "../../images/Clock.svg"
//import service from "../../images/Service.svg"
import work from "../../images/Design Work.svg"

function YouOwn(props){
    let service = props.service;

    return(<div>
        <div className="sec2_mother_div">
            <div className="sec2_text_div">
                <p className="sec2_text_div_p">Դուք կստանաք</p>   
            </div>
            <div className="sec2_div">
            <div className="sec2_div_div">
                <div className="sec2_div_div_div">
                    <img src={service.you_will_receive_icon1}></img>
                </div>
                <p>{service.you_will_receive_title1}</p>
                </div>
            <div className="sec2_div_div">

                <div className="sec2_div_div_div">
                    <img src={service.you_will_receive_icon2}></img>
                </div>
                <p>{service.you_will_receive_title2}</p>
                </div>

            <div className="sec2_div_div">

                <div className="sec2_div_div_div">
                    <img src={service.you_will_receive_icon3}></img>
                </div>
                <p>{service.you_will_receive_title3}</p>
                </div>

            </div>
        </div>

        <div className="mobile_sec2_mother_div">
            <div className="mobile_sec2_text_div">
                <p className="mobile_sec2_text_div_p">Դուք կստանաք</p>   
            </div>
            <div className="mobile_sec2_div">
                <div className="mobile_sec2_div_div">
                    <div className="mobile_sec2_div_div_div">
                        <img src={service.you_will_receive_icon1}></img>
                    </div>
                    <p>{service.you_will_receive_title1}</p>
                </div>
                <div className="mobile_sec2_div_div">
                    <div className="mobile_sec2_div_div_div">
                        <img src={service.you_will_receive_icon2}></img>
                    </div>
                    <p>{service.you_will_receive_title2}</p>
                </div>
                <div className="mobile_sec2_div_div">
                    <div className="mobile_sec2_div_div_div">
                        <img src={service.you_will_receive_icon1}></img>
                    </div>
                    <p>{service.you_will_receive_title3}</p>
                </div>
            </div>
        </div>
    </div>
        
    )
}
export default memo(YouOwn);