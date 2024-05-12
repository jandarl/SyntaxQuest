import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import JobExperience from "./JobExperience";
import Projects from "./Projects";
import '/src/Components/fonts.css';
import './Experience.css';

function Experience({setTopic}){
    return(
        <>
          <Tabs transition={false} defaultActiveKey="Job" id="justify-tab-example" className="mb-3 fugaz-one-regular" justify>
            <Tab eventKey="Job" title="Job Experience">
              <JobExperience />
            </Tab>
            <Tab eventKey="Projects" title="Projects">
              <Projects setTopic={setTopic}/>
            </Tab>
          </Tabs>
        </>
    )
}

export default Experience;