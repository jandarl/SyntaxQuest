import React, {useState} from "react";
import SideBar from './NavBar/SideBar'
import Content from './Body/Content'
import './WorkspacePage.css'

function WorkspacePage({workspaceType, isWorkspace, workspaceMode}){

    const [topic, setTopic] = useState("");

    return(
        <>
            <div id="wspaceParent">
                <SideBar setTopic={setTopic}/>
                <Content topic={topic}/>
            </div>
        </>
    )
}

export default WorkspacePage;