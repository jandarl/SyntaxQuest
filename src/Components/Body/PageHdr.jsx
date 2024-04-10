import React from "react";
import './PageHdr.css'

function PageHeader({title, description}){
    return(
        <div id="pageHdr">
            <h1 className="bungee-shade-regular" id="pageTitle">{title}</h1>
            <h6 className="fugaz-one-regular" id="pageDesc">{description}</h6>
        </div>
    )
}

export default PageHeader;