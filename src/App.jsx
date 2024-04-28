import React, { useState } from 'react';
import LandingPage from './Components/LandingPage';
import WorkspacePage from './Components/WorkspacePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  const [isWorkspace, setIsWorkspace] = useState(false);
  const [workspaceMode, setWorkspaceMode] = useState("");

  function switchPage(){
    if(isWorkspace){
      return <WorkspacePage workspaceType={workspaceMode} isWorkspace={setIsWorkspace} workspaceMode={setWorkspaceMode}/>
    }else{
      return <LandingPage isWorkspace={setIsWorkspace} workspaceMode={setWorkspaceMode}/>
    }
  }

  return (
    switchPage()
  )
}

export default App
