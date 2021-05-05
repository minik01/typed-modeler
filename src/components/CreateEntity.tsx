import firebase from "firebase";
import React, {useEffect, useState} from "react";
import {Button} from "react-bootstrap";

// TODO HACKS
function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

export function CreateEntity() {
    const [entityKey, setEntityKey] = useState('');
    const [entityValue, setEntityValue] = useState('');


    const createTodo = () => {
        const todoRef = firebase.database().ref('model');
        const entity = {
            entityKey,
            entityValue,
        };

        todoRef.push(entity);
    };

    const onChangeKey = (e: any) => {
        setEntityKey(e.target.value);
    };

    const onChangeValue = (e: any) => {
        setEntityValue(e.target.value);
    };

    const submit = (event: any) => {
        // if (isLoading) setLoading(true);
        // if (!isLoading)
            createTodo();
    };

    return (<>
        <label>name</label>
        <input id="key" type="text" onChange={onChangeKey}/>
        <br/>
        <label>value</label>
        <input id="value" type="text" onChange={onChangeValue}/>
        <br/>
        <Button variant="primary"
                onClick={submit}>
            save
        </Button>
    </>)
}



//          pRTLPCB(0,[{"t":"c","d":{"t":"s","d":"Namespace typed-modeler-default-rtdb lives in a different region.
//          Please change your database URL to https://typed-modeler-default-rtdb.europe-west1.firebasedatabase.app"}}]);
