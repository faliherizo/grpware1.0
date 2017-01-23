import {uuid} from "../util/uuid";
import {List} from "../util/List";
import {User} from "./users.model";
export class Group {
    id: string;
    datecreated: Date;
    users:List<User>;

    constructor(public name: string,
                public photoSrc: string) {
        this.id = uuid();
        this.datecreated= new Date();
    }
}