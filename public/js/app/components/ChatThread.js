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
var group_service_1 = require("../services/group.service");
var core_1 = require("@angular/core");
var ChatThread = (function () {
    function ChatThread() {
    }
    ChatThread.prototype.ngOnInit = function () { };
    ChatThread = __decorate([
        core_1.Component({
            selector: 'chat-thread',
            templateUrl: 'views/template/chat.users.tmpl.html',
            styleUrls: ['app/chat.users.tmpl.css'],
            providers: [group_service_1.GroupService]
        }), 
        __metadata('design:paramtypes', [])
    ], ChatThread);
    return ChatThread;
}());
exports.ChatThread = ChatThread;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dycHdhcmUxLjAvYXBwL2NvbXBvbmVudHMvQ2hhdFRocmVhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsOEJBQTJCLDJCQUEyQixDQUFDLENBQUE7QUFDdkQscUJBQWdDLGVBQWUsQ0FBQyxDQUFBO0FBT2hEO0lBQUE7SUFFQSxDQUFDO0lBREcsNkJBQVEsR0FBUixjQUFXLENBQUM7SUFQaEI7UUFBQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGFBQWE7WUFDdkIsV0FBVyxFQUFFLHFDQUFxQztZQUNsRCxTQUFTLEVBQUcsQ0FBQyx5QkFBeUIsQ0FBQztZQUN2QyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1NBQzVCLENBQUM7O2tCQUFBO0lBR0YsaUJBQUM7QUFBRCxDQUZBLEFBRUMsSUFBQTtBQUZZLGtCQUFVLGFBRXRCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9DaGF0VGhyZWFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtHcm91cFNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9ncm91cC5zZXJ2aWNlXCI7XG5pbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjaGF0LXRocmVhZCcsXG4gICAgdGVtcGxhdGVVcmw6ICd2aWV3cy90ZW1wbGF0ZS9jaGF0LnVzZXJzLnRtcGwuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiAgWydhcHAvY2hhdC51c2Vycy50bXBsLmNzcyddLFxuICAgIHByb3ZpZGVyczogW0dyb3VwU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhdFRocmVhZCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgICBuZ09uSW5pdCgpe31cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
