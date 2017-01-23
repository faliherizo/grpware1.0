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
/**
 * Created by Faliherizo on 23/01/2017.
 */
var group_service_1 = require("../services/group.service");
var core_1 = require("@angular/core");
var UserGroup = (function () {
    function UserGroup() {
    }
    UserGroup.prototype.ngOnInit = function () { };
    UserGroup = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            templateUrl: 'app.template.html',
            providers: [group_service_1.GroupService]
        }), 
        __metadata('design:paramtypes', [])
    ], UserGroup);
    return UserGroup;
}());
exports.UserGroup = UserGroup;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dycHdhcmUxLjAvYXBwL2NvbXBvbmVudHMvVXNlckdyb3VwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILDhCQUEyQiwyQkFBMkIsQ0FBQyxDQUFBO0FBQ3ZELHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQVFoRDtJQUFBO0lBRUEsQ0FBQztJQURHLDRCQUFRLEdBQVIsY0FBVyxDQUFDO0lBUmhCO1FBQUMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsbUJBQW1CO1lBQ2hDLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7U0FDNUIsQ0FBQzs7aUJBQUE7SUFJRixnQkFBQztBQUFELENBRkEsQUFFQyxJQUFBO0FBRlksaUJBQVMsWUFFckIsQ0FBQSIsImZpbGUiOiJjb21wb25lbnRzL1VzZXJHcm91cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBGYWxpaGVyaXpvIG9uIDIzLzAxLzIwMTcuXG4gKi9cbmltcG9ydCB7R3JvdXBTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvZ3JvdXAuc2VydmljZVwiO1xuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc2VsZWN0b3I6ICdteS1hcHAnLFxuICAgIHRlbXBsYXRlVXJsOiAnYXBwLnRlbXBsYXRlLmh0bWwnLFxuICAgIHByb3ZpZGVyczogW0dyb3VwU2VydmljZV1cbn0pXG5cbmV4cG9ydCBjbGFzcyBVc2VyR3JvdXAgaW1wbGVtZW50cyBPbkluaXR7XG4gICAgbmdPbkluaXQoKXt9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
