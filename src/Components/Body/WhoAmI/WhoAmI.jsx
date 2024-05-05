import React, {useState, useEffect} from "react";
import Accordion from "react-bootstrap/Accordion";
import JSONData from '/src/Data/who-am-i.json';
import PageHeader from '/src/Components/Body/PageHdr';
import Experience from "./Experience/Experience";
import '/src/Components/Body/Content.css';
import '/src/Components/fonts.css';
import './WhoAmI.css';

function WhoAmI({vwSize}){
    return(
        <>
        <div className={vwSize > 650 ? "contentParent" : "smallContentParent"}>
            <div className="HdrParent">
                <PageHeader title={JSONData.title} description={JSONData.description}/>
            </div>
            <div className={vwSize > 650 ? "bodyParent" : "smallBodyParent"}>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="fugaz-one-regular">Hobbies</Accordion.Header>
                    <Accordion.Body className="wellfleet-regular">            
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur justo ac interdum semper. Praesent vulputate sit amet felis a auctor. Sed tortor libero, finibus in sem at, varius pretium augue. Morbi ut dictum arcu. Sed facilisis ultrices magna a porta. Pellentesque sit amet viverra diam. Quisque dictum tristique ex id dignissim. Phasellus turpis sapien, suscipit sit amet porta quis, viverra in ante. Mauris eget nisi et enim vulputate posuere pharetra eu urna. Nulla bibendum sapien a mi tincidunt semper. Nunc ac risus eget massa iaculis pulvinar volutpat eget ex. Etiam id viverra ligula. Curabitur tincidunt massa vitae lacus fringilla, sed fermentum leo blandit.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header className="fugaz-one-regular">Experience</Accordion.Header>
                    <Accordion.Body>
                        <Experience />            
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            </div>
        </div>     
        </>
    )
}

export default WhoAmI;