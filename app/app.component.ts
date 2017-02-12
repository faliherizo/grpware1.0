import {Component, OnInit, ViewChild} from '@angular/core';

import { Message } from './model/messages.model';
import {MessageService} from "./services/message.service";
import {User} from "./model/users.model";
import {Thread} from "./model/thread.model";

let echo: User    = new User('Echo Bot', 'images/avatars/male-avatar-1.png',
                     'faly',0,0,'faliherizo@gmail.com');
let tEcho: Thread    = new Thread('tEcho', echo.name, echo.avatarSrc);
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.template.html',
  providers: [MessageService]
})

export class AppComponent implements OnInit{

  @ViewChild('myvideo') myVideo: any;
  peer;
  anotherid;
  mypeerid;
  messages:  Message[]= [];
  constructor(private messageService:MessageService){}

  ngOnInit(){
    this.messageService.getMessages()
        .subscribe(
            messages=>this.messages=messages,
            error =>console.error(error)
        );

    let video = this.myVideo.nativeElement;
    //lwjd5qra8257b9
    //oylvuv7yi4e1m7vi
    //this.peer = new Peer('someid', {host: 'localhost', port: 3000, path: '/api'});
    this.peer  = new Peer({
      host: 'localhost',
      port: 9000,
      debug: 3,
    });
    console.log("ok");
      setTimeout(() => {
        this.mypeerid = this.peer.id;
        if(this.mypeerid==null)
          this.mypeerid="null";
      },3000);
    this.peer.on('open', function(id) {
      console.log('My peer ID is: ' + id);
    });
    this.peer.on('connection', function(conn) {
      conn.on('data', function(data){
        // Will print 'hi!'
        console.log(data);
      });
    });

    var n = <any>navigator;

    n.getUserMedia =  ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia );

    this.peer.on('call', function(call) {

      n.getUserMedia({video: true, audio: true}, function(stream) {
        call.answer(stream);
        call.on('stream', function(remotestream){
          video.src = URL.createObjectURL(remotestream);
          video.play();
        })
      }, function(err) {
        console.log('Failed to get stream', err);
      })
    })
  }
  connect(){
    var conn = this.peer.connect(this.anotherid);
    conn.on('open', function(){
      conn.send('Message from that id');
    });
  }
  videoconnect(){
    let video = this.myVideo.nativeElement;
    var localvar = this.peer;
    var fname = this.anotherid;
    var n = <any>navigator;

    n.getUserMedia = ( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia  || n.msGetUserMedia );

    n.getUserMedia({video: true, audio: true}, function(stream) {
      var call = localvar.call(fname, stream);
      call.on('stream', function(remotestream) {
        video.src = URL.createObjectURL(remotestream);
        video.play();
      })
    }, function(err){
      console.log('Failed to get stream', err);
    });
  }
  onAddMessage(){
    const rnd=Math.ceil(Math.random()*100);
    const message= new Message({
      author: echo,
      text: rnd+'teste message',
      thread: tEcho
    });
    this.messages.push(message);
    this.messageService.saveMessage(message)
        .subscribe(
            ()=>console.log('Success!'),
            error=>console.error(error)
        );
  }

}