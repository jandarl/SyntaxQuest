import React, {useEffect, useState} from "react";
import Collapsible from 'react-collapsible';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './SideBar.css';
import '/src/Components/fonts.css';

function Sidebar({workspaceType, setTopic, vwSize}){

    const [showVGames, setShowVGames] = useState(false);
    const [showSoftDev, setShowSoftDev] = useState(false);
    const [showLife, setShowLife] = useState(false);
    const [isInit, setInit] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if(isInit === false){
            setInit(true);
            toggleCollapsible(workspaceType);
        }
    })

    function toggleCollapsible(value){
        setShowVGames(false);
        setShowSoftDev(false);
        setShowLife(false);

        switch(value){
            case "video-games":
                setShowVGames(true);
                break;
            case "software-dev":
                setShowSoftDev(true);
                break;
            case "who-am-i":
            case "life-experience":
                setShowLife(true);
                break;
           }
    }

    function handleOpening(){
       toggleCollapsible(this.value);
    }

    function handleClick(event){
        setTopic(event.target.id);
    }

    function useSideBar(){
        if(vwSize > 650){
            return(
                <div id="sideParent" className="prevent-select">
                    <Collapsible className="collapseParent" openedClassName="openParent" onOpening={handleOpening} 
                                open={showVGames} trigger="Video Games" value="video-games">
                        <ul className="sideList" id="vgameList">
                            <li className="listItem" onClick={handleClick} id="final-fantasy-vii-rebirth">Final Fantasy VII Rebirth</li>
                            <li className="listItem" onClick={handleClick} id="final-fantasy-xiv">Final Fantasy XIV</li>
                            <li className="listItem" onClick={handleClick} id="final-fantasy-xvi">Final Fantasy XVI</li>
                            <li className="listItem" onClick={handleClick} id="chrono-cross">Chrono Cross</li>
                        </ul>
                    </Collapsible>
                    <Collapsible className="collapseParent" openedClassName="openParent" onOpening={handleOpening} 
                                 open={showSoftDev} trigger="Software Development" value="software-dev">
                        <ul className="sideList" id="softdev">
                            <li className="listItem" onClick={handleClick} id="c++">C++</li>
                            <li className="listItem" onClick={handleClick} id="react">React</li>
                            <li className="listItem" onClick={handleClick} id="python">Python</li>
                        </ul>
                    </Collapsible>
                    <Collapsible className="collapseParent" openedClassName="openParent" onOpening={handleOpening} 
                                open={showLife} trigger="Life Experience" value="life-experience">
                        <ul className="sideList" id="lifeexp">
                            <li className="listItem" onClick={handleClick} id="who-am-i">Who Am I?</li>
                        </ul>
                    </Collapsible>
                </div>
            )
        }else{
            return(
                <>
                <Button id="offCanvasBtn" variant="primary" onClick={handleShow}>
                    Menu
                </Button>
                
                <Offcanvas id="offCanvasMenu" show={show} onHide={handleClose}>
                    <Offcanvas.Body>
                        <Collapsible className="collapseParent" openedClassName="openParent" onOpening={handleOpening} 
                                     open={showVGames} trigger="Video Games" value="video-games">
                            <ul className="sideList" id="vgameList">
                                <li className="listItem" onClick={handleClick} id="final-fantasy-vii-rebirth">Final Fantasy VII Rebirth</li>
                                <li className="listItem" onClick={handleClick} id="final-fantasy-xiv">Final Fantasy XIV</li>
                                <li className="listItem" onClick={handleClick} id="final-fantasy-xvi">Final Fantasy XVI</li>
                                <li className="listItem" onClick={handleClick} id="chrono-cross">Chrono Cross</li>
                            </ul>
                        </Collapsible>
                        <Collapsible className="collapseParent" openedClassName="openParent" onOpening={handleOpening} 
                                 open={showSoftDev} trigger="Software Development" value="software-dev">
                            <ul className="sideList" id="softdev">
                                <li className="listItem" onClick={handleClick} id="c++">C++</li>
                                <li className="listItem" onClick={handleClick} id="react">React</li>
                                <li className="listItem" onClick={handleClick} id="python">Python</li>
                            </ul>
                        </Collapsible>
                        <Collapsible className="collapseParent" openedClassName="openParent" onOpening={handleOpening} 
                                open={showLife} trigger="Life Experience" value="life-experience">
                            <ul className="sideList" id="lifeexp">
                                <li className="listItem" onClick={handleClick} id="who-am-i">Who Am I?</li>
                            </ul>
                        </Collapsible>
                    </Offcanvas.Body>
                </Offcanvas>
                </>
            )
        }
    }

    return (
        <>
        {useSideBar()}
        </>
    )
}

export default Sidebar;