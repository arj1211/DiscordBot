const Discord = require ('discord.js');
const bot = new Discord.Client();
var TOKEN = require('./token.json');
bot.login(TOKEN.token);

let prefix = "!"; // Universal prefix for sancho


bot.on('message', (message) => {

    msg = message.toString().toLowerCase().split(' ');
    if (msg.indexOf('ping') > -1){
        message.reply('POING');
    }

});




