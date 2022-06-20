import React from "react"
import logo from "../img/Logo.png";
import "../styles/stud_style.css";
import vector from "../img/eye.svg";
import { useState } from "react";
function Trainer(){
    const [passShow, setPassShow] = useState(false);
    var change_inp;
    let eyeImg, passInp; 
    document.onload = function(){
        eyeImg = document.querySelector(".pass_show");
        passInp = document.querySelector(".pass_inp");
    }
    
    if(eyeImg != null && passInp != null){
        if(passInp === document.activeElement){
            eyeImg.setAttribute('style', 'display: block');
        }else{
            eyeImg.setAttribute('style', 'display: none');
        }
    }

    const change = (e) =>{
        let plower = document.querySelector(".pass_lowercase");
        let pupper = document.querySelector(".pass_uppercase");
        let pnumbers = document.querySelector(".pass_numbers");
        let psymbols = document.querySelector(".pass_symbols");
        let pmarkers = document.querySelector(".pass_markers");
        let inp = e.target.value;
        change_inp = inp;
        
        let expLowerCase = /[a-z]/;
        let expUpperCase = /[A-Z]/;
        let expNum = /[0-9]/;
        let expSpecialChars = /[^a-zA-Z0-9 ]/;

        psymbols.style.color = expSpecialChars.test(inp) ? "#00FF19" : "white";
        plower.style.color = expLowerCase.test(inp) ? "#00FF19": "white";
        pupper.style.color = expUpperCase.test(inp) ? "#00FF19" : "white";
        pnumbers.style.color = expNum.test(inp) ? "#00FF19" : "white";
        pmarkers.style.color = inp.length >= 8 ? "#00FF19" : "white";
    } 
    const confirm = (e) =>{
        let pconfirm = document.querySelector(".pass_confirm");
        let confirm_inp = e.target.value;
        pconfirm.setAttribute('style', 'border: 1px solid')
        pconfirm.style.borderColor = confirm_inp != change_inp ? "red" : "black";
        
        if(confirm_inp == ""){
            pconfirm.setAttribute('style', 'border: none;')
        }
    }

    const passToggle = () =>{
        setPassShow(!passShow);
    }

    return(
        <div>
            <div className="container">
                <img src = {logo} alt = "logo" className="stud_logo"></img>
                <form>
                    <input type="text" placeholder="Անուն"></input>
                    <input type="text" placeholder="Ազգանուն"></input>
                    <input type="tel" placeholder="Հեռախոսահամար"></input>
                    <input type="email" placeholder="Էլ․ հասցե"></input>
                    <div className="password">
                        <input type={passShow ? "text" : "password"} placeholder="Գաղտնաբառ" onChange={change} className = "pass_inp"></input><img src = {vector} alt = "vector" onClick={passToggle} className = "pass_show"/>
                    </div>
                    <div className="form_div">
                        <p className="pass_lowercase" >a<br/>Փոքրատառ</p>
                        <p className="pass_uppercase">A<br/>Մեծատառ</p>
                        <p className="pass_numbers">123<br/>Թիվ</p>
                        <p className="pass_symbols">#&@<br/>Սիմվոլ</p>
                        <p className="pass_markers">8+<br/>Նշաններ</p>
                    </div>
                    <input type="password" placeholder="Գաղտնաբառի կրկնություն" onChange={confirm} className = "pass_confirm"></input>
                </form>
                <div className = "stud_buttons_div">
                    <button className="stud_button">Գրանցվել</button>
                    <button className="stud_button">Չեղարկել</button>
                </div>
            </div>
        </div>
    )
}

export default Trainer