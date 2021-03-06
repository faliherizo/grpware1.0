"use strict";
var uuid_1 = require('../util/uuid');
var Message = (function () {
    function Message(obj) {
        this.id = obj && obj.id || uuid_1.uuid();
        this.isRead = obj && obj.isRead || false;
        this.sentAt = obj && obj.sentAt || new Date();
        this.author = obj && obj.author || null;
        this.text = obj && obj.text || null;
        this.thread = obj && obj.thread || null;
    }
    return Message;
}());
exports.Message = Message;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2dycHdhcmUxLjAvYXBwL21vZGVsL21lc3NhZ2VzLm1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxxQkFBcUIsY0FBYyxDQUFDLENBQUE7QUFJcEM7SUFPSSxpQkFBWSxHQUFTO1FBQ2pCLElBQUksQ0FBQyxFQUFFLEdBQWdCLEdBQUcsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFpQixXQUFJLEVBQUUsQ0FBQztRQUM1RCxJQUFJLENBQUMsTUFBTSxHQUFZLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFhLEtBQUssQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxHQUFZLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFhLElBQUksSUFBSSxFQUFFLENBQUM7UUFDaEUsSUFBSSxDQUFDLE1BQU0sR0FBWSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBYSxJQUFJLENBQUM7UUFDMUQsSUFBSSxDQUFDLElBQUksR0FBYyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksSUFBZSxJQUFJLENBQUM7UUFDMUQsSUFBSSxDQUFDLE1BQU0sR0FBWSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBYSxJQUFJLENBQUM7SUFDOUQsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQWZBLEFBZUMsSUFBQTtBQWZZLGVBQU8sVUFlbkIsQ0FBQSIsImZpbGUiOiJtb2RlbC9tZXNzYWdlcy5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHV1aWQgfSBmcm9tICcuLi91dGlsL3V1aWQnO1xuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi91c2Vycy5tb2RlbFwiO1xuaW1wb3J0IHtUaHJlYWR9IGZyb20gXCIuL3RocmVhZC5tb2RlbFwiO1xuXG5leHBvcnQgY2xhc3MgTWVzc2FnZXtcbiAgICBpZDogc3RyaW5nO1xuICAgIHNlbnRBdDogRGF0ZTtcbiAgICBpc1JlYWQ6IGJvb2xlYW47XG4gICAgYXV0aG9yOiBVc2VyO1xuICAgIHRleHQ6IHN0cmluZztcbiAgICB0aHJlYWQ6IFRocmVhZDtcbiAgICBjb25zdHJ1Y3RvcihvYmo/OiBhbnkpe1xuICAgICAgICB0aGlzLmlkICAgICAgICAgICAgICA9IG9iaiAmJiBvYmouaWQgICAgICAgICAgICAgIHx8IHV1aWQoKTtcbiAgICAgICAgdGhpcy5pc1JlYWQgICAgICAgICAgPSBvYmogJiYgb2JqLmlzUmVhZCAgICAgICAgICB8fCBmYWxzZTtcbiAgICAgICAgdGhpcy5zZW50QXQgICAgICAgICAgPSBvYmogJiYgb2JqLnNlbnRBdCAgICAgICAgICB8fCBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLmF1dGhvciAgICAgICAgICA9IG9iaiAmJiBvYmouYXV0aG9yICAgICAgICAgIHx8IG51bGw7XG4gICAgICAgIHRoaXMudGV4dCAgICAgICAgICAgID0gb2JqICYmIG9iai50ZXh0ICAgICAgICAgICAgfHwgbnVsbDtcbiAgICAgICAgdGhpcy50aHJlYWQgICAgICAgICAgPSBvYmogJiYgb2JqLnRocmVhZCAgICAgICAgICB8fCBudWxsO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
