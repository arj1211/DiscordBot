const Discord = require ('discord.js');
const bot = new Discord.Client();


bot.on('message', (message) => {

    message = message.split();

    if(message.indexOf('ping') > -1){
        message.reply('pong');
    }

});


bot.login('NTI1NDc2ODI3MjY3ODU4NDM3.Dv3NdA.yjt742wYZam6k8HkmgW-zneF4-Y');
