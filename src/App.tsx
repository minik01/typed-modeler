import React, {useContext} from "react";
import {Button, Navbar} from "react-bootstrap";
import {AuthContext} from "./context/AuthContext";
import {LogIn} from "./components/LogIn";
import {auth} from "./firebaseSetup";
import {CreateEntity} from "./components/CreateEntity";
import {EntityList} from "./components/EntityList";
import './App.css';

function App() {
    const user = useContext(AuthContext);

    const signOut = async () => {
        await auth.signOut();
    };
    return (
        <>
            <Navbar className="justify-content-between" bg="dark" variant="dark">
                <Navbar.Brand>Typed Modeler</Navbar.Brand>
                {user && (<>
                    <span className="navbar-text">
                        <span>{user.email}</span>
                        <Button onClick={signOut}>
                        Sign Out</Button>
                    </span>

                </>
                )}
            </Navbar>
            {!user ? (<LogIn/>) : (
                <>
                    <CreateEntity/>
                    <EntityList/>
                </>
            )}


        </>
    );
}

export default App;
