import React from "react";
import './PageHdr.css'

function PageHeader({title, description}){
    return(
        <div id="pageHdr">
            <h1 id="pageTitle">{title}</h1>
            <h6 id="pageDesc">{description}</h6>
        </div>
    )
}

export default PageHeader;