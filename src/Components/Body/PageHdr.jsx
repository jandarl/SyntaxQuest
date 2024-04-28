import React from "react";
import './PageHdr.css';
import '/src/Components/fonts.css';

function PageHeader({title, description}){
    return(
        <div id="pageHdr" className="prevent-select">
            <h1 className="bungee-shade-regular" id="pageTitle">{title}</h1>
            <h6 className="vt323-regular" id="pageDesc">{description}</h6>
        </div>
    )
}

export default PageHeader;