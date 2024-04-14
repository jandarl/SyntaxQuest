import React from "react";
import PageHeader from './Body/PageHdr'
import NavBar from './NavBar/NavBar'

function LandingPage({isWorkspace, workspaceMode}){
    return(
        <>        
        <PageHeader title={'Syntax Quest'} description={'I am Drew Hernandez, I am a Software Engineer that loves Video Games and Coffee'} />
        <NavBar isWorkspace={isWorkspace} workspaceMode={workspaceMode}/>
        </>
    )
}

export default LandingPage;