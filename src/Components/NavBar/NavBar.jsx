import React from "react";
import VidGameImg from '/videogame.png';
import WhoAmIImg from '/whoami.png';
import './NavBar.css';
import '/src/Components/fonts.css';

function NavBar({isWorkspace, workspaceMode}){

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

    return(
        <div id="navParent" className="prevent-select">
        <div id="navBgndOvrlay"></div>
        <div className="centerImg" id="vgameDiv">
            <img src={VidGameImg}  className="clickImg" id="vgameImage" onClick={() => handleClick("video-games")}/>
            <h6 className="navName" id="navVGames" 
            onClick={() => handleClick("video-games")} 
            onMouseEnter={() => handleHover("vgameImage", true)}
            onMouseLeave={() => handleHover("vgameImage", false)}>Video Games</h6>
        </div>
        <div className="centerImg" id="whoamiDiv">
            <img src={WhoAmIImg} className="clickImg" id="whoamiImage" onClick={() => handleClick("who-am-i")}/>
            <h6 className="navName" id="navWhoami"
            onClick={() => handleClick("who-am-i")}
            onMouseEnter={() => handleHover("whoamiImage", true)}
            onMouseLeave={() => handleHover("whoamiImage", false)}>Who Am I?</h6>
        </div>
    </div>
    )
}

export default NavBar;