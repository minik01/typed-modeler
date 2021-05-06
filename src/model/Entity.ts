import {unixTimestamp, uuid} from "./types";

function generateUUID(): uuid {
    throw "not imlemented";
}

export class Entity {
    constructor(public readonly e_id: uuid = generateUUID(),
                public readonly created: unixTimestamp = new Date().getDate(),
                public readonly last_edit_time?: unixTimestamp,
                public readonly last_edit_user?: uuid) {
    }
}
