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
var messages_model_1 = require('./messages.model');
var message_service_1 = require("./message.service");
var AppComponent = (function () {
    function AppComponent(messageService) {
        this.messageService = messageService;
        this.messages = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getMessages()
            .subscribe(function (messages) { return _this.messages = messages; }, function (error) { return console.error(error); });
    };
    AppComponent.prototype.onAddMessage = function () {
        var rnd = Math.ceil(Math.random() * 100);
        var message = new messages_model_1.Message(rnd + 'is an awesome number!');
        this.messages.push(message);
        this.messageService.saveMessage(message)
            .subscribe(function () { return console.log('Success!'); }, function (error) { return console.error(error); });
    };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUVoRCwrQkFBd0Isa0JBQWtCLENBQUMsQ0FBQTtBQUMzQyxnQ0FBNkIsbUJBQW1CLENBQUMsQ0FBQTtBQVNqRDtJQUVFLHNCQUFvQixjQUE2QjtRQUE3QixtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQURqRCxhQUFRLEdBQWMsRUFBRSxDQUFDO0lBQzBCLENBQUM7SUFFcEQsK0JBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUU7YUFDNUIsU0FBUyxDQUNOLFVBQUEsUUFBUSxJQUFFLE9BQUEsS0FBSSxDQUFDLFFBQVEsR0FBQyxRQUFRLEVBQXRCLENBQXNCLEVBQ2hDLFVBQUEsS0FBSyxJQUFHLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FDL0IsQ0FBQztJQUNSLENBQUM7SUFDRCxtQ0FBWSxHQUFaO1FBQ0UsSUFBTSxHQUFHLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsSUFBTSxPQUFPLEdBQUUsSUFBSSx3QkFBTyxDQUFDLEdBQUcsR0FBRSx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQzthQUNuQyxTQUFTLENBQ04sY0FBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQXZCLENBQXVCLEVBQzNCLFVBQUEsS0FBSyxJQUFFLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FDOUIsQ0FBQztJQUNSLENBQUM7SUEzQkg7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFdBQVcsRUFBRSxtQkFBbUI7WUFDaEMsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztTQUM1QixDQUFDOztvQkFBQTtJQXdCRixtQkFBQztBQUFELENBdEJBLEFBc0JDLElBQUE7QUF0Qlksb0JBQVksZUFzQnhCLENBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlcy5tb2RlbCc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tIFwiLi9tZXNzYWdlLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnbXktYXBwJyxcbiAgdGVtcGxhdGVVcmw6ICdhcHAudGVtcGxhdGUuaHRtbCcsXG4gIHByb3ZpZGVyczogW01lc3NhZ2VTZXJ2aWNlXVxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgbWVzc2FnZXM6ICBNZXNzYWdlW109IFtdO1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOk1lc3NhZ2VTZXJ2aWNlKXt9XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmdldE1lc3NhZ2VzKClcbiAgICAgICAgLnN1YnNjcmliZShcbiAgICAgICAgICAgIG1lc3NhZ2VzPT50aGlzLm1lc3NhZ2VzPW1lc3NhZ2VzLFxuICAgICAgICAgICAgZXJyb3IgPT5jb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICApO1xuICB9XG4gIG9uQWRkTWVzc2FnZSgpe1xuICAgIGNvbnN0IHJuZD1NYXRoLmNlaWwoTWF0aC5yYW5kb20oKSoxMDApO1xuICAgIGNvbnN0IG1lc3NhZ2U9IG5ldyBNZXNzYWdlKHJuZCsgJ2lzIGFuIGF3ZXNvbWUgbnVtYmVyIScpO1xuICAgIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnNhdmVNZXNzYWdlKG1lc3NhZ2UpXG4gICAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgICAgICAoKT0+Y29uc29sZS5sb2coJ1N1Y2Nlc3MhJyksXG4gICAgICAgICAgICBlcnJvcj0+Y29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgKTtcbiAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
