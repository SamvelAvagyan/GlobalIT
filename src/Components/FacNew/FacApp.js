import {memo, React, useEffect, useState} from "react";
import OurWorks from "./OurWorks";
import Web from "./Web";
import WebTypes from "./WebTypes";
import YouOwn from "./YouOwn";
import Header from './../Facultets/Header';
import Footer from './../Facultets/Footer';
import "../../styles/fac-new.css";
import { useLocation } from 'react-router-dom'

 function FacApp() {
	const location = useLocation();
    const { title } = location.state;
	const [ service, setService ] = useState({});

    useEffect(() => {
        getService();
    }, [])

    async function getService(){
        let response = await fetch(
			"http://localhost:8000/kjsamcpPIBYXTvnooHTCVIyUCTCUxxrRMoK/service-list/"
		);
        let obj = await response.json();
        for(let i = 0; i < obj.length; i++){
            if(obj[i].title === title){
                setService(obj[i]);
                break;
            }
        }
    }

	return (
		<div>
            <Header/>
			<Web service={service}/>
			<YouOwn service={service}/>
			<OurWorks service={service}/>
			<WebTypes service={service}/>
            <Footer/>
		</div>
	);
}

export default memo(FacApp)
