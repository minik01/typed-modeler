import {useEffect, useState} from "react";
import firebase from "firebase";

export function EntityList() {
    const [entities, setEntities] = useState<any[]>([]);

    useEffect(() => {
        const todoRef = firebase.database().ref('model');
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            const todoList = [];
            for (let id in todos) {
                todoList.push({id, ...todos[id]});
            }
            setEntities(todoList);
            console.log(todoList);
        });
    }, []);
    return (<>
        {entities.map(e=> (<div>
            <span>{e.entityKey}</span>
            <span>{e.entityValue}</span>
        </div>))}
    </>)
}
