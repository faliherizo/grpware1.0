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
var messages_model_1 = require("./messages.model");
var http_1 = require("@angular/http");
require('rxjs/Rx');
var MessageService = (function () {
    function MessageService(http) {
        this.http = http;
    }
    MessageService.prototype.getMessages = function () {
        return this.http.get('http://localhost:3000/message')
            .map(function (data) {
            var extracted = data.json();
            var msgArray = [];
            var message;
            for (var _i = 0, _a = extracted.data; _i < _a.length; _i++) {
                var element = _a[_i];
                message = new messages_model_1.Message(element.content);
                msgArray.push(message);
            }
            return msgArray;
        });
    };
    MessageService.prototype.saveMessage = function (message) {
        var body = JSON.stringify(message);
        var headers = new http_1.Headers({ "Content-Type": "application/json" });
        return this.http.post('http://localhost:3000/message', body, { headers: headers });
    };
    MessageService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MessageService);
    return MessageService;
}());
exports.MessageService = MessageService;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLCtCQUFzQixrQkFBa0IsQ0FBQyxDQUFBO0FBQ3pDLHFCQUFzQyxlQUFlLENBQUMsQ0FBQTtBQUV0RCxRQUFPLFNBQ1AsQ0FBQyxDQURlO0FBRWhCO0lBQ0ksd0JBQW9CLElBQVM7UUFBVCxTQUFJLEdBQUosSUFBSSxDQUFLO0lBQUUsQ0FBQztJQUVoQyxvQ0FBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDO2FBQ2hELEdBQUcsQ0FBRSxVQUFDLElBQWE7WUFDaEIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzlCLElBQU0sUUFBUSxHQUFXLEVBQUUsQ0FBQztZQUM1QixJQUFJLE9BQU8sQ0FBQztZQUNaLEdBQUcsQ0FBQSxDQUFnQixVQUFjLEVBQWQsS0FBQSxTQUFTLENBQUMsSUFBSSxFQUFkLGNBQWMsRUFBZCxJQUFjLENBQUM7Z0JBQTlCLElBQUksT0FBTyxTQUFBO2dCQUNYLE9BQU8sR0FBRSxJQUFJLHdCQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN0QyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBRTFCO1lBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCxvQ0FBVyxHQUFYLFVBQVksT0FBZTtRQUN2QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFDLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxFQUN2RCxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUF2Qkw7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQXdCYixxQkFBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUF2Qlksc0JBQWMsaUJBdUIxQixDQUFBIiwiZmlsZSI6Im1lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4vbWVzc2FnZXMubW9kZWxcIjtcbmltcG9ydCB7SHR0cCwgSGVhZGVycywgUmVzcG9uc2V9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5pbXBvcnQge09ic2VydmFibGV9IGZyb20gXCJyeGpzL09ic2VydmFibGVcIjtcbmltcG9ydCAncnhqcy9SeCdcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZXNzYWdlU2VydmljZXtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCl7fVxuXG4gICAgZ2V0TWVzc2FnZXMoKTpPYnNlcnZhYmxlPGFueT57XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDAvbWVzc2FnZScpXG4gICAgICAgICAgICAubWFwKCAoZGF0YTpSZXNwb25zZSk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBleHRyYWN0ZWQgPSBkYXRhLmpzb24oKTtcbiAgICAgICAgICAgICAgICBjb25zdCBtc2dBcnJheTpNZXNzYWdlW109W107XG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2U7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBlbGVtZW50IG9mIGV4dHJhY3RlZC5kYXRhKXtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZT0gbmV3IE1lc3NhZ2UoZWxlbWVudC5jb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgbXNnQXJyYXkucHVzaChtZXNzYWdlKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbXNnQXJyYXk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgc2F2ZU1lc3NhZ2UobWVzc2FnZTpNZXNzYWdlKTpPYnNlcnZhYmxlPGFueT57XG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcIkNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwifSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL21lc3NhZ2UnLCBib2R5LFxuICAgICAgICAgICAge2hlYWRlcnM6aGVhZGVyc30pO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
