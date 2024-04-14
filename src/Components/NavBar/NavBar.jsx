import React from "react";
import VidGameImg from '/videogame.png'
import './NavBar.css'
import '/src/fonts.css'

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
            <img src={VidGameImg}  className="clickImg" id="vgameImage" onClick={() => handleClick("Video Games")}/>
            <h6 className="navName" id="navVGames" 
            onClick={() => handleClick("Video Games")} 
            onMouseEnter={() => handleHover("vgameImage", true)}
            onMouseLeave={() => handleHover("vgameImage", false)}>Video Games</h6>
        </div>
    </div>
    )
}

export default NavBar;