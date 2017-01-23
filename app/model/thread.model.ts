import { uuid } from '../util/uuid';
import {Message} from "./messages.model";


export class Thread {
    id: string;
    lastMessage: Message;
    name: string;
    avatarSrc: string;

    constructor(id?: string,
                name?: string,
                avatarSrc?: string) {
        this.id = id || uuid();
        this.name = name;
        this.avatarSrc = avatarSrc;
    }
}