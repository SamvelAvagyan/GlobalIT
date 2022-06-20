import React from "react";
import logo from "../Components/Facultets/img/Logo.png"
import icon1 from "../Components/Facultets/img/icon1.svg";
import icon2 from "../Components/Facultets/img/icon2.svg";
import icon3 from "../Components/Facultets/img/icon3.svg";
import icon4 from "../Components/Facultets/img/icon4.svg";
import icon5 from "../Components/Facultets/img/icon5.svg";
import facebook from "../Components/Facultets/img/facebook.svg";
import google from "../Components/Facultets/img/google.svg";
import "../styles/register.css"
import { Link } from "react-router-dom";


function Register(children){

    return(
        <div className="container">
            <img src = {logo} alt = "logo" className="register__logo"/>
            <p className="register__p">Գրանցվել որպես</p>
            <Link to = "/Student" style={{textDecoration: "none"}}><button className="register__button" id="register__button__first"><img src = {icon1} alt = "" className="register__icon" />Ուսանող</button></Link>
            <button className="register__button"><img src = {icon2} alt = "" className="register__icon" />Դասախոս</button>
            <button className="register__button"><img src = {icon3} alt = "" className="register__icon" />Ֆրիլանսեր</button>
            <button className="register__button"><img src = {icon4} alt = "" className="register__icon" />Գործընկեր</button>
            <button className="register__button"><img src = {icon5} alt = "" className="register__icon" />Ուս․հաստատություն</button>
            <button className="register__reg__button">Գրանցվել</button>
        </div>
    )
}

export default Register