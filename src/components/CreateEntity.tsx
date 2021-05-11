import firebase from "firebase";
import React, {useContext, useState} from "react";
import {Button} from "react-bootstrap";
import {TranslationKey} from "../model/TranslationKey";
import {v4 as uuid} from 'uuid';
import {AuthContext} from "../context/AuthContext";

export function CreateEntity(props: { parentKey: TranslationKey | null }) {
    const user = useContext(AuthContext);

    const [entityKey, setEntityKey] = useState('');


    // const createEntity = () => {


    const onChangeKey = (e: any) => {
        setEntityKey(e.target.value);
    };

    const submit = (event: any) => {
        if (!entityKey) {
            return;
        }
        const todoRef = firebase.database().ref('model');
        const translationKey = new TranslationKey(
            uuid(),
            entityKey,
            props.parentKey?.id,
            null,
            new Date().getTime(),
            new Date().getTime(),
            user?.email!
        )
        todoRef.push(JSON.parse(JSON.stringify(translationKey)));
        // setEntityKey('');
    };

    const cancel = (event: any) => {
        setEntityKey('');
    };

    return (
        <div id="entity-editor">
            <label>name</label>
            <input id="key" type="text" onChange={onChangeKey} value={entityKey}/>
            <Button variant="primary"
                    onClick={submit}>
                save
            </Button>
            <Button variant="secondary"
                    onClick={cancel}>
                cancel
            </Button>
        </div>
    )
}
