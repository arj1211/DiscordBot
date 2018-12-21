const Discord = require ('discord.js');
const bot = new Discord.Client();


bot.on('message', (message) => {

    if(message.content == 'ping'){
        message.reply('pong');
    }

});

bot.login('NTI1NTAwMTk4ODYwODgxOTIw.Dv3mmQ.eTT_C1OVsmtjN2EwM46GT2CYIlM');
