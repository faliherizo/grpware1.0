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
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
/**
 * Created by Faliherizo on 23/01/2017.
 */
var UserService = (function () {
    function UserService() {
        // `currentUser` contains the current user
        this.currentUser = new rxjs_1.BehaviorSubject(null);
    }
    UserService.prototype.setCurrentUser = function (newUser) {
        this.currentUser.next(newUser);
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
exports.userServiceInjectables = [
    UserService
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dycHdhcmUxLjAvYXBwL3NlcnZpY2VzL1VzZXJTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBeUIsZUFBZSxDQUFDLENBQUE7QUFDekMscUJBQXVDLE1BQU0sQ0FBQyxDQUFBO0FBRTlDOztHQUVHO0FBR0g7SUFBQTtRQUNJLDBDQUEwQztRQUMxQyxnQkFBVyxHQUFrQixJQUFJLHNCQUFlLENBQU8sSUFBSSxDQUFDLENBQUM7SUFLakUsQ0FBQztJQUhVLG9DQUFjLEdBQXJCLFVBQXNCLE9BQWE7UUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQVBMO1FBQUMsaUJBQVUsRUFBRTs7bUJBQUE7SUFRYixrQkFBQztBQUFELENBUEEsQUFPQyxJQUFBO0FBUFksbUJBQVcsY0FPdkIsQ0FBQTtBQUVVLDhCQUFzQixHQUFlO0lBQzVDLFdBQVc7Q0FDZCxDQUFDIiwiZmlsZSI6InNlcnZpY2VzL1VzZXJTZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtTdWJqZWN0LCBCZWhhdmlvclN1YmplY3R9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi9tb2RlbC91c2Vycy5tb2RlbFwiO1xuLyoqXG4gKiBDcmVhdGVkIGJ5IEZhbGloZXJpem8gb24gMjMvMDEvMjAxNy5cbiAqL1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICAgIC8vIGBjdXJyZW50VXNlcmAgY29udGFpbnMgdGhlIGN1cnJlbnQgdXNlclxuICAgIGN1cnJlbnRVc2VyOiBTdWJqZWN0PFVzZXI+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxVc2VyPihudWxsKTtcblxuICAgIHB1YmxpYyBzZXRDdXJyZW50VXNlcihuZXdVc2VyOiBVc2VyKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIubmV4dChuZXdVc2VyKTtcbiAgICB9XG59XG5cbmV4cG9ydCB2YXIgdXNlclNlcnZpY2VJbmplY3RhYmxlczogQXJyYXk8YW55PiA9IFtcbiAgICBVc2VyU2VydmljZVxuXTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
