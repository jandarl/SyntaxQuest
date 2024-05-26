import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import JRPGImg from '/JRPG.png';
import FFXIV from '/final-fantasy-xiv.jpg';
import LongWalksAlone from '/longwalks.jpeg';
import SciFi from '/startrek.jpg';
import FactsMyths from '/factsmyths.jpg';
import AnimeManga from '/anime-manga.png';
import ReverseEngg from '/reverse.jpg';
import BuildThings from '/building.png';
import '/src/Components/fonts.css';
import './Hobbies.css';

function Hobbies(){
    return(
        <>
        <Carousel fade>
           <Carousel.Item>
                <img className="crslImg" src={SciFi}></img>
                <Carousel.Caption>
                    <div className="crslHdr">
                      <h3 className="crslh3 bungee-shade-regular">Sci-Fi</h3>
                        <p className="crslp courier-prime-bold ">
                        I often watch Sci-Fi movies or series. I have always wondered and dreamed how life would be when humans have achieved interstellar travel or
                        when we have advance AI, medicine and life in general through science. 
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
             <Carousel.Item>
                <img className="crslImg" src={ReverseEngg}></img>
                <Carousel.Caption>
                    <div className="crslHdr">
                      <h3 className="crslh3 bungee-shade-regular">How stuff works</h3>
                        <p className="crslp courier-prime-bold ">
                        I have always been a curious person, since childhood I would often get scolded for disassembling my toys / gadgets because I wanted to understand how it worked.
                        It has helped me in learning a lot and has been very useful a lot of times in my work and daily life. 
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="crslImg" src={BuildThings}></img>
                <Carousel.Caption>
                    <div className="crslHdr">
                      <h3 className="crslh3 bungee-shade-regular">Build Things</h3>
                        <p className="crslp courier-prime-bold ">
                        Just as I have been disassembling things to learn how they work, I like to build things based on what I have learned. I got into software development 
                        because it allows me to disassemble and build a lot of things without a large cost.
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="crslImg" src={FactsMyths}></img>
                <Carousel.Caption>
                    <div className="crslHdr">
                      <h3 className="crslh3 bungee-shade-regular">General Information</h3>
                        <p className="crslp courier-prime-bold ">
                        From childhood, I have always read books or watched videos about general facts, fiction and myths. Most of it, I have not found any daily use but there are
                        some that allowed me to strike a conversation as a common ground to people I have just met.
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="crslImg" src={LongWalksAlone}></img>
                <Carousel.Caption>
                    <div className="crslHdr">
                      <h3 className="crslh3 bungee-shade-regular">Long Walks Alone</h3>
                        <p className="crslp courier-prime-bold ">
                        I take a long walk alone. Especially, if there's a lot of greenery, it calms and clears the mind. Sometimes, I do people watching 
                        on my stroll just to observe how people go about their lives, or look for a smile in a crowd.
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="crslImg" src={FFXIV}></img>
                <Carousel.Caption>
                    <div className="crslHdr">
                      <h3 className="crslh3 bungee-shade-regular">Final Fantasy XIV</h3>
                        <p className="crslp courier-prime-bold ">
                         An MMORPG with great story and community that allowed me to meet people who have now become precious friends will always have a special place on my heart.
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="crslImg" src={JRPGImg}></img>
                <Carousel.Caption>
                    <div className="crslHdr">
                        <h3 className="crslh3 bungee-shade-regular">JRPG</h3>
                        <p className="crslp courier-prime-bold ">
                        Playing JRPG with great story is like reading a good fantasy book that allows the reader to temporarily escape reality.
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img className="crslImg" src={AnimeManga}></img>
                <Carousel.Caption>
                    <div className="crslHdr">
                        <h3 className="crslh3 bungee-shade-regular">Anime and Manga</h3>
                        <p className="crslp courier-prime-bold ">
                        I have been a fan of anime and manga since childhood. Especially, the fantasy, action and adventure genre.
                        </p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    )
}

export default Hobbies;