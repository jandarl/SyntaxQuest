import React, {useEffect, useState} from "react";
import Collapsible from 'react-collapsible';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import SideBarData from '/src/Data/side-bar-data.json';
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

        var menuIndex = -1;

        SideBarData.menu.map((menus, index) => {
            if(menus.id === value){
                menuIndex = index;
            }

            menus.items.map((item) => 
                {if(item.id === value){
                    menuIndex = index;
            }})
        })

        switch(menuIndex){
            case 0: setShowVGames(true); break;
            case 1: setShowSoftDev(true); break;
            case 2: setShowLife(true); break;
            default:
                setShowLife(true); break;
        }
    }

    function handleOpening(){
       toggleCollapsible(this.value);
    }

    function handleClick(event){
        setTopic(event.target.id);
    }

    function getTrigger(id){
        switch(id){
            case "video-games": return showVGames; break;
            case "software-dev": return showSoftDev; break;
            case "life-experience": return showLife; break;
            default:
                return showLife; break;
        }
    }

    function theMenu(){
        return(
            <>
            {SideBarData.menu.map((menus) => 
                <Collapsible className="collapseParent" openedClassName="openParent" onOpening={handleOpening}  
                             open={getTrigger(menus.id)} trigger={menus.text} value={menus.id} key={menus.id}>
                    <ul className="sideList" id={menus.listID}>
                        {menus.items.map((item) => 
                            <li className="listItem" onClick={handleClick} id={item.id} key={item.id}>{item.text}</li>
                        )}
                    </ul>
                </Collapsible>
            )} 
            </>
        )
    }

    function useSideBar(){
        if(vwSize > 650){
            return(
                <div id="sideParent" className="prevent-select">
                    {theMenu()}    
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
                        {theMenu()}
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