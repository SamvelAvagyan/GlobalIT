import React, { useState } from "react";
import "../styles/regless.css";
import vector_arrow from "../img/Vector.svg";

function Register_less(props) {
  

  return (
    <div>
      <div className="container">
        <p className="regless-title">Գրանցվել դասընթացին</p>
        <form>
          <input type="text" placeholder="Անուն" onChange={handleNameChange}/>
          <input type="text" placeholder="Ազգանուն" onChange={handleSurnameChange} />
          <input type="tel" placeholder="Հեռախոսահամար" onChange={handlePhoneChange}/>
          <input
            placeholder="Դասընթացի անցկացման վայրը"
            className="regless-input-select"
            onChange={handlePlaceChange}
          />
          <img className="vector_arrow" src={vector_arrow} alt="vector" />
          {/* <div className="dropdown-place">
                        <p className="dropdown-options">Երևան</p>
                        <p className="dropdown-options">Մարզերում</p>
                        <p className="dropdown-options">Միջազգային</p>
                    </div> */}
          <select>
            <div style={{}}></div>
          </select>
          <input
            type="text"
            placeholder="Դասընթացի անցկացման լեզուն"
            className="regless-input-select"
            onChange={handleLanguageChange}
          />
          <div className="dropdown-lang">
            <p className="dropdown-options">Հայերեն</p>
            <p className="dropdown-options">Русский</p>
            <p className="dropdown-options">English</p>
          </div>
          <input
            type="text"
            placeholder="Դասընթացի անցկացման տարբերակը"
            className="regless-input-select"
            onChange={handleTypeChange}
          />
          <div className="dropdown-var">
            <p className="dropdown-options">Անհատական</p>
            <p className="dropdown-options">Խմբային</p>
          </div>
          <button className="regless-button" onClick={submitButtonClick}>Գրանցվել</button>
        </form>
      </div>
    </div>
  );
}

export default Register_less;
