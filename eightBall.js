const Discord = require ('discord.js');
const bot = new Discord.Client();
var TOKEN = require('./token.json');
bot.login(TOKEN.token);
var fs = require('fs');

let prefix = "!"

var fileOutput = fs.readFileSync('eightBallOutput.txt').toString().split("####");
var fileTriggers = fs.readFileSync('eightBallTriggers.txt').toString().split("####");

var yesNoStatements = fileOutput[0].split("\r\n").slice(0, -1);
var otherQStatements = fileOutput[1].split("\r\n").slice(1, -1);
var notQStatements = fileOutput[2].split("\r\n").slice(1);

var triggerYesNo = fileTriggers[0].split(" ");
var triggerOtherQ = fileTriggers[1].split(" ");

triggerOtherQ[0] = triggerOtherQ[0].replace('\r\n', '');
triggerYesNo[(triggerYesNo.length)-1] = triggerYesNo[(triggerYesNo.length)-1].replace('\r\n', '');

bot.on('message', (message) => {

    if(message.author.bot) return; // excludes any bot messages
    if(message.channel.type == "dm") return; // excludes any dm messages

    let messageArray = message.toString().toLowerCase().split(" ");

    let cmd = messageArray[0]; // variable with ! prefix
    let args = messageArray.slice(1); // array with arguments

    var i;

    if (cmd === `${prefix}8ball`){

        for(i = 0; i < triggerOtherQ.length; i++){
            if (args[0] === triggerOtherQ[i]){
                randomNumber = Math.floor(Math.random() * (otherQStatements.length))
                return message.channel.send(otherQStatements[randomNumber]);
            }
        }

        
        for(i = 0; i < triggerYesNo.length; i++){
            if (args[0] === triggerYesNo[i]){
                randomNumber = Math.floor(Math.random() * (yesNoStatements.length))
                return message.channel.send(yesNoStatements[randomNumber]);
            }
        }

        randomNumber = Math.floor(Math.random() * (notQStatements.length))
        return message.channel.send(notQStatements[randomNumber]);
        

    }

});