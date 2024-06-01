import React from "react";
import '/src/Components/fonts.css';
import './ContentBodyTemp.css';

function ContentBodyTemp({content}){
    return(
        <div id="contentTempBody" className="wellfleet-regular">
            {content}
        </div>
    )
}

export default ContentBodyTemp;