import React, {useState, useEffect} from "react";
import SideBar from './NavBar/SideBar';
import ContentTemp from './Body/TempTestFiles/ContentTemp';
import WhoAmI from "./Body/WhoAmI/WhoAmI";
import SyntaxQuest from "./Body/SoftwareDev/SyntaxQuest/SyntaxQuest";
import WebsiteHist from "./Body/WebsiteHistory";
import './WorkspacePage.css';

function WorkspacePage({workspaceType, isWorkspace, workspaceMode}){

    const [topic, setTopic] = useState(workspaceType);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
        setWindowDimensions(getWindowDimensions()); }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;

        return {
            width,
            height
        };
    }

    function getTopic()
    {
        switch(topic){

            case "who-am-i":
                return(<WhoAmI vwSize={windowDimensions.width} setTopic={setTopic} isWorkspace={isWorkspace}/>);
            break;

            case "syntax-quest":
                return (<SyntaxQuest vwSize={windowDimensions.width} isWorkspace={isWorkspace}/>);
            break;

            case "website-history":
                return (<WebsiteHist vwSize={windowDimensions.width} isWorkspace={isWorkspace}/>)

            default:
                return(<ContentTemp topic={topic} vwSize={windowDimensions.width} isWorkspace={isWorkspace}/>);
            break;
            
        }
    }

    return(
        <>
            <div id="wspaceParent">
                <SideBar workspaceType={workspaceType} setTopic={setTopic} vwSize={windowDimensions.width}/>
                {getTopic()}
            </div>
        </>
    )
}

export default WorkspacePage;