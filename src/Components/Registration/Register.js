import React from "react";
import logo from "../img/Logo.png";
import icon1 from "../img/icon1.svg"
import icon2 from "../img/icon2.svg";
import icon3 from "../img/icon3.svg";
import icon4 from "../img/icon4.svg";
import icon5 from "../img/icon5.svg";
import "../styles/register.css";
import { Link } from "react-router-dom";
function Register(){

    return(
    <div>
        <div className="container">
            <img src = {logo} alt = "logo" className="register__logo"/>
            <p className="register__p">Գրանցվել որպես</p>
            <Link to = "Student" className = "link"><button className="register__button"><img src = {icon1} alt = "" className="register__icon" />Ուսանող</button></Link>
            <Link to = "Trainer" className = "link"><button className="register__button"><img src = {icon2} alt = "" className="register__icon" />Դասախոս</button></Link>
            <Link to  = " " className="link"><button className="register__button"><img src = {icon3} alt = "" className="register__icon" />Ֆրիլանսեր</button></Link>
            <Link to  = " " className="link"><button className="register__button"><img src = {icon4} alt = "" className="register__icon" />Գործընկեր</button></Link>
            <Link to  = " " className="link"><button className="register__button"><img src = {icon5} alt = "" className="register__icon" />Ուս․հաստատություն</button></Link>
            <Link to  = " " className="link"><button className="register__reg__button">Գրանցվել</button></Link>
        </div>
    </div>)
}

export default Register