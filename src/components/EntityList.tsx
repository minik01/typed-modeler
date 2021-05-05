import React, {useEffect, useState} from "react";
import firebase from "firebase";
import {Button, ButtonGroup, Dropdown, DropdownButton} from "react-bootstrap";
import {FaTrash} from "react-icons/all";

export function EntityList() {
    const [entities, setEntities] = useState<any[]>([]);

    useEffect(() => {
        const todoRef = firebase.database().ref('model');
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            console.log(todos)
            const todoList = [];
            for (let id in todos) {
                todoList.push({id, ...todos[id]});
            }
            setEntities(todoList);
        });
    }, []);

    const completeEntity = (entity: any) => {
        const todoRef = firebase.database().ref('model').child(entity.id);
        todoRef.remove();
    };

    return (
        <div id="entity-list">
            <ButtonGroup id="entity-module-filter">
                <Button>1</Button>
                <Button>2</Button>

                <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-nested-dropdown">
                    <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                </DropdownButton>
            </ButtonGroup>

            {entities.map(entity => (
                <div key={entity.id} className="entity-list-element">
                    <span>{entity.entityKey}</span>
                    <span>{entity.entityValue}</span>
                    <Button variant="danger" onClick={(event) => completeEntity(entity)}><FaTrash/></Button>
                </div>
            ))}
        </div>)
}
