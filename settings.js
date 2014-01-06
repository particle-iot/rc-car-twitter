var fs = require('fs');
var extend = require('xtend');

var settings = {
    user_stream: {
        consumer_key: '',
        consumer_secret: '',
        access_token_key: '',
        access_token_secret: ''
    },
    twitter_user: 'middleca_',


    apiUrl: "https://api.spark.io",
    coreuser: "rccaruser",
    corepassword: "",
    coreID: ""
};

try {
  if (fs.existsSync('./settings.json')) {
    var overrides = fs.readFileSync('./settings.json');
    settings = extend(settings, JSON.parse(overrides));
  }
} catch(ex) {
  console.error('tried to check and parse settings.json, but could not do it ', ex);
}

module.exports = settings;
