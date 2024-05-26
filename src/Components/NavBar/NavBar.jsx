import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Tooltip } from 'react-tooltip';
import VidGameImg from '/videogame.png';
import SwPgmImg from '/swpgm.png';
import WhoAmIImg from '/whoami.png';
import LinkedInImg from '/linkedIn.png';
import EmailImg from '/email.png';
import './NavBar.css';
import '/src/Components/fonts.css';

function NavBar({isWorkspace, workspaceMode, vwSize}){

    const handleClick = (id) => {
        isWorkspace(true);
        workspaceMode(id);
    }

    const handleSocMedClick = (id) =>{

        switch(id){
            case "LinkedIn":
                window.location.href='https://www.linkedin.com/in/john-andrew-hernandez-94b908102/';
            break;

            case "Email":
                window.location.href='mailto:drew.c.hernandez@gmail.com';
            break;

            default:
                window.location.href='https://www.linkedin.com/in/john-andrew-hernandez-94b908102/';
            break;
        }
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
                    <div className="centerImg" id="vgameDiv">
                        <img src={VidGameImg}  className="clickImg" id="vgameImage" 
                        onClick={() => handleClick("final-fantasy-vii-rebirth")}/>
                        <h6 className="navName fugaz-one-regular" id="navVGames" 
                            onClick={() => handleClick("final-fantasy-vii-rebirth")} 
                            onMouseEnter={() => handleHover("vgameImage", true)}
                            onMouseLeave={() => handleHover("vgameImage", false)}>Video Games</h6>
                    </div>
                    <div className="centerImg" id="swpgmDiv">
                        <img src={SwPgmImg}  className="clickImg" id="swpgmImage" 
                        onClick={() => handleClick("syntax-quest")}/>
                        <h6 className="navName fugaz-one-regular" id="navSwpgm" 
                            onClick={() => handleClick("syntax-quest")} 
                            onMouseEnter={() => handleHover("swpgmImage", true)}
                            onMouseLeave={() => handleHover("swpgmImage", false)}>Software Dev.</h6>
                    </div>
                    <div className="centerImg" id="whoamiDiv">
                        <img src={WhoAmIImg} className="clickImg" id="whoamiImage" 
                        onClick={() => handleClick("who-am-i")}/>
                        <h6 className="navName fugaz-one-regular" id="navWhoami"
                            onClick={() => handleClick("who-am-i")}
                            onMouseEnter={() => handleHover("whoamiImage", true)}
                            onMouseLeave={() => handleHover("whoamiImage", false)}>Who Am I?</h6>
                    </div>
                    <div id="socMedDiv">
                        <img src={LinkedInImg} id="LinkedInImg" 
                        onClick={() => handleSocMedClick("LinkedIn")}/>
                        <Tooltip anchorSelect="#LinkedInImg" place="bottom">LinkedIn</Tooltip>
                        <img src={EmailImg} id="EmailImg" 
                        onClick={() => handleSocMedClick("Email")}/>
                        <Tooltip anchorSelect="#EmailImg" place="bottom">drew.c.hernandez@gmail.com</Tooltip>
                    </div>
                </div>
            )
        }else{
            return(
                <DropdownButton id="navDropdownBtn" title="Menu" size={vwSize}>
                    <Dropdown.Item className="navDropItem fugaz-one-regular" onClick={() => handleClick("final-fantasy-vii-rebirth")}>
                        <img src={VidGameImg} className="navDropImg"/> Video Games 
                    </Dropdown.Item>
                    <Dropdown.Item className="navDropItem fugaz-one-regular" onClick={() => handleClick("syntax-quest")}>
                        <img src={SwPgmImg} className="navDropImg"/> Sofwtare Development
                    </Dropdown.Item>
                    <Dropdown.Item className="navDropItem fugaz-one-regular" onClick={() => handleClick("who-am-i")}>
                        <img src={WhoAmIImg} className="navDropImg "/> Who Am I?
                    </Dropdown.Item>
                    <Dropdown.Item className="navDropItem fugaz-one-regular" onClick={() => handleSocMedClick("LinkedIn")}>
                        <img src={LinkedInImg} className="navDropImg "/> LinkedIn Page
                    </Dropdown.Item>
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