"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var messages_model_1 = require('./model/messages.model');
var message_service_1 = require("./services/message.service");
//let echo: User    = new User('Echo Bot', 'images/avatars/male-avatar-1.png',
//   'faly',0,0,'faliherizo@gmail.com');
//let tEcho: Thread    = new Thread('tEcho', echo.name, echo.avatarSrc);
var AppComponent = (function () {
    function AppComponent(messageService) {
        this.messageService = messageService;
        this.messages = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getMessages()
            .subscribe(function (messages) { return _this.messages = messages; }, function (error) { return console.error(error); });
        var video = this.myVideo.nativeElement;
        //lwjd5qra8257b9
        //oylvuv7yi4e1m7vi
        //this.peer = new Peer('someid', {host: 'localhost', port: 3000, path: '/api'});
        this.peer = new Peer({
            host: 'localhost',
            port: 9000,
            debug: 3,
        });
        console.log("ok");
        setTimeout(function () {
            _this.mypeerid = _this.peer.id;
            if (_this.mypeerid == null)
                _this.mypeerid = "null";
        }, 3000);
        this.peer.on('open', function (id) {
            console.log('My peer ID is: ' + id);
        });
        this.peer.on('connection', function (conn) {
            conn.on('data', function (data) {
                // Will print 'hi!'
                console.log(data);
            });
        });
        var n = navigator;
        n.getUserMedia = (n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia);
        this.peer.on('call', function (call) {
            n.getUserMedia({ video: true, audio: true }, function (stream) {
                call.answer(stream);
                call.on('stream', function (remotestream) {
                    video.src = URL.createObjectURL(remotestream);
                    video.play();
                });
            }, function (err) {
                console.log('Failed to get stream', err);
            });
        });
    };
    AppComponent.prototype.connect = function () {
        var conn = this.peer.connect(this.anotherid);
        conn.on('open', function () {
            conn.send('Message from that id');
        });
    };
    AppComponent.prototype.videoconnect = function () {
        var video = this.myVideo.nativeElement;
        var localvar = this.peer;
        var fname = this.anotherid;
        var n = navigator;
        n.getUserMedia = (n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia || n.msGetUserMedia);
        n.getUserMedia({ video: true, audio: true }, function (stream) {
            var call = localvar.call(fname, stream);
            call.on('stream', function (remotestream) {
                video.src = URL.createObjectURL(remotestream);
                video.play();
            });
        }, function (err) {
            console.log('Failed to get stream', err);
        });
    };
    AppComponent.prototype.onAddMessage = function () {
        var rnd = Math.ceil(Math.random() * 100);
        var message = new messages_model_1.Message({
            author: echo,
            text: rnd + 'teste message',
            thread: tEcho
        });
        this.messages.push(message);
        this.messageService.saveMessage(message)
            .subscribe(function () { return console.log('Success!'); }, function (error) { return console.error(error); });
    };
    __decorate([
        core_1.ViewChild('myvideo'), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "myVideo", void 0);
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.template.html',
            providers: [message_service_1.MessageService]
        }), 
        __metadata('design:paramtypes', [message_service_1.MessageService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dycHdhcmUxLjAvYXBwL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUUzRCwrQkFBd0Isd0JBQXdCLENBQUMsQ0FBQTtBQUNqRCxnQ0FBNkIsNEJBQTRCLENBQUMsQ0FBQTtBQUkxRCw4RUFBOEU7QUFDM0Qsd0NBQXdDO0FBQzNELHdFQUF3RTtBQVF4RTtJQU9FLHNCQUFvQixjQUE2QjtRQUE3QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQURqRCxhQUFRLEdBQWMsRUFBRSxDQUFDO0lBQzBCLENBQUM7SUFFcEQsK0JBQVEsR0FBUjtRQUFBLGlCQWdEQztRQS9DQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRTthQUM1QixTQUFTLENBQ04sVUFBQSxRQUFRLElBQUUsT0FBQSxLQUFJLENBQUMsUUFBUSxHQUFDLFFBQVEsRUFBdEIsQ0FBc0IsRUFDaEMsVUFBQSxLQUFLLElBQUcsT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFwQixDQUFvQixDQUMvQixDQUFDO1FBRU4sSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7UUFDdkMsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixnRkFBZ0Y7UUFDaEYsSUFBSSxDQUFDLElBQUksR0FBSSxJQUFJLElBQUksQ0FBQztZQUNwQixJQUFJLEVBQUUsV0FBVztZQUNqQixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxDQUFDO1NBQ1QsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQixVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQzdCLEVBQUUsQ0FBQSxDQUFDLEtBQUksQ0FBQyxRQUFRLElBQUUsSUFBSSxDQUFD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cG9ydCB7Q29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21vZGVsL21lc3NhZ2VzLm1vZGVsJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2VzL21lc3NhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi9tb2RlbC91c2Vycy5tb2RlbFwiO1xuaW1wb3J0IHtUaHJlYWR9IGZyb20gXCIuL21vZGVsL3RocmVhZC5tb2RlbFwiO1xuXG4vL2xldCBlY2hvOiBVc2VyICAgID0gbmV3IFVzZXIoJ0VjaG8gQm90JywgJ2ltYWdlcy9hdmF0YXJzL21hbGUtYXZhdGFyLTEucG5nJyxcbiAgICAgICAgICAgICAgICAgICAvLyAgICdmYWx5JywwLDAsJ2ZhbGloZXJpem9AZ21haWwuY29tJyk7XG4vL2xldCB0RWNobzogVGhyZWFkICAgID0gbmV3IFRocmVhZCgndEVjaG8nLCBlY2hvLm5hbWUsIGVjaG8uYXZhdGFyU3JjKTtcbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ215LWFwcCcsXG4gIHRlbXBsYXRlVXJsOiAnYXBwLnRlbXBsYXRlLmh0bWwnLFxuICBwcm92aWRlcnM6IFtNZXNzYWdlU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgQFZpZXdDaGlsZCgnbXl2aWRlbycpIG15VmlkZW86IGFueTtcbiAgcGVlcjtcbiAgYW5vdGhlcmlkO1xuICBteXBlZXJpZDtcbiAgbWVzc2FnZXM6ICBNZXNzYWdlW109IFtdO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOk1lc3NhZ2VTZXJ2aWNlKXt9XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmdldE1lc3NhZ2VzKClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIG1lc3NhZ2VzPT50aGlzLm1lc3NhZ2VzPW1lc3NhZ2VzLFxuICAgICAgICAgICAgZXJyb3IgPT5jb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICApO1xuXG4gICAgbGV0IHZpZGVvID0gdGhpcy5teVZpZGVvLm5hdGl2ZUVsZW1lbnQ7XG4gICAgLy9sd2pkNXFyYTgyNTdiOVxuICAgIC8vb3lsdnV2N3lpNGUxbTd2aVxuICAgIC8vdGhpcy5wZWVyID0gbmV3IFBlZXIoJ3NvbWVpZCcsIHtob3N0OiAnbG9jYWxob3N0JywgcG9ydDogMzAwMCwgcGF0aDogJy9hcGknfSk7XG4gICAgdGhpcy5wZWVyICA9IG5ldyBQZWVyKHtcbiAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgICAgcG9ydDogOTAwMCxcbiAgICAgIGRlYnVnOiAzLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwib2tcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5teXBlZXJpZCA9IHRoaXMucGVlci5pZDtcbiAgICAgICAgaWYodGhpcy5teXBlZXJpZD09bnVsbClcbiAgICAgICAgICB0aGlzLm15cGVlcmlkPVwibnVsbFwiO1xuICAgICAgfSwzMDAwKTtcbiAgICB0aGlzLnBlZXIub24oJ29wZW4nLCBmdW5jdGlvbihpZCkge1xuICAgICAgY29uc29sZS5sb2coJ015IHBlZXIgSUQgaXM6ICcgKyBpZCk7XG4gICAgfSk7XG4gICAgdGhpcy5wZWVyLm9uKCdjb25uZWN0aW9uJywgZnVuY3Rpb24oY29ubikge1xuICAgICAgY29ubi5vbignZGF0YScsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAvLyBXaWxsIHByaW50ICdoaSEnXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB2YXIgbiA9IDxhbnk+bmF2aWdhdG9yO1xuXG4gICAgbi5nZXRVc2VyTWVkaWEgPSAgKCBuLmdldFVzZXJNZWRpYSB8fCBuLndlYmtpdEdldFVzZXJNZWRpYSB8fCBuLm1vekdldFVzZXJNZWRpYSB8fCBuLm1zR2V0VXNlck1lZGlhICk7XG5cbiAgICB0aGlzLnBlZXIub24oJ2NhbGwnLCBmdW5jdGlvbihjYWxsKSB7XG5cbiAgICAgIG4uZ2V0VXNlck1lZGlhKHt2aWRlbzogdHJ1ZSwgYXVkaW86IHRydWV9LCBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgICAgY2FsbC5hbnN3ZXIoc3RyZWFtKTtcbiAgICAgICAgY2FsbC5vbignc3RyZWFtJywgZnVuY3Rpb24ocmVtb3Rlc3RyZWFtKXtcbiAgICAgICAgICB2aWRlby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHJlbW90ZXN0cmVhbSk7XG4gICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICB9KVxuICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gZ2V0IHN0cmVhbScsIGVycik7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgY29ubmVjdCgpe1xuICAgIHZhciBjb25uID0gdGhpcy5wZWVyLmNvbm5lY3QodGhpcy5hbm90aGVyaWQpO1xuICAgIGNvbm4ub24oJ29wZW4nLCBmdW5jdGlvbigpe1xuICAgICAgY29ubi5zZW5kKCdNZXNzYWdlIGZyb20gdGhhdCBpZCcpO1xuICAgIH0pO1xuICB9XG4gIHZpZGVvY29ubmVjdCgpe1xuICAgIGxldCB2aWRlbyA9IHRoaXMubXlWaWRlby5uYXRpdmVFbGVtZW50O1xuICAgIHZhciBsb2NhbHZhciA9IHRoaXMucGVlcjtcbiAgICB2YXIgZm5hbWUgPSB0aGlzLmFub3RoZXJpZDtcbiAgICB2YXIgbiA9IDxhbnk+bmF2aWdhdG9yO1xuXG4gICAgbi5nZXRVc2VyTWVkaWEgPSAoIG4uZ2V0VXNlck1lZGlhIHx8IG4ud2Via2l0R2V0VXNlck1lZGlhIHx8IG4ubW96R2V0VXNlck1lZGlhICB8fCBuLm1zR2V0VXNlck1lZGlhICk7XG5cbiAgICBuLmdldFVzZXJNZWRpYSh7dmlkZW86IHRydWUsIGF1ZGlvOiB0cnVlfSwgZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICB2YXIgY2FsbCA9IGxvY2FsdmFyLmNhbGwoZm5hbWUsIHN0cmVhbSk7XG4gICAgICBjYWxsLm9uKCdzdHJlYW0nLCBmdW5jdGlvbihyZW1vdGVzdHJlYW0pIHtcbiAgICAgICAgdmlkZW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChyZW1vdGVzdHJlYW0pO1xuICAgICAgICB2aWRlby5wbGF5KCk7XG4gICAgICB9KVxuICAgIH0sIGZ1bmN0aW9uKGVycil7XG4gICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGdldCBzdHJlYW0nLCBlcnIpO1xuICAgIH0pO1xuICB9XG4gIG9uQWRkTWVzc2FnZSgpe1xuICAgIGNvbnN0IHJuZD1NYXRoLmNlaWwoTWF0aC5yYW5kb20oKSoxMDApO1xuICAgIGNvbnN0IG1lc3NhZ2U9IG5ldyBNZXNzYWdlKHtcbiAgICAgIGF1dGhvcjogZWNobyxcbiAgICAgIHRleHQ6IHJuZCsndGVzdGUgbWVzc2FnZScsXG4gICAgICB0aHJlYWQ6IHRFY2hvXG4gICAgfSk7XG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2F2ZU1lc3NhZ2UobWVzc2FnZSlcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICgpPT5jb25zb2xlLmxvZygnU3VjY2VzcyEnKSxcbiAgICAgICAgICAgIGVycm9yPT5jb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICApO1xuICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
