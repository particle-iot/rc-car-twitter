var settings = require('../settings.js');
var ApiClient = require('./ApiClient.js');

var client = new ApiClient(settings.apiUrl);
client.login(settings.coreuser, settings.corepassword);


var that = {
    forwardFn: function (arg) {
        that.moveCmd("forward", arg);
    },
    backFn: function (arg) {
        that.moveCmd("back", arg);
    },
    leftFn: function (arg) {
        that.moveCmd("left", arg);
        that.moveCmd("left", arg);
    },
    rightFn: function (arg) {
        that.moveCmd("right", arg);
    },
    calibrateFn: function (arg) {
        that.moveCmd("calibrate", arg);
    },
    moveCmd: function (dir, arg) {
        client.callFunction(settings.coreID, dir, arg);
    }
};
module.exports = that;