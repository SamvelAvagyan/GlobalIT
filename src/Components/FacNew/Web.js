import {React, useEffect, useState, memo} from "react";
import sec1gif from "../../images/gif5.gif"

function Web(props){
    let service = props.service;

    return(<div>
        <div className="sec1_mother_div">
            <div className="sec1_text_div">
                <p className="sec1_text_div_p1">{service.title}</p>
                <p className="sec1_text_div_p2">{service.description}</p>

            </div>
            <div className="sec1_img_div">
                <img src={service.header_image}></img>
            </div>
        </div>

        <div className="mobile_sec1_mother">
            <div className="mobile_sec1name">
                <p className="mobile_sec1_text_div_p1">{service.title}</p>
            </div>
            <div className="mobile_sec1_imgdiv">
                <img src={service.header_image}></img>
            </div>
            <div className="mobile_sec1_textdiv">
                <p>{service.description}</p>
            </div>
            <div className="mobile_sec1_buttondiv">
                <button>Իմանալ ավելին</button>
            </div>
        </div>
    </div>
        
    )
}
export default memo(Web);