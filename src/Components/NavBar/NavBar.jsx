import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Tooltip } from 'react-tooltip';
import NavBarData from '/src/Data/nav-bar-data.json';
import './NavBar.css';
import '/src/Components/fonts.css';

function NavBar({isWorkspace, workspaceMode, vwSize}){

    const handleClick = (id) => {
        isWorkspace(true);
        workspaceMode(id);
    }

    const handleSocMedClick = (id) =>{
        NavBarData.links.map((link) =>
            {if(link.id === id){
                window.location.href=link.link;
            }}
        )
    }

    const handleHover = (id, hover) =>{
        if(hover === true){
            document.querySelector("#" + id).classList.add('highlight');
        }else{
            document.querySelector("#" + id).classList.remove('highlight');
        }
    }

    function useNavBar(){
        if(vwSize > 650){
            return(
                <div id="navParent" className="prevent-select">
                <div id="navBgndOvrlay"></div>
                    {NavBarData.NavBtn.map((item) => 
                        <div className="centerImg" id={item.divID} key={item.id}>
                        <img src={item.imgPath}  className="clickImg" id={item.imgID} onClick={() => handleClick(item.clickEvent)}/>
                        <h6 className="navName fugaz-one-regular" id={item.textID} onClick={() => handleClick(item.clickEvent)} 
                            onMouseEnter={() => handleHover(item.imgID, true)} onMouseLeave={() => handleHover(item.imgID, false)}>{item.text}</h6>
                        </div>
                    )} 
                    <div id="socMedDiv">
                    {NavBarData.links.map((item) =>
                    <div key={item.id}>
                        <img src={item.imgPath} id={item.imgID} onClick={() => handleSocMedClick(item.id)}/>
                        <Tooltip anchorSelect={"#" + item.imgID} place="bottom">{item.text}</Tooltip>
                    </div>
                    )}
                    </div>
                </div>
            )
        }else{
            return(
                <DropdownButton id="navDropdownBtn" title="Menu" size="lg">
                    {NavBarData.NavBtn.map((item) => 
                        <Dropdown.Item className="navDropItem courier-prime-regular" onClick={() => handleClick(item.clickEvent)} key={item.id}>
                        <img src={item.imgPath} className="navDropImg"/> {item.text} 
                        </Dropdown.Item>
                    )}
                    {NavBarData.links.map((item) => 
                        <Dropdown.Item className="navDropItem courier-prime-regular" onClick={() => handleSocMedClick(item.id)} key={item.id}>
                        <img src={item.imgPath} className="navDropImg"/> {item.text} 
                        </Dropdown.Item>
                    )}
                </DropdownButton>                
            )
        }
    }

    return(
        <>
        {useNavBar()}
        </>
    )
}

export default NavBar;