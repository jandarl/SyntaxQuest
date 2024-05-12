import React, { useState, useEffect } from "react";
import PageHeader from "/src/Components/Body/PageHdr";
import ContentBodyTemp from "./ContentBodyTemp";
import JSONFFRebirth from '/src/Data/final-fantasy-vii-rebirth.json';
import './ContentTemp.css';
import isProd from "./CheckEnv";

function ContentTemp({topic, vwSize}){

    const [itemID, setItemID] = useState("");
    const [itemTitle, setItemTitle] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemBody, setItemBody] = useState("");
    const [defaultDir, setDefaultDir] = useState("/src/Data/");
    const [isInit, setInit] = useState(false);

    useEffect(() => {
        if(isInit === false){
            setInit(true);
            setData(JSONFFRebirth);
        }
    })

    function setData(props){
        setItemID(props.id);
        setItemTitle(props.title);
        setItemDescription(props.description);
        setItemBody(props.content);
    }

    /*function FetchData(filename){

        if(isProd() === true){
            setDefaultDir("https://" + `${process.env.VERCEL_URL}` + "/src/Data/") ;
        }

       const filepath = defaultDir + filename;

        fetch(`${filepath}.json`).then(response => response.json()).then(
            data => setData(data)
        )

        setData(JSONFFRebirth);
    }*/

    return(
        <>
        <div id={vwSize > 650 ? "contentParent" : "smallContentParent"}>
            <div id="HdrParent">
                <PageHeader title={itemTitle} description={itemDescription}/>
            </div>
            <div id={vwSize > 650 ? "bodyParent" : "smallBodyParent"}>
                <ContentBodyTemp content={itemBody}/>
            </div>
        </div>
        </>
    )
}

export default ContentTemp;