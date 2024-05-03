import React from "react";
import Stack from 'react-bootstrap/Stack';
import '/src/Components/fonts.css';
import './ExpContent.css';

function ExpContent({title, subtitle, description, information}){
    return(
        <>
         <Stack className="ecParent" gap={3}>
            <div id="ecTitle">{title}</div>
            <div id="ecSubTitle">{subtitle}</div>
            <div className="ecScrollDiv">{description}</div>
            <div className="ecScrollDiv">{information}</div>
         </Stack>
        </>
    )
}

export default ExpContent;