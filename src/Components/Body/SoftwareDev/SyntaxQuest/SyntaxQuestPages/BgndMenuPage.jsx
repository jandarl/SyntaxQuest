import React from "react";
import Stack from 'react-bootstrap/Stack';
import Accordion from "react-bootstrap/Accordion";
import CodeSection from '/src/Components/Body/SoftwareDev/Components/CodeSection';
import WebsiteBgndJSON from '/src/Data/website-bgnd.json';
import GradientBgndJSON from '/src/Data/gradient-bgnd.json';
import NavBarJSX from '/src/Data/nav-bar-jsx.json';
import NavBarCSS from '/src/Data/nav-bar-css.json';
import SideBarJSX from '/src/Data/side-bar-jsx.json';
import SideBarCSS from '/src/Data/side-bar-css.json';
import '/src/Components/fonts.css';
import './BgndMenuPage.css';

function BgndMenuPage(){
    return(
        <div id="bgndMenuParent"  className="courier-prime-regular">
            <Stack className="bgndMenuStack" gap={3}>
                <h1 id="bgndMenuTitle" className="bungee-shade-regular">BACKGROUND AND MENU</h1>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="fugaz-one-regular">{WebsiteBgndJSON.title}</Accordion.Header>
                        <Accordion.Body className="wellfleet-regular"> 
                            <div className="bgndMenuDiv">
                                <CodeSection title={WebsiteBgndJSON.title} description={WebsiteBgndJSON.description} code={WebsiteBgndJSON.snippet}/>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header className="fugaz-one-regular">{GradientBgndJSON.title}</Accordion.Header>
                        <Accordion.Body className="wellfleet-regular"> 
                            <div className="bgndMenuDiv">
                                <CodeSection title={GradientBgndJSON.title} description={GradientBgndJSON.description} code={GradientBgndJSON.snippet}/>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header className="fugaz-one-regular">{NavBarJSX.title}</Accordion.Header>
                        <Accordion.Body className="wellfleet-regular"> 
                            <div className="bgndMenuDiv">
                                <CodeSection title={NavBarJSX.title} description={NavBarJSX.description} code={NavBarJSX.snippet}/>
                                <CodeSection title={NavBarCSS.title} description={NavBarCSS.description} code={NavBarCSS.snippet}/>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header className="fugaz-one-regular">{SideBarJSX.title}</Accordion.Header>
                        <Accordion.Body className="wellfleet-regular"> 
                            <div className="bgndMenuDiv">
                                <CodeSection title={SideBarJSX.title} description={SideBarJSX.description} code={SideBarJSX.snippet}/>
                                <CodeSection title={SideBarCSS.title} description={SideBarCSS.description} code={SideBarCSS.snippet}/>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Stack>
        </div>
    );
}

export default BgndMenuPage;