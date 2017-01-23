import {Injectable} from "@angular/core";
import {Message} from "../model/messages.model";
import {Http, Headers, Response} from "@angular/http";
import {Subject, Observable} from "rxjs";
import 'rxjs/Rx'
let initialMessages: Message[] = [];
interface IMessagesOperation extends Function {
    (messages: Message[]): Message[];
}
@Injectable()
export class MessageService{


    getMessages():Observable<any>{
        return this.http.get('http://localhost:3000/message')
            .map( (data:Response)=>{
                const extracted = data.json();
                const msgArray:Message[]=[];
                let message;
                for(let element of extracted.data){
                    message= new Message(element.content);
                    msgArray.push(message);
                }
                return msgArray;
            });
    }
    saveMessage(message:Message):Observable<any>{
        const body = JSON.stringify(message);
        const headers = new Headers({"Content-Type":"application/json"});
        return this.http.post('http://localhost:3000/message', body,
            {headers:headers});
    }
    constructor(private http:Http) {


    }


    

}