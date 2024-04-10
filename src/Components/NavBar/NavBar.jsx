import React from "react";
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

    const handleHover = (id, hover) =>{
        if(hover === true){
            document.querySelector("#" + id).classList.add('highlight');
        }else{
            document.querySelector("#" + id).classList.remove('highlight');
        }
    }

    return(
        <div id="navParent">
        <div id="navBgndOvrlay"></div>
        <div className="centerImg" id="vgameDiv">
            <img src={VidGameImg}  className="clickImg" id="vgameImage" onClick={() => handleClick("vgameImage")}/>
            <h6 className="navName" id="navVGames" 
            onClick={() => handleClick("vgameImage")} 
            onMouseEnter={() => handleHover("vgameImage", true)}
            onMouseLeave={() => handleHover("vgameImage", false)}>Video Games</h6>
        </div>
    </div>
    )
}

export default NavBar;