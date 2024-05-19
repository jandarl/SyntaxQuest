import React, {useState} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { Tooltip } from 'react-tooltip';
import '/src/Components/fonts.css';
import './CodeSection.css';

function CodeSection({title, description, code}){

    const [copyIcon, setCopyIcon] = useState("/copycode.png");

    const onCopyHandler = () => {
        setCopyIcon("/copied.png");
        setTimeout(() => setCopyIcon("/copycode.png"), 1000); 
    };

    return(
        <>
        <h3 id="codeSectionTitle" className="fugaz-one-regular">{title}</h3>
        <p id="codeSectionDescription" className="courier-prime-regular">{description}</p>
        <section id="codeSecSnippetSection"> 
            <CopyToClipboard text={code} onCopy={onCopyHandler}>
                <img src={copyIcon} className="copyImg"/>
            </CopyToClipboard>
            <Tooltip anchorSelect=".copyImg" place="top">Copy</Tooltip>
            <code id="codeSectionSnippet">{code}</code>
        </section>
        </>
    );
}

export default CodeSection;