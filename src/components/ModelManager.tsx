import {EntityListFilter} from "./EntityListFilter";
import {CreateEntity} from "./CreateEntity";
import {EntityList} from "./EntityList";
import React, {useEffect, useState} from "react";
import {TranslationKey} from "../model/TranslationKey";
import firebase from "firebase";
import {Project} from "../model/Project";

export function ModelManager(props: { project?: Project }) {
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

    return props.project ? (<>
        <EntityListFilter
            modelPath={modelPath}
            setModelPath={setModelPath}
            modelOption={entities}
        />

        <CreateEntity
            parentKey={modelPath.length ? (modelPath[modelPath.length - 1]) : null}
        />

        <EntityList
            entities={entities}
        />
    </>) : <></>
}