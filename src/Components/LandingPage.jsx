import React from "react";
import PageHeader from './Body/PageHdr';
import NavBar from './NavBar/NavBar';

function LandingPage({isWorkspace, workspaceMode}){
    return(
        <>        
        <PageHeader title={'Syntax Quest'} description={'Software / Games / Sci-Fi / Fantasy / Knowledge / Life'} />
        <NavBar isWorkspace={isWorkspace} workspaceMode={workspaceMode}/>
        </>
    )
}

export default LandingPage;