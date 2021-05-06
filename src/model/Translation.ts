import {str320, unixTimestamp, uuid} from "./types";
import {Entity} from "./Entity";

export class Translation extends Entity {

    constructor(id_translation: uuid,
                protected id_key: uuid,
                protected id_language: uuid,
                protected value: str320,
                created?: unixTimestamp,
                last_edit_time?: unixTimestamp,
                last_edit_user?: uuid) {
        super(id_translation, created, last_edit_time, last_edit_user)
    }
}
