"use strict";
var uuid_1 = require('../util/uuid');
var User = (function () {
    function User(name, avatarSrc, firstname, latitude, longitude, username) {
        this.name = name;
        this.avatarSrc = avatarSrc;
        this.firstname = firstname;
        this.latitude = latitude;
        this.longitude = longitude;
        this.username = username;
        this.id = uuid_1.uuid();
    }
    return User;
}());
exports.User = User;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dycHdhcmUxLjAvYXBwL21vZGVsL3VzZXJzLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBcUIsY0FBYyxDQUFDLENBQUE7QUFFcEM7SUFNSSxjQUFtQixJQUFZLEVBQ1osU0FBaUIsRUFDakIsU0FBZ0IsRUFBUSxRQUFlLEVBQ3ZDLFNBQWdCLEVBQVMsUUFBZTtRQUh4QyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osY0FBUyxHQUFULFNBQVMsQ0FBUTtRQUNqQixjQUFTLEdBQVQsU0FBUyxDQUFPO1FBQVEsYUFBUSxHQUFSLFFBQVEsQ0FBTztRQUN2QyxjQUFTLEdBQVQsU0FBUyxDQUFPO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBTztRQUN2RCxJQUFJLENBQUMsRUFBRSxHQUFHLFdBQUksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FaQSxBQVlDLElBQUE7QUFaWSxZQUFJLE9BWWhCLENBQUEiLCJmaWxlIjoibW9kZWwvdXNlcnMubW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1dWlkIH0gZnJvbSAnLi4vdXRpbC91dWlkJztcblxuZXhwb3J0IGNsYXNzIFVzZXIge1xuICAgIGlkOiBzdHJpbmc7XG4gICAgc3RhdHVzOiBib29sZWFuO1xuICAgIHByb3ZpZGVyOnN0cmluZztcblxuXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBwdWJsaWMgYXZhdGFyU3JjOiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgcHVibGljIGZpcnN0bmFtZTpzdHJpbmcscHVibGljIGxhdGl0dWRlOm51bWJlcixcbiAgICAgICAgICAgICAgICBwdWJsaWMgbG9uZ2l0dWRlOm51bWJlciwgcHVibGljIHVzZXJuYW1lOnN0cmluZykge1xuICAgICAgICB0aGlzLmlkID0gdXVpZCgpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
