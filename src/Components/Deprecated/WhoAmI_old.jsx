import React, {useState, useEffect} from "react";
import Collapsible from "react-collapsible";
import JSONData from '/src/Data/who-am-i.json';
import PageHeader from '/src/Components/Body/PageHdr';
import '/src/Components/Body/Content.css';
import '/src/Components/fonts.css';
import './WhoAmI.css';

function WhoAmI(){

    return(
        <>
        <div className="contentParent">
            <div className="HdrParent">
                <PageHeader title={JSONData.title} description={JSONData.description}/>
            </div>
            <div className="bodyParent">
            <Collapsible trigger={"Hobbies"} triggerClassName="triggerClose prevent-select wellfleet-regular"
                         triggerOpenedClassName="triggerOpen prevent-select wellfleet-regular"
                         contentOuterClassName="collapseContentOuter">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur justo ac interdum semper. Praesent vulputate sit amet felis a auctor. Sed tortor libero, finibus in sem at, varius pretium augue. Morbi ut dictum arcu. Sed facilisis ultrices magna a porta. Pellentesque sit amet viverra diam. Quisque dictum tristique ex id dignissim. Phasellus turpis sapien, suscipit sit amet porta quis, viverra in ante. Mauris eget nisi et enim vulputate posuere pharetra eu urna. Nulla bibendum sapien a mi tincidunt semper. Nunc ac risus eget massa iaculis pulvinar volutpat eget ex. Etiam id viverra ligula. Curabitur tincidunt massa vitae lacus fringilla, sed fermentum leo blandit.</p>
            </Collapsible>
            </div>
        </div>     
        </>
    )
}

export default WhoAmI;