import {Injectable} from "@angular/core";
import {Subject, BehaviorSubject} from "rxjs";
import {User} from "../model/users.model";
/**
 * Created by Faliherizo on 23/01/2017.
 */

@Injectable()
export class UserService {
    // `currentUser` contains the current user
    currentUser: Subject<User> = new BehaviorSubject<User>(null);

    public setCurrentUser(newUser: User): void {
        this.currentUser.next(newUser);
    }
}

export var userServiceInjectables: Array<any> = [
    UserService
];
