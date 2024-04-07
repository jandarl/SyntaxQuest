import React from "react";
import PageHeader from './PageHeader/PageHdr'
import NavBar from './NavBar/NavBar'

function LandingPage({isWorkspace, workspaceMode}){
    return(
        <>        
        <PageHeader title={'Syntax Quest'} description={'SO​FTWARE DEVELOPMENT, GAMES AND LIFE'} />
        <NavBar isWorkspace={isWorkspace} workspaceMode={workspaceMode}/>
        </>
    )
}

export default LandingPage;