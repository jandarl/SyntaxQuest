import React, {useState, useEffect} from "react";
import PageHeader from './Body/PageHdr';
import NavBar from './NavBar/NavBar';

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

    function UseNavBar(){
        console.log(windowDimensions.width);
        console.log(windowDimensions.height);
    }

    return(
        <>        
        <PageHeader title={'Syntax Quest'} description={'Software / Games / Sci-Fi / Fantasy / Knowledge / Life'} />
        <NavBar isWorkspace={isWorkspace} workspaceMode={workspaceMode}/>
        {UseNavBar()}
        </>
    )
}

export default LandingPage;