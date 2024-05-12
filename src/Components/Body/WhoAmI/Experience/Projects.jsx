import React from "react";
import ProjectCard from "./ProjectCard";
import SyntaxQuest from '/src/Data/syntax-quest.json';
import './Projects.css';

function Projects({setTopic}){
    return(
        <>
        <ProjectCard 
            title = {SyntaxQuest.title}
            img = {SyntaxQuest.img}
            text = {SyntaxQuest.text}
            info = {SyntaxQuest.info}
            link = {SyntaxQuest.link}
            btnText = {SyntaxQuest.btnText}
            setTopic = {setTopic}
        />
        </>
    )
}

export default Projects;