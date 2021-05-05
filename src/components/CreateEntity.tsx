import firebase from "firebase";
import React, {useState} from "react";
import {Button} from "react-bootstrap";

export function CreateEntity() {
    const [entityKey, setEntityKey] = useState('');
    const [entityValue, setEntityValue] = useState('');


    const createEntity = () => {
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
        createEntity();
    };

    return (
        <div id="entity-editor">
            <label>name</label>
            <input id="key" type="text" onChange={onChangeKey}/>
            <label>value</label>
            <input id="value" type="text" onChange={onChangeValue}/>
            <Button variant="primary"
                    onClick={submit}>
                save
            </Button>
        </div>
    )
}
