import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import VidGameImg from '/videogame.png';
import WhoAmIImg from '/whoami.png';
import './NavBar.css';
import '/src/Components/fonts.css';

function NavBar({isWorkspace, workspaceMode, vwSize}){

    const handleClick = (id) => {
        isWorkspace(true);
        workspaceMode(id);
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
                        <img src={VidGameImg}  className="clickImg" id="vgameImage" onClick={() => handleClick("video-games")}/>
                        <h6 className="navName fugaz-one-regular" id="navVGames" 
                            onClick={() => handleClick("video-games")} 
                            onMouseEnter={() => handleHover("vgameImage", true)}
                            onMouseLeave={() => handleHover("vgameImage", false)}>Video Games</h6>
                    </div>
                    <div className="centerImg" id="whoamiDiv">
                        <img src={WhoAmIImg} className="clickImg" id="whoamiImage" onClick={() => handleClick("who-am-i")}/>
                        <h6 className="navName fugaz-one-regular" id="navWhoami"
                            onClick={() => handleClick("who-am-i")}
                            onMouseEnter={() => handleHover("whoamiImage", true)}
                            onMouseLeave={() => handleHover("whoamiImage", false)}>Who Am I?</h6>
                    </div>
                </div>
            )
        }else{
            return(
                <DropdownButton id="navDropdownBtn" title="Menu" size={vwSize}>
                    <Dropdown.Item className="navDropItem fugaz-one-regular" onClick={() => handleClick("video-games")}>
                        <img src={VidGameImg} className="navDropImg"/> Video Games 
                    </Dropdown.Item>
                    <Dropdown.Item className="navDropItem fugaz-one-regular" onClick={() => handleClick("who-am-i")}>
                        <img src={WhoAmIImg} className="navDropImg "/> Who Am I?
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