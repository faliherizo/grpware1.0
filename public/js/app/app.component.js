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
var users_model_1 = require("./model/users.model");
var thread_model_1 = require("./model/thread.model");
var echo = new users_model_1.User('Echo Bot', 'images/avatars/male-avatar-1.png', 'faly', 0, 0, 'faliherizo@gmail.com');
var tEcho = new thread_model_1.Thread('tEcho', echo.name, echo.avatarSrc);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dycHdhcmUxLjAvYXBwL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUEyQyxlQUFlLENBQUMsQ0FBQTtBQUUzRCwrQkFBd0Isd0JBQXdCLENBQUMsQ0FBQTtBQUNqRCxnQ0FBNkIsNEJBQTRCLENBQUMsQ0FBQTtBQUMxRCw0QkFBbUIscUJBQXFCLENBQUMsQ0FBQTtBQUN6Qyw2QkFBcUIsc0JBQXNCLENBQUMsQ0FBQTtBQUU1QyxJQUFJLElBQUksR0FBWSxJQUFJLGtCQUFJLENBQUMsVUFBVSxFQUFFLGtDQUFrQyxFQUN0RCxNQUFNLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQ3hELElBQUksS0FBSyxHQUFjLElBQUkscUJBQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFRdEU7SUFPRSxzQkFBb0IsY0FBNkI7UUFBN0IsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUFEakQsYUFBUSxHQUFjLEVBQUUsQ0FBQztJQUMwQixDQUFDO0lBRXBELCtCQUFRLEdBQVI7UUFBQSxpQkFnREM7UUEvQ0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUU7YUFDNUIsU0FBUyxDQUNOLFVBQUEsUUFBUSxJQUFFLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBQyxRQUFRLEVBQXRCLENBQXNCLEVBQ2hDLFVBQUEsS0FBSyxJQUFHLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FDL0IsQ0FBQztRQUVOLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQ3ZDLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsZ0ZBQWdGO1FBQ2hGLElBQUksQ0FBQyxJQUFJLEdBQUksSUFBSSxJQUFJLENBQUM7WUFDcEIsSUFBSSxFQUFFLFdB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RUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsbUJBQW1CO1lBQ2hDLFNBQVMsRUFBRSxDQUFDLGdDQUFjLENBQUM7U0FDNUIsQ0FBQzs7b0JBQUE7SUFtR0YsbUJBQUM7QUFBRCxDQWpHQSxBQWlHQyxJQUFBO0FBakdZLG9CQUFZLGVBaUd4QixDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tb2RlbC9tZXNzYWdlcy5tb2RlbCc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9tZXNzYWdlLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4vbW9kZWwvdXNlcnMubW9kZWxcIjtcbmltcG9ydCB7VGhyZWFkfSBmcm9tIFwiLi9tb2RlbC90aHJlYWQubW9kZWxcIjtcblxubGV0IGVjaG86IFVzZXIgICAgPSBuZXcgVXNlcignRWNobyBCb3QnLCAnaW1hZ2VzL2F2YXRhcnMvbWFsZS1hdmF0YXItMS5wbmcnLFxuICAgICAgICAgICAgICAgICAgICAgJ2ZhbHknLDAsMCwnZmFsaWhlcml6b0BnbWFpbC5jb20nKTtcbmxldCB0RWNobzogVGhyZWFkICAgID0gbmV3IFRocmVhZCgndEVjaG8nLCBlY2hvLm5hbWUsIGVjaG8uYXZhdGFyU3JjKTtcbkBDb21wb25lbnQoe1xuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogJ215LWFwcCcsXG4gIHRlbXBsYXRlVXJsOiAnYXBwLnRlbXBsYXRlLmh0bWwnLFxuICBwcm92aWRlcnM6IFtNZXNzYWdlU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXR7XG5cbiAgQFZpZXdDaGlsZCgnbXl2aWRlbycpIG15VmlkZW86IGFueTtcbiAgcGVlcjtcbiAgYW5vdGhlcmlkO1xuICBteXBlZXJpZDtcbiAgbWVzc2FnZXM6ICBNZXNzYWdlW109IFtdO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOk1lc3NhZ2VTZXJ2aWNlKXt9XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmdldE1lc3NhZ2VzKClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIG1lc3NhZ2VzPT50aGlzLm1lc3NhZ2VzPW1lc3NhZ2VzLFxuICAgICAgICAgICAgZXJyb3IgPT5jb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICApO1xuXG4gICAgbGV0IHZpZGVvID0gdGhpcy5teVZpZGVvLm5hdGl2ZUVsZW1lbnQ7XG4gICAgLy9sd2pkNXFyYTgyNTdiOVxuICAgIC8vb3lsdnV2N3lpNGUxbTd2aVxuICAgIC8vdGhpcy5wZWVyID0gbmV3IFBlZXIoJ3NvbWVpZCcsIHtob3N0OiAnbG9jYWxob3N0JywgcG9ydDogMzAwMCwgcGF0aDogJy9hcGknfSk7XG4gICAgdGhpcy5wZWVyICA9IG5ldyBQZWVyKHtcbiAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgICAgcG9ydDogOTAwMCxcbiAgICAgIGRlYnVnOiAzLFxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwib2tcIik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5teXBlZXJpZCA9IHRoaXMucGVlci5pZDtcbiAgICAgICAgaWYodGhpcy5teXBlZXJpZD09bnVsbClcbiAgICAgICAgICB0aGlzLm15cGVlcmlkPVwibnVsbFwiO1xuICAgICAgfSwzMDAwKTtcbiAgICB0aGlzLnBlZXIub24oJ29wZW4nLCBmdW5jdGlvbihpZCkge1xuICAgICAgY29uc29sZS5sb2coJ015IHBlZXIgSUQgaXM6ICcgKyBpZCk7XG4gICAgfSk7XG4gICAgdGhpcy5wZWVyLm9uKCdjb25uZWN0aW9uJywgZnVuY3Rpb24oY29ubikge1xuICAgICAgY29ubi5vbignZGF0YScsIGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICAvLyBXaWxsIHByaW50ICdoaSEnXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB2YXIgbiA9IDxhbnk+bmF2aWdhdG9yO1xuXG4gICAgbi5nZXRVc2VyTWVkaWEgPSAgKCBuLmdldFVzZXJNZWRpYSB8fCBuLndlYmtpdEdldFVzZXJNZWRpYSB8fCBuLm1vekdldFVzZXJNZWRpYSB8fCBuLm1zR2V0VXNlck1lZGlhICk7XG5cbiAgICB0aGlzLnBlZXIub24oJ2NhbGwnLCBmdW5jdGlvbihjYWxsKSB7XG5cbiAgICAgIG4uZ2V0VXNlck1lZGlhKHt2aWRlbzogdHJ1ZSwgYXVkaW86IHRydWV9LCBmdW5jdGlvbihzdHJlYW0pIHtcbiAgICAgICAgY2FsbC5hbnN3ZXIoc3RyZWFtKTtcbiAgICAgICAgY2FsbC5vbignc3RyZWFtJywgZnVuY3Rpb24ocmVtb3Rlc3RyZWFtKXtcbiAgICAgICAgICB2aWRlby5zcmMgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKHJlbW90ZXN0cmVhbSk7XG4gICAgICAgICAgdmlkZW8ucGxheSgpO1xuICAgICAgICB9KVxuICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQgdG8gZ2V0IHN0cmVhbScsIGVycik7XG4gICAgICB9KVxuICAgIH0pXG4gIH1cbiAgY29ubmVjdCgpe1xuICAgIHZhciBjb25uID0gdGhpcy5wZWVyLmNvbm5lY3QodGhpcy5hbm90aGVyaWQpO1xuICAgIGNvbm4ub24oJ29wZW4nLCBmdW5jdGlvbigpe1xuICAgICAgY29ubi5zZW5kKCdNZXNzYWdlIGZyb20gdGhhdCBpZCcpO1xuICAgIH0pO1xuICB9XG4gIHZpZGVvY29ubmVjdCgpe1xuICAgIGxldCB2aWRlbyA9IHRoaXMubXlWaWRlby5uYXRpdmVFbGVtZW50O1xuICAgIHZhciBsb2NhbHZhciA9IHRoaXMucGVlcjtcbiAgICB2YXIgZm5hbWUgPSB0aGlzLmFub3RoZXJpZDtcbiAgICB2YXIgbiA9IDxhbnk+bmF2aWdhdG9yO1xuXG4gICAgbi5nZXRVc2VyTWVkaWEgPSAoIG4uZ2V0VXNlck1lZGlhIHx8IG4ud2Via2l0R2V0VXNlck1lZGlhIHx8IG4ubW96R2V0VXNlck1lZGlhICB8fCBuLm1zR2V0VXNlck1lZGlhICk7XG5cbiAgICBuLmdldFVzZXJNZWRpYSh7dmlkZW86IHRydWUsIGF1ZGlvOiB0cnVlfSwgZnVuY3Rpb24oc3RyZWFtKSB7XG4gICAgICB2YXIgY2FsbCA9IGxvY2FsdmFyLmNhbGwoZm5hbWUsIHN0cmVhbSk7XG4gICAgICBjYWxsLm9uKCdzdHJlYW0nLCBmdW5jdGlvbihyZW1vdGVzdHJlYW0pIHtcbiAgICAgICAgdmlkZW8uc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChyZW1vdGVzdHJlYW0pO1xuICAgICAgICB2aWRlby5wbGF5KCk7XG4gICAgICB9KVxuICAgIH0sIGZ1bmN0aW9uKGVycil7XG4gICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGdldCBzdHJlYW0nLCBlcnIpO1xuICAgIH0pO1xuICB9XG4gIG9uQWRkTWVzc2FnZSgpe1xuICAgIGNvbnN0IHJuZD1NYXRoLmNlaWwoTWF0aC5yYW5kb20oKSoxMDApO1xuICAgIGNvbnN0IG1lc3NhZ2U9IG5ldyBNZXNzYWdlKHtcbiAgICAgIGF1dGhvcjogZWNobyxcbiAgICAgIHRleHQ6IHJuZCsndGVzdGUgbWVzc2FnZScsXG4gICAgICB0aHJlYWQ6IHRFY2hvXG4gICAgfSk7XG4gICAgdGhpcy5tZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2Uuc2F2ZU1lc3NhZ2UobWVzc2FnZSlcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgICgpPT5jb25zb2xlLmxvZygnU3VjY2VzcyEnKSxcbiAgICAgICAgICAgIGVycm9yPT5jb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICApO1xuICB9XG5cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
