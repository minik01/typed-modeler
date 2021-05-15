import React, {useContext, useState} from "react";
import {AuthContext} from "./context/AuthContext";
import {LogIn} from "./components/LogIn";
import './App.css';

import {TMNavbar} from "./components/TMNavbar";
import {ModelManager} from "./components/ModelManager";
import {Project} from "./model/Project";

function App() {
    const user = useContext(AuthContext);
    const [project, setProject] = useState<Project | undefined>(undefined)


    return (
        <>
            <TMNavbar project={project} setProject={setProject}/>
            <div id={'content'}>
                {!user ? (<LogIn/>) : <ModelManager project={project}/>
                }
            </div>
        </>
    );
}

export default App;
