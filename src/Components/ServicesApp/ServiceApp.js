import { React, useEffect, useState } from "react";
import "../../styles/services-app.css"
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Header from "../../Components/Facultets/Header";
import Footer from "../../Components/Facultets/Footer";
import { useLocation } from "react-router-dom";


function ServicesApp() {
	const [ course, setCourse ] = useState({});
	const location = useLocation();
    const { title } = location.state;

	useEffect(() => {
        getCourse();
    }, [])

    function getCourse(){
        let response = fetch(
			"https://test.globalitc.am/kjsamcpPIBYXTvnooHTCVIyUCTCUxxrRMoK/course-list/"
		).then((response) => response.json()).then((response) => {
			for(let i = 0; i < response.length; i++){
				if(response[i].title === title){
					setCourse(response[i]);
					break;
				}
			}
		});
        
        
    }

	return (
		<div>
		<Header/>
			<Section1 course={course}/>
			<Section2 course={course}/>
			<Section3 course={course}/>
			<Section4 course={course}/>
			<Section5 course={course}/>
			<Footer/>
		</div>
	);
}

export default ServicesApp;
