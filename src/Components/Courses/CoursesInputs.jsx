import React from "react";
import Inputs from "../Inputs";
const CoursesInputs = ({ student, setStudent, courseTitle }) =>{
    const handleInputChange = (e) => {
        setStudent({
            ...student, [e.target.name]: e.target.value, course: courseTitle
        })
    }

    return(
        <div className="inputs">
            {Inputs.map(
                x=>
                <input type={x.type} placeholder = {x.placeholder} key = {x.id} className = "main-inputs" name={x.title} onChange={handleInputChange}/>
            )}
        </div>
    )
}

export default CoursesInputs