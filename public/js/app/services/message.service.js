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
var messages_model_1 = require("../model/messages.model");
var http_1 = require("@angular/http");
require('rxjs/Rx');
var initialMessages = [];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dycHdhcmUxLjAvYXBwL3NlcnZpY2VzL21lc3NhZ2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEscUJBQXlCLGVBQWUsQ0FBQyxDQUFBO0FBQ3pDLCtCQUFzQix5QkFBeUIsQ0FBQyxDQUFBO0FBQ2hELHFCQUFzQyxlQUFlLENBQUMsQ0FBQTtBQUV0RCxRQUFPLFNBQ1AsQ0FBQyxDQURlO0FBQ2hCLElBQUksZUFBZSxHQUFjLEVBQUUsQ0FBQztBQUtwQztJQXNCSSx3QkFBb0IsSUFBUztRQUFULFNBQUksR0FBSixJQUFJLENBQUs7SUFHN0IsQ0FBQztJQXRCRCxvQ0FBVyxHQUFYO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDO2FBQ2hELEdBQUcsQ0FBRSxVQUFDLElBQWE7WUFDaEIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQzlCLElBQU0sUUFBUSxHQUFXLEVBQUUsQ0FBQztZQUM1QixJQUFJLE9BQU8sQ0FBQztZQUNaLEdBQUcsQ0FBQSxDQUFnQixVQUFjLEVBQWQsS0FBQSxTQUFTLENBQUMsSUFBSSxFQUFkLGNBQWMsRUFBZCxJQUFjLENBQUM7Z0JBQTlCLElBQUksT0FBTyxTQUFBO2dCQUNYLE9BQU8sR0FBRSxJQUFJLHdCQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN0QyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzFCO1lBQ0QsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFDRCxvQ0FBVyxHQUFYLFVBQVksT0FBZTtRQUN2QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQU0sT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDLEVBQUMsY0FBYyxFQUFDLGtCQUFrQixFQUFDLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsK0JBQStCLEVBQUUsSUFBSSxFQUN2RCxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUF0Qkw7UUFBQyxpQkFBVSxFQUFFOztzQkFBQTtJQStCYixxQkFBQztBQUFELENBOUJBLEFBOEJDLElBQUE7QUE5Qlksc0JBQWMsaUJBOEIxQixDQUFBIiwiZmlsZSI6InNlcnZpY2VzL21lc3NhZ2Uuc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcIi4uL21vZGVsL21lc3NhZ2VzLm1vZGVsXCI7XG5pbXBvcnQge0h0dHAsIEhlYWRlcnMsIFJlc3BvbnNlfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtTdWJqZWN0LCBPYnNlcnZhYmxlfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0ICdyeGpzL1J4J1xubGV0IGluaXRpYWxNZXNzYWdlczogTWVzc2FnZVtdID0gW107XG5pbnRlcmZhY2UgSU1lc3NhZ2VzT3BlcmF0aW9uIGV4dGVuZHMgRnVuY3Rpb24ge1xuICAgIChtZXNzYWdlczogTWVzc2FnZVtdKTogTWVzc2FnZVtdO1xufVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNle1xuXG5cbiAgICBnZXRNZXNzYWdlcygpOk9ic2VydmFibGU8YW55PntcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9tZXNzYWdlJylcbiAgICAgICAgICAgIC5tYXAoIChkYXRhOlJlc3BvbnNlKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4dHJhY3RlZCA9IGRhdGEuanNvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1zZ0FycmF5Ok1lc3NhZ2VbXT1bXTtcbiAgICAgICAgICAgICAgICBsZXQgbWVzc2FnZTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGVsZW1lbnQgb2YgZXh0cmFjdGVkLmRhdGEpe1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlPSBuZXcgTWVzc2FnZShlbGVtZW50LmNvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICBtc2dBcnJheS5wdXNoKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbXNnQXJyYXk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG4gICAgc2F2ZU1lc3NhZ2UobWVzc2FnZTpNZXNzYWdlKTpPYnNlcnZhYmxlPGFueT57XG4gICAgICAgIGNvbnN0IGJvZHkgPSBKU09OLnN0cmluZ2lmeShtZXNzYWdlKTtcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IG5ldyBIZWFkZXJzKHtcIkNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24vanNvblwifSk7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDozMDAwL21lc3NhZ2UnLCBib2R5LFxuICAgICAgICAgICAge2hlYWRlcnM6aGVhZGVyc30pO1xuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6SHR0cCkge1xuXG5cbiAgICB9XG5cblxuICAgIFxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
