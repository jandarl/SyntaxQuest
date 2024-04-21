import React, {useState, useEffect} from "react";
import JSONData from '/src/Data/who-am-i.json';
import PageHeader from '/src/Components/Body/PageHdr';
import '/src/Components/Body/Content.css';
import './WhoAmI.css';

function WhoAmI(){

    return(
        <>
        <div className="contentParent">
            <div className="HdrParent">
                <PageHeader title={JSONData.title} description={JSONData.description}/>
            </div>
        </div>     
        </>
    )
}

export default WhoAmI;