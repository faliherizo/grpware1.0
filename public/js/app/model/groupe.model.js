"use strict";
var uuid_1 = require("../util/uuid");
var Group = (function () {
    function Group(name, photoSrc) {
        this.name = name;
        this.photoSrc = photoSrc;
        this.id = uuid_1.uuid();
        this.datecreated = new Date();
    }
    return Group;
}());
exports.Group = Group;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dycHdhcmUxLjAvYXBwL21vZGVsL2dyb3VwZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQW1CLGNBQWMsQ0FBQyxDQUFBO0FBR2xDO0lBS0ksZUFBbUIsSUFBWSxFQUNaLFFBQWdCO1FBRGhCLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQy9CLElBQUksQ0FBQyxFQUFFLEdBQUcsV0FBSSxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsR0FBRSxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ2pDLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FWQSxBQVVDLElBQUE7QUFWWSxhQUFLLFFBVWpCLENBQUEiLCJmaWxlIjoibW9kZWwvZ3JvdXBlLm1vZGVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1dWlkfSBmcm9tIFwiLi4vdXRpbC91dWlkXCI7XG5pbXBvcnQge0xpc3R9IGZyb20gXCIuLi91dGlsL0xpc3RcIjtcbmltcG9ydCB7VXNlcn0gZnJvbSBcIi4vdXNlcnMubW9kZWxcIjtcbmV4cG9ydCBjbGFzcyBHcm91cCB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBkYXRlY3JlYXRlZDogRGF0ZTtcbiAgICB1c2VyczpMaXN0PFVzZXI+O1xuXG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBwdWJsaWMgcGhvdG9TcmM6IHN0cmluZykge1xuICAgICAgICB0aGlzLmlkID0gdXVpZCgpO1xuICAgICAgICB0aGlzLmRhdGVjcmVhdGVkPSBuZXcgRGF0ZSgpO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
