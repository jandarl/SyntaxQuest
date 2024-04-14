import React, {useEffect, useState} from "react";
import Collapsible from 'react-collapsible';
import './SideBar.css'
import '/src/fonts.css'

function Sidebar({workspaceType, setTopic}){

    const [showVGames, setShowVGames] = useState(false);
    const [showSoftDev, setShowSoftDev] = useState(false);
    const [showLife, setShowLife] = useState(false);
    const [isInit, setInit] = useState(false);

    useEffect(() => {
        if(isInit === false){
            setInit(true);
            initSidebar();
        }
    })

    function initSidebar(){
        switch(workspaceType){
            case "Video Games":
                setShowVGames(true);
                setShowSoftDev(false);
                setShowLife(false);
                break;
            case "Software Development":
                setShowVGames(false);
                setShowSoftDev(true);
                setShowLife(false);
                break;
            case "Live Your Life":
                setShowVGames(false);
                setShowSoftDev(false);
                setShowLife(true);
                break;
           }
    }

    function handleOpening(){
       var text = this.trigger;

       switch(text){
        case "Video Games":
            setShowVGames(true);
            setShowSoftDev(false);
            setShowLife(false);
            break;
        case "Software Development":
            setShowVGames(false);
            setShowSoftDev(true);
            setShowLife(false);
            break;
        case "Live Your Life":
            setShowVGames(false);
            setShowSoftDev(false);
            setShowLife(true);
            break;
       }
    }

    function handleClick(event){
        setTopic(event.target.id);
    }

    return (
        <div id="sideParent" className="prevent-select">
        <Collapsible className="collapseParent" openedClassName="openParent" onOpening={handleOpening} open={showVGames} trigger="Video Games">
            <ul className="sideList" id="vgameList">
                <li className="listItem" onClick={handleClick} id="final-fantasy-vii-rebirth">Final Fantasy VII Rebirth</li>
                <li className="listItem" onClick={handleClick} id="final-fantasy-xiv">Final Fantasy XIV</li>
                <li className="listItem" onClick={handleClick} id="final-fantasy-xvi">Final Fantasy XVI</li>
                <li className="listItem" onClick={handleClick} id="chrono-cross">Chrono Cross</li>
            </ul>
        </Collapsible>
        <Collapsible className="collapseParent" openedClassName="openParent" onOpening={handleOpening} open={showSoftDev} trigger="Software Development">
            <ul className="sideList" id="softdev">
                <li className="listItem" onClick={handleClick} id="c++">C++</li>
                <li className="listItem" onClick={handleClick} id="react">React</li>
                <li className="listItem" onClick={handleClick} id="python">Python</li>
            </ul>
        </Collapsible>
        <Collapsible className="collapseParent" openedClassName="openParent" onOpening={handleOpening} open={showLife} trigger="Live Your Life">
            <ul className="sideList" id="softdev">
                <li className="listItem" onClick={handleClick} id="quotes">Quotes</li>
                <li className="listItem" onClick={handleClick} id="thoughts">Thoughts</li>
                <li className="listItem" onClick={handleClick} id="experience">Experience</li>
            </ul>
        </Collapsible>
        </div>
    )
}

export default Sidebar;