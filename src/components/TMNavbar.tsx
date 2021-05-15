import {Button, Dropdown, DropdownButton, Navbar} from "react-bootstrap";
import {ProjectBart} from "./ProjectBar";
import React, {useContext} from "react";
import {AuthContext} from "../context/AuthContext";
import {auth} from "../firebaseSetup";
import {Project} from "../model/Project";

export function TMNavbar(props: { project?: Project, setProject: any }) {
    const user = useContext(AuthContext);

    const signOut = async () => {
        await auth.signOut();
    };
    return (
        <Navbar className="justify-content-between" bg="dark" variant="dark">
            <Navbar.Brand>
                {user ? <ProjectBart setProject={props.setProject}/> : "Typed Modeler"}
            </Navbar.Brand>


            {user && (<>
                <DropdownButton menuAlign="right" variant="dark" title={user.email}>
                    <Dropdown.Item onClick={signOut}>
                        Sign Out
                    </Dropdown.Item>
                </DropdownButton>

                </>
            )}
        </Navbar>
    )
}