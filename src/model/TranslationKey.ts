import {unixTimestamp, uuid} from "./types";
import {Entity} from "./Entity";

export class TranslationKey extends Entity {
    public id: string | undefined;

    constructor(translation_key: uuid,
                public readonly key: string,
                public readonly id_parent: uuid | null | undefined,
                public readonly id_origin: uuid | null | undefined,
                created?: unixTimestamp,
                last_edit_time?: unixTimestamp,
                last_edit_user?: uuid) {
        super(translation_key, created, last_edit_time, last_edit_user)
    }
}
