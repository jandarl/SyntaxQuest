import React, {useState} from "react";
import Collapsible from 'react-collapsible';
import './SideBar.css'

function Sidebar({setTopic}){

    const [showVGames, setShowVGames] = useState(false);
    const [showSoftDev, setShowSoftDev] = useState(false);
    const [showLife, setShowLife] = useState(false);

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
        var text = event.target.innerHTML;
        setTopic(text);
    }

    return (
        <div id="sideParent">
        <div id="sideBgndOvrlay">
        <Collapsible className="collapseParent" openedClassName="openParent" onOpening={handleOpening} open={showVGames} trigger="Video Games">
            <ul className="sideList" id="vgameList">
                <li className="listItem" onClick={handleClick}>Final Fantasy VII Rebirth</li>
                <li className="listItem" onClick={handleClick}>Final Fantasy XIV</li>
                <li className="listItem" onClick={handleClick}>Final Fantasy XVI</li>
            </ul>
        </Collapsible>
        <Collapsible className="collapseParent" openedClassName="openParent" onOpening={handleOpening} open={showSoftDev} trigger="Software Development">
            <ul className="sideList" id="softdev">
                <li className="listItem" onClick={handleClick}>C++</li>
                <li className="listItem" onClick={handleClick}>React</li>
                <li className="listItem" onClick={handleClick}>Python</li>
            </ul>
        </Collapsible>
        <Collapsible className="collapseParent" openedClassName="openParent" onOpening={handleOpening} open={showLife} trigger="Live Your Life">
            <ul className="sideList" id="softdev">
                <li className="listItem" onClick={handleClick}>Quotes</li>
                <li className="listItem" onClick={handleClick}>Thoughts</li>
                <li className="listItem" onClick={handleClick}>Experience</li>
            </ul>
        </Collapsible>
        </div>
        </div>
    )
}

export default Sidebar;