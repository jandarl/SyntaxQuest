import React from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import './JobExperience.css';

function JobExperience(){
    return(
        <>
        <Tab.Container id="job-exp-pills" defaultActiveKey="SrSWEngNS">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column courier-prime-regular">
                        <Nav.Item>
                            <Nav.Link eventKey="SrSWEngNS">Sr. Software Engineer - 2015-Present Northstar Technologies</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="JrSWEngNS">Jr. Software Engineer - 2012-2015 Northstar Technologies</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="StfEngNS">Staff Engineer - 2010-2012 Northstar Technologies</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="SrSWEngNS">
                        First tab content
                        </Tab.Pane>
                        <Tab.Pane eventKey="JrSWEngNS">
                        Second tab content
                        </Tab.Pane>
                        <Tab.Pane eventKey="StfEngNS">
                        Third tab content
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        </>
    )
}

export default JobExperience;