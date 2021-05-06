import React, {useContext, useEffect, useState} from "react";
import {Button, Navbar} from "react-bootstrap";
import {AuthContext} from "./context/AuthContext";
import {LogIn} from "./components/LogIn";
import {auth} from "./firebaseSetup";
import {CreateEntity} from "./components/CreateEntity";
import './App.css';
import {EntityListFilter} from "./components/EntityListFilter";
import firebase from "firebase";
import {TranslationKey} from "./model/TranslationKey";
import {EntityList} from "./components/EntityList";

function App() {
    const user = useContext(AuthContext);
    const [entities, setEntities] = useState<TranslationKey[]>([]);
    const [modelPath, setModelPath] = useState<TranslationKey[]>([]);
    const databaseReference = firebase.database().ref('model');

    const getChanges = () => {
        databaseReference.off()
        const currentParent = modelPath.length ? modelPath[modelPath.length - 1].id! : null;
        databaseReference.orderByChild("id_parent")
            .equalTo(currentParent)
            .on("value", function (snapshot) {
                const values = snapshot.val();

                const todoList = [];
                for (let id in values) {
                    todoList.push({id, ...values[id]});
                }
                setEntities(todoList);
            });
    }

    useEffect(() => {
        getChanges();
    }, [modelPath]);

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
                <div id={'content'}>


                    <EntityListFilter
                        modelPath={modelPath}
                        setModelPath={setModelPath}
                        modelOption={entities}
                    />

                    <EntityList
                        entities={entities}
                    />

                    <CreateEntity
                        parentKey={modelPath.length ? (modelPath[modelPath.length - 1]) : null}
                    />
                </div>
            )}
        </>
    );
}

export default App;
