const Discord = require ('discord.js');
const bot = new Discord.Client();


bot.on('message', (message) => {

    msg = message.toString().toLowerCase().split();

    // if(message.content=='ping'){
    if (msg.indexOf('ping') > -1){
        message.reply('POING');
    }

});

var TOKEN = require('./token.json');
bot.login(TOKEN.token);