import React from "react";
import Stack from 'react-bootstrap/Stack';
import '/src/Components/fonts.css';
import './ExpContent.css';

function ExpContent({title, subtitle, description, information}){
    return(
        <>
         <Stack className="ecParent" gap={3}>
            <div id="ecTitle" className="courier-prime-bold">{title}</div>
            <div id="ecSubTitle" className="courier-prime-bold">{subtitle}</div>
            <div className="ecScrollDiv courier-prime-regular">
            <h5>Responsibilities and Projects:</h5>
            <ul>
                {description.map((item) => 
                    <li key={item}>{item}</li>
                )} 
            </ul>
            </div>
            <div className="ecScrollDiv courier-prime-regular">
            <h5>Skills Acquired:</h5>
            <ul>
                {information.map((item) => 
                    <li key={item}>{item}</li>
                )} 
            </ul>
            </div>
         </Stack>
        </>
    )
}

export default ExpContent;