var settings = require('./settings.js');
var controller = require('./lib/controller.js');
var Twit = require('twit');

//create stream
var T = new Twit(settings.twitter);
var stream = T.stream('user', { track: "settings.twitter_user"});


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
            var start = text.indexOf(name) + name.length + 1;
            text = text.substr(start);
            console.log("running command " + name + " with args " + text);
            commands[name](text);
        }
    }
});