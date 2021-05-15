import {uuid, str10} from "./types";
import {TranslationKey} from "./TranslationKey";

export class Language {

    constructor(public readonly id_language: uuid,
                public readonly shorthand: str10,
                public longName: TranslationKey,
                public autoTranslate: boolean
    ) {
    }
}