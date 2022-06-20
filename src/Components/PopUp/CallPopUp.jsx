import React from "react";
import logo from "../Facultets/img/Logo.png"
import Button from "../../UI/Button";
import "./callpopup.css"
import { useState } from "react";
import "./Inputs.css"

const CallPopUp = () => { 
    const [orderCall, setOrderCall] = useState({});

    async function submitButtonClick(){
        await fetch('https://test.globalitc.am/kjsamcpPIBYXTvnooHTCVIyUCTCUxxrRMoK/order-call-list/', {
			method: 'POST',
			body: JSON.stringify(orderCall), 
			headers: {      
			  'Content-Type': 'application/json'
			}
		});
    }

    const handleDateChange = (e) =>{
        setOrderCall({
            ...orderCall, date: e.target.value
        })

    }

    const handlePhoneChange = (e) =>{
        setOrderCall({
            ...orderCall, phone: e.target.value
        })
    }

    const handleFullNameChange = (e) =>{
        setOrderCall({
            ...orderCall, fullname: e.target.value
        })
    }

    return(
        <div className="modal-container-wrapper">
           <img src = {logo} className = "modal-logo"/>
           <Button/>
           <p className="modal-title">Պատվիրել զանգ</p>
           <form className="call-form" onSubmit={submitButtonClick}>
               <input className = "input" type = "text" placeholder = "Անուն ազգանուն հայրանուն" onChange={handleFullNameChange}/>
               <input className = "input" type = "datetime-local"  onChange={handleDateChange}/>
               <input className = "input" type = "tel" placeholder = "Հեռախոսահամար"  onChange={handlePhoneChange}/>
               <button className="modal-button">Պատվիրել</button>
            </form>
        </div>
    )
}

export default CallPopUp