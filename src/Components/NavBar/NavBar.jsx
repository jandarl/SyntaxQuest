import React, {useState} from "react";
import VidGameImg from '/videogame.png'
import './NavBar.css'

function NavBar({isWorkspace, workspaceMode}){

    const handleClick = (id) => {
        switch(id){
            case "vgameImage":
                isWorkspace(true);
                workspaceMode("vgameImage");
                break;   
        }
    }

    return(
        <div id="navParent">
        <div id="navBgnd"></div>
        <div id="navBgndOvrlay"></div>
        <div className="centerImg" id="vgameDiv">
            <img src={VidGameImg}  className="clickImg" id="vgameImage" onClick={() => handleClick("vgameImage")}/>
            <h6 className="navName" id="navVGames">Video Games</h6>
        </div>
    </div>
    )
}

export default NavBar;