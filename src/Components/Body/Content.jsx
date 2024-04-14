import React, { useState } from "react";
import PageHeader from "./PageHdr";
import ContentBody from "./ContentBody";
import './Content.css';

function Content({topic}){

    const [itemID, setItemID] = useState("");
    const [itemTitle, setItemTitle] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemBody, setItemBody] = useState("");
    const vercel_path = "https://${process.env.VERCEL_URL}";

    function setData(props){
        setItemID(props.id);
        setItemTitle(props.title);
        setItemDescription(props.description);
        setItemBody(props.content);
    }

    function FetchData(filename){
        const filepath = vercel_path + "/src/Data/" + filename;

        fetch(`${filepath}.json`).then(response => response.json()).then(
            data => setData(data)
        )
    }

    return(
        <>
        {FetchData(topic)}
        <div id="contentParent">
            <div id="HdrParent">
                <PageHeader title={itemTitle} description={itemDescription}/>
            </div>
            <div id="bodyParent">
                <ContentBody content={itemBody}/>
            </div>
        </div>
        </>
    )
}

export default Content;