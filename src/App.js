import React from "react";
import Facs from "./Pages/Facs";
import "./styles/main.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Student from "./Registration/Student";
import Order from "./Pages/Order"
import Courses from "./Components/Courses/Courses";
import FacApp from "./Components/FacNew/FacApp";
import ServicesApp from "./Components/ServicesApp/ServiceApp";
import Service from './Services/Service';
import Com from './Components/ComingSoon/Com'

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<HomePage/>}></Route>
        <Route path = "/Facs" element = {<Facs/>}></Route>
        <Route path = "/Student" element = {<Student/>}></Route>
        <Route path = "/Order" element = {<Order/>}></Route>
        <Route path = "/Courses" element = {<Courses/>}></Route>
        <Route path = "/Services" element = {<Service/>}> </Route>
        <Route path = "/FacApp" element = {<FacApp/>}></Route>
        <Route path="/ServicesApp" element = {<ServicesApp/>}></Route>
        <Route path = "/Com" element = {<Com/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
  

export default App