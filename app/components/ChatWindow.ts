import {Component, OnInit, ViewChild, ChangeDetectionStrategy, ElementRef} from '@angular/core';
import {GroupService} from "../services/group.service";
import {UserService} from "../services/UserService";
import {User} from "../model/users.model";
import {Message} from "../model/messages.model";
import {Thread} from "../model/thread.model";
import {Observable} from "rxjs";
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: '../views/template/chat.pop.tmpl.html',
})
export class ChatWindow implements OnInit {
    messages: Observable<any>;
    currentThread: Thread;
    draftMessage: Message;
    currentUser: User;

    constructor() {
    }

    ngOnInit(): void {

    }

    onEnter(event: any): void {

    }

    sendMessage(): void {

    }

    scrollToBottom(): void {

    }

}
