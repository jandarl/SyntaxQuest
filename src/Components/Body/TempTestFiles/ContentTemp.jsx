import React, { useState } from "react";
import PageHeader from "/src/Components/Body/PageHdr";
import ContentBodyTemp from "./ContentBodyTemp";
import './ContentTemp.css';
import isProd from "./CheckEnv";

function ContentTemp({topic}){

    const [itemID, setItemID] = useState("");
    const [itemTitle, setItemTitle] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemBody, setItemBody] = useState("");
    const [defaultDir, setDefaultDir] = useState("/src/Data/");

    function setData(props){
        setItemID(props.id);
        setItemTitle(props.title);
        setItemDescription(props.description);
        setItemBody(props.content);
    }

    function FetchData(filename){

        if(isProd() === true){
            setDefaultDir("https://" + `${process.env.VERCEL_URL}` + "/src/Data/") ;
        }

       const filepath = defaultDir + filename;

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
                <ContentBodyTemp content={itemBody}/>
            </div>
        </div>
        </>
    )
}

export default ContentTemp;