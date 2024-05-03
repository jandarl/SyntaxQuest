import React from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import JSONStaffEnggr from '/src/Data/staff-engineer.json';
import ExpContent from "./ExpContent";
import './Projects.css';

function Projects(){
    return(
        <>
        <Tab.Container id="job-exp-pills" defaultActiveKey="Project1">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column courier-prime-regular">
                        <Nav.Item>
                            <Nav.Link eventKey="Project1">Project Number 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Project2">Project Number 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Project3">Project Number 3</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="Project1">
                            <ExpContent 
                            title={JSONStaffEnggr.Title} 
                            subtitle={JSONStaffEnggr.SubTitle} 
                            description={JSONStaffEnggr.Description} 
                            information={JSONStaffEnggr.Information}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Project2">
                            <ExpContent 
                            title={JSONStaffEnggr.Title} 
                            subtitle={JSONStaffEnggr.SubTitle} 
                            description={JSONStaffEnggr.Description} 
                            information={JSONStaffEnggr.Information}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Project3">
                            <ExpContent 
                            title={JSONStaffEnggr.Title} 
                            subtitle={JSONStaffEnggr.SubTitle} 
                            description={JSONStaffEnggr.Description} 
                            information={JSONStaffEnggr.Information}/>
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        </>
    )
}

export default Projects;