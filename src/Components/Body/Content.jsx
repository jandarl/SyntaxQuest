import React from "react";
import PageHeader from "./PageHdr";
import ContentBody from "./ContentBody";
import './Content.css';

function Content({topic}){
    return(
        <>
        <div id="contentParent">
        <PageHeader title={topic} description={topic}/>
        </div>
        <ContentBody topic={topic}/>
        </>
    )
}

export default Content;