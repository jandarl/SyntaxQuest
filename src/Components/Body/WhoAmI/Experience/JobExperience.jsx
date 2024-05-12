import React from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import JSONStaffEnggr from '/src/Data/staff-engineer-ns.json';
import JSONJrSwEnggr from '/src/Data/jr-sw-engineer-ns.json';
import JSONSrSwEnggr from '/src/Data/sr-sw-engineer-ns.json';
import ExpContent from "./ExpContent";
import './JobExperience.css';

function JobExperience(){
    return(
        <>
        <Tab.Container id="job-exp-pills" defaultActiveKey="SrSWEngNS">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column courier-prime-regular">
                        <Nav.Item>
                            <Nav.Link eventKey="SrSWEngNS">Sr. Software Engineer - 2016-Present Northstar Technologies</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="JrSWEngNS">Jr. Software Engineer - 2012-2016 Northstar Technologies</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="StfEngNS">Staff Engineer - 2010-2012 Northstar Technologies</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="SrSWEngNS">
                            <ExpContent 
                            title={JSONSrSwEnggr.Title} 
                            subtitle={JSONSrSwEnggr.SubTitle} 
                            description={JSONSrSwEnggr.Description} 
                            information={JSONSrSwEnggr.Information}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="JrSWEngNS">
                            <ExpContent 
                            title={JSONJrSwEnggr.Title} 
                            subtitle={JSONJrSwEnggr.SubTitle} 
                            description={JSONJrSwEnggr.Description} 
                            information={JSONJrSwEnggr.Information}/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="StfEngNS">
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

export default JobExperience;