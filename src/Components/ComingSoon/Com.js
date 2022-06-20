import React from 'react'
import Header from '../Facultets/Header'
import "./comingsoon.css"
import coming from '../../images/Comingbg.png'

function Com() {
  return (
    <div>
    <Header />  
      <img src={coming} className = "container_com"></img>
    </div>
  )
}

export default Com;
