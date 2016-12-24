"use strict";
var http = require('http');
var fs = require('fs');
var ServerService = (function () {
    function ServerService(http) {
        this.http = http;
    }
    ServerService.prototype.connectServer = function () {
    };
    ServerService.prototype.isconnected = function () {
    };
    return ServerService;
}());
exports.ServerService = ServerService;
//# sourceMappingURL=server.service.js.map