import {GroupService} from "../services/group.service";
import {Component, OnInit} from "@angular/core";
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.template.html',
    providers: [GroupService]
})
export class ChatThread implements OnInit{
    ngOnInit(){}
}