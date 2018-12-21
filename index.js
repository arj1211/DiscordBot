const Discord = require ('discord.js');
const bot = new Discord.Client();


bot.on('message', (message) => {

    if(message.content == 'ping'){
        message.reply('pong');
    }

});

bot.login('NTI1NTAwMTk4ODYwODgxOTIw.Dv3hxA.mEdk40Hv84Qww4hzdF5RM4-AtNw');
