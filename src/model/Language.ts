import { Entity } from "./Entity";
import { uuid, str10, unixTimestamp } from "./types";

export class Language extends Entity {

    constructor(id_language: uuid,
                protected shorthand: str10,
                created?: unixTimestamp,
                last_edit_time?: unixTimestamp,
                last_edit_user?: uuid) {
        super(id_language, created, last_edit_time, last_edit_user)
    }
}