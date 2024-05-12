import React, {useState, useEffect} from "react";
import PageHeader from './Body/PageHdr';
import NavBar from './NavBar/NavBar';
import '/src/Components/Body/Content.css';

function LandingPage({isWorkspace, workspaceMode}){

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
    
    return(
        <>
        <div className="noWidthHdrParent">
            <PageHeader title={'Syntax Quest'} description={'Software / Games / Sci-Fi / Fantasy / Knowledge / Life'} />    
        </div>       
        <NavBar isWorkspace={isWorkspace} workspaceMode={workspaceMode} vwSize={windowDimensions.width}/>
        </>
    )
}

export default LandingPage;