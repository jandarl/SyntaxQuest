import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import JRPGImg from '/JRPG.png';
import FFXIV from '/final-fantasy-xiv.jpg'
import '/src/Components/fonts.css';
import './Hobbies.css';

function Hobbies(){
    return(
        <>
        <Carousel fade>
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
        </Carousel>
        </>
    )
}

export default Hobbies;