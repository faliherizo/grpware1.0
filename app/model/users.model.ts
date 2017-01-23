import { uuid } from '../util/uuid';

export class User {
    id: string;
    status: boolean;
    provider:string;


    constructor(public name: string,
                public avatarSrc: string,
                public firstname:string,public latitude:number,
                public longitude:number, public username:string) {
        this.id = uuid();
    }
}