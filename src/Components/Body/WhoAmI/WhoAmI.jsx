import React, {useState, useEffect} from "react";
import Accordion from "react-bootstrap/Accordion";
import JSONData from '/src/Data/who-am-i.json';
import PageHeader from '/src/Components/Body/PageHdr';
import Hobbies from "./Hobbies/Hobbies";
import Experience from "./Experience/Experience";
import '/src/Components/Body/Content.css';
import '/src/Components/fonts.css';
import './WhoAmI.css';

function WhoAmI({vwSize, setTopic}){
    return(
        <>
        <div className={vwSize > 650 ? "contentParent" : "smallContentParent"}>
            <div className="HdrParent">
                <PageHeader title={JSONData.title} description={JSONData.description}/>
            </div>
            <div className={vwSize > 650 ? "bodyParent" : "smallBodyParent"}>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="fugaz-one-regular">Hobbies</Accordion.Header>
                    <Accordion.Body className="wellfleet-regular"> 
                        <Hobbies />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className="fugaz-one-regular">Experience</Accordion.Header>
                    <Accordion.Body>
                        <Experience setTopic={setTopic}/>            
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
        </div>     
        </>
    )
}

export default WhoAmI;