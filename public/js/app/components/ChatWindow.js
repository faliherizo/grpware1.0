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
var ChatWindow = (function () {
    function ChatWindow() {
    }
    ChatWindow.prototype.ngOnInit = function () {
    };
    ChatWindow.prototype.onEnter = function (event) {
    };
    ChatWindow.prototype.sendMessage = function () {
    };
    ChatWindow.prototype.scrollToBottom = function () {
    };
    ChatWindow = __decorate([
        core_1.Component({
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: '../views/template/chat.pop.tmpl.html',
        }), 
        __metadata('design:paramtypes', [])
    ], ChatWindow);
    return ChatWindow;
}());
exports.ChatWindow = ChatWindow;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dycHdhcmUxLjAvYXBwL2NvbXBvbmVudHMvQ2hhdFdpbmRvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQWdGLGVBQWUsQ0FBQyxDQUFBO0FBYWhHO0lBTUk7SUFDQSxDQUFDO0lBRUQsNkJBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCw0QkFBTyxHQUFQLFVBQVEsS0FBVTtJQUVsQixDQUFDO0lBRUQsZ0NBQVcsR0FBWDtJQUVBLENBQUM7SUFFRCxtQ0FBYyxHQUFkO0lBRUEsQ0FBQztJQTdCTDtRQUFDLGdCQUFTLENBQUM7WUFDUCxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtZQUMvQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLHNDQUFzQztTQUN0RCxDQUFDOztrQkFBQTtJQTBCRixpQkFBQztBQUFELENBekJBLEFBeUJDLElBQUE7QUF6Qlksa0JBQVUsYUF5QnRCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9DaGF0V2luZG93LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRWxlbWVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge0dyb3VwU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2dyb3VwLnNlcnZpY2VcIjtcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9Vc2VyU2VydmljZVwiO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vbW9kZWwvdXNlcnMubW9kZWxcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4uL21vZGVsL21lc3NhZ2VzLm1vZGVsXCI7XG5pbXBvcnQge1RocmVhZH0gZnJvbSBcIi4uL21vZGVsL3RocmVhZC5tb2RlbFwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xuQENvbXBvbmVudCh7XG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogJ215LWFwcCcsXG4gICAgdGVtcGxhdGVVcmw6ICcuLi92aWV3cy90ZW1wbGF0ZS9jaGF0LnBvcC50bXBsLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDaGF0V2luZG93IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBtZXNzYWdlczogT2JzZXJ2YWJsZTxhbnk+O1xuICAgIGN1cnJlbnRUaHJlYWQ6IFRocmVhZDtcbiAgICBkcmFmdE1lc3NhZ2U6IE1lc3NhZ2U7XG4gICAgY3VycmVudFVzZXI6IFVzZXI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcblxuICAgIH1cblxuICAgIG9uRW50ZXIoZXZlbnQ6IGFueSk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgc2VuZE1lc3NhZ2UoKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBzY3JvbGxUb0JvdHRvbSgpOiB2b2lkIHtcblxuICAgIH1cblxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
