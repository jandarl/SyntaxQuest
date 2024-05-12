import React, {useState, useEffect} from "react";
import SideBar from './NavBar/SideBar';
import ContentTemp from './Body/TempTestFiles/ContentTemp';
import WhoAmI from "./Body/WhoAmI/WhoAmI";
import SyntaxQuest from "./Body/SoftwareDev/SyntaxQuest";
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
                return(<WhoAmI vwSize={windowDimensions.width} setTopic={setTopic}/>);
            break;

            case "syntax-quest":
                return (<SyntaxQuest vwSize={windowDimensions.width}/>);
            break;

            default:
                return(<ContentTemp topic={topic} vwSize={windowDimensions.width}/>);
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