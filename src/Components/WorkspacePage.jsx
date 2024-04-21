import React, {useState} from "react";
import SideBar from './NavBar/SideBar';
import ContentTemp from './Body/TempTestFiles/ContentTemp';
import WhoAmI from "./Body/WhoAmI/WhoAmI";
import './WorkspacePage.css';

function WorkspacePage({workspaceType, isWorkspace, workspaceMode}){

    const [topic, setTopic] = useState(workspaceType);

    function isWhoami()
    {
        switch(topic){

            case "who-am-i":
                return(<WhoAmI/>);
            break;

            default:
                return(<ContentTemp topic={topic}/>);
            break;
            
        }
    }

    return(
        <>
            <div id="wspaceParent">
                <SideBar workspaceType={workspaceType} setTopic={setTopic}/>
                {isWhoami()}
            </div>
        </>
    )
}

export default WorkspacePage;