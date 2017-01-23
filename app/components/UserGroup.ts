/**
 * Created by Faliherizo on 23/01/2017.
 */
import {GroupService} from "../services/group.service";
import {Component, OnInit} from "@angular/core";
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.template.html',
    providers: [GroupService]
})

export class UserGroup implements OnInit{
    ngOnInit(){}
}