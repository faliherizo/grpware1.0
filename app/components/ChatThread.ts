import {GroupService} from "../services/group.service";
import {Component, OnInit} from "@angular/core";
@Component({
    selector: 'chat-thread',
    templateUrl: 'views/template/chat.users.tmpl.html',
    styleUrls:  ['app/chat.users.tmpl.css'],
    providers: [GroupService]
})
export class ChatThread implements OnInit{
    ngOnInit(){}
}