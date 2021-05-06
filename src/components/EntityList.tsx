import firebase from "firebase";
import {Button} from "react-bootstrap";
import {FaTrash} from "react-icons/all";
import {TranslationKey} from "../model/TranslationKey";

export function EntityList(props: { entities: TranslationKey[] } ) {

    const remove = (entity: any) => {
        const reference = firebase.database().ref('model').child(entity.id);
        reference.remove();
    };

    return (
        <div id="entity-list">
            {props.entities?.map(entity => (
                <div key={entity.id} className="entity-list-element">
                    <span>{entity.key}</span>
                    {/*<span>{entity.entityValue}</span>*/}
                    <Button variant="danger" onClick={(event) => remove(entity)}><FaTrash/></Button>
                </div>
            ))}
        </div>)
}
