import React, {useContext} from "react";
import {Button, Navbar} from "react-bootstrap";
import {AuthContext} from "./context/AuthContext";
import {LogIn} from "./components/LogIn";
import {auth} from "./firebaseSetup";
import {CreateEntity} from "./components/CreateEntity";
import {EntityList} from "./components/EntityList";

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
                <>
                    <h2 className="mt-4 text-center">Welcome {user.email}</h2>
                    <CreateEntity></CreateEntity>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <EntityList></EntityList>
                </>
            )}


        </>
    );
}

export default App;
