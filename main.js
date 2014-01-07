var settings = require('./settings.js');
var controller = require('./lib/controller.js');
var Twit = require('twit');

//create stream
var T = new Twit(settings.twitter);
var stream = T.stream('user', { track: "middleca_"});


var commands = {
    "forward": controller.forwardFn,
    "back": controller.backFn,
    "left": controller.leftFn,
    "right": controller.rightFn,
}


//listen stream data
stream.on('tweet', function(json) {
    var text = json.text.toLowerCase();
    console.log("heard " + text);

    for(var name in commands) {
        if (text.indexOf(name) >= 0) {
            text = text.substr(name.length);
            console.log("running command " + name);
            commands[name](text);
        }
    }
});