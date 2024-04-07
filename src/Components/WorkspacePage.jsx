import React from "react";

function WorkspacePage({workspaceType, isWorkspace, workspaceMode}){
    return(
        <>
            <div id="wspaceParent">
                <h1>{workspaceType}</h1>
            </div>
        </>
    )
}

export default WorkspacePage;