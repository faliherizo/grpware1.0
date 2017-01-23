"use strict";
var uuid_1 = require('./util/uuid');
var Thread = (function () {
    function Thread(id, name, avatarSrc) {
        this.id = id || uuid_1.uuid();
        this.name = name;
        this.avatarSrc = avatarSrc;
    }
    return Thread;
}());
exports.Thread = Thread;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRocmVhZC5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUJBQXFCLGFBQWEsQ0FBQyxDQUFBO0FBSW5DO0lBTUksZ0JBQVksRUFBVyxFQUNYLElBQWEsRUFDYixTQUFrQjtRQUMxQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztJQUMvQixDQUFDO0lBQ0wsYUFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYlksY0FBTSxTQWFsQixDQUFBIiwiZmlsZSI6InRocmVhZC5tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHV1aWQgfSBmcm9tICcuL3V0aWwvdXVpZCc7XG5pbXBvcnQge01lc3NhZ2V9IGZyb20gXCIuL21lc3NhZ2VzLm1vZGVsXCI7XG5cblxuZXhwb3J0IGNsYXNzIFRocmVhZCB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBsYXN0TWVzc2FnZTogTWVzc2FnZTtcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgYXZhdGFyU3JjOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihpZD86IHN0cmluZyxcbiAgICAgICAgICAgICAgICBuYW1lPzogc3RyaW5nLFxuICAgICAgICAgICAgICAgIGF2YXRhclNyYz86IHN0cmluZykge1xuICAgICAgICB0aGlzLmlkID0gaWQgfHwgdXVpZCgpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmF2YXRhclNyYyA9IGF2YXRhclNyYztcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
