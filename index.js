const Discord = require ('discord.js');
const bot = new Discord.Client();


bot.on('message', (message) => {

    if(message.content=='ping'){
        message.reply('POING');
    }

});

<<<<<<< HEAD
bot.login('NTI1NTAwMTk4ODYwODgxOTIw.Dv3mmQ.eTT_C1OVsmtjN2EwM46GT2CYIlM');
=======

bot.login('TOKEN');
>>>>>>> c086596eb08a34139936c85c6615a1effd97e970
