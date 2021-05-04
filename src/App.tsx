import React, {useContext, useRef} from "react";
import {Button, Col, Container, Form, Navbar} from "react-bootstrap";
import {AuthContext} from "./context/AuthContext";
import {LogIn} from "./components/LogIn";
import {auth} from "./firebaseSetup";

function App() {
    const user = useContext(AuthContext);

    const signOut = async () => {
        await auth.signOut();
    };
    return (
        <>
            <Navbar className="justify-content-between" bg="dark" variant="dark">
                <Navbar.Brand>Firebase Authentication</Navbar.Brand>
                {user && <Button onClick={signOut}>Sign Out</Button>}
            </Navbar>
            {!user ? (<LogIn></LogIn>) : (
                <h2 className="mt-4 text-center">Welcome {user.email}</h2>
            )}


        </>
    );
}

export default App;
