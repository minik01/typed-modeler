import {Language} from "./Language";

export class Project {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly adminId: string,
        public readonly usersIds: string[],
        public readonly languages: Language[],
    ) {

    }

}