import {Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {Group} from "../model/groupe.model";
import {User} from "../model/users.model";
@Injectable()
export class GroupService{
    constructor(private http:Http
    ){}
    creategroup(group:Group):Observable<any>{
        const body = JSON.stringify(group);
        const headers = new Headers({"Content-Type":"application/json"});
        return this.http.post('http://localhost:3000/group', body,
            {headers:headers});
    }
    inscription(user:User,group:Group):Observable<any>{
        const body = JSON.stringify(group);
        const headers = new Headers({"Content-Type":"application/json"});
        return this.http.post('http://localhost:3000/group', body,
            {headers:headers});
    }
}