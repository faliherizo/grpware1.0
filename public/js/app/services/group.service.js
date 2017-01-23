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
var http_1 = require("@angular/http");
var GroupService = (function () {
    function GroupService(http) {
        this.http = http;
    }
    GroupService.prototype.creategroup = function (group) {
        var body = JSON.stringify(group);
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        return this.http.post('http://localhost:3000/group', body, { headers: headers });
    };
    GroupService.prototype.inscription = function (user, group) {
        var body = JSON.stringify(group);
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        return this.http.post('http://localhost:3000/group', body, { headers: headers });
    };
    GroupService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], GroupService);
    return GroupService;
}());
exports.GroupService = GroupService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dycHdhcmUxLjAvYXBwL3NlcnZpY2VzL2dyb3VwLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxxQkFBNEIsZUFBZSxDQUFDLENBQUE7QUFLNUM7SUFDSSxzQkFBb0IsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7SUFDM0IsQ0FBQztJQUNILGtDQUFXLEdBQVgsVUFBWSxLQUFXO1FBQ25CLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkMsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxjQUFjLEVBQUMsa0JBQWtCLEVBQUMsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLEVBQ3JELEVBQUMsT0FBTyxFQUFDLE9BQU8sRUFBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELGtDQUFXLEdBQVgsVUFBWSxJQUFTLEVBQUMsS0FBVztRQUM3QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ25DLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFDLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsNkJBQTZCLEVBQUUsSUFBSSxFQUNyRCxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFmTDtRQUFDLGlCQUFVLEVBQUU7O29CQUFBO0lBZ0JiLG1CQUFDO0FBQUQsQ0FmQSxBQWVDLElBQUE7QUFmWSxvQkFBWSxlQWV4QixDQUFBIiwiZmlsZSI6InNlcnZpY2VzL2dyb3VwLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnN9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzXCI7XG5pbXBvcnQge0dyb3VwfSBmcm9tIFwiLi4vbW9kZWwvZ3JvdXBlLm1vZGVsXCI7XG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi9tb2RlbC91c2Vycy5tb2RlbFwiO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdyb3VwU2VydmljZXtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cFxuICAgICl7fVxuICAgIGNyZWF0ZWdyb3VwKGdyb3VwOkdyb3VwKTpPYnNlcnZhYmxlPGFueT57XG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShncm91cCk7XG4gICAgICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7XCJDb250ZW50LVR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIn0pO1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9ncm91cCcsIGJvZHksXG4gICAgICAgICAgICB7aGVhZGVyczpoZWFkZXJzfSk7XG4gICAgfVxuICAgIGluc2NyaXB0aW9uKHVzZXI6VXNlcixncm91cDpHcm91cCk6T2JzZXJ2YWJsZTxhbnk+e1xuICAgICAgICBjb25zdCBib2R5ID0gSlNPTi5zdHJpbmdpZnkoZ3JvdXApO1xuICAgICAgICBjb25zdCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoe1wiQ29udGVudC1UeXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCJ9KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvZ3JvdXAnLCBib2R5LFxuICAgICAgICAgICAge2hlYWRlcnM6aGVhZGVyc30pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
