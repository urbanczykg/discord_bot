const Discord = require("discord.js");
const confid  = require("./config.json");

const client = new Discord.Client();
const prefix = "!";
client.on("message", (message)=>
{
    if(message.content === 'gramy?')
    {
        message.reply('nie, do nauki!');
    }
    if(message.author.bot) return;
    
  
    if (message.content === "@everyone")
    {
     message.reply('wylaczam powiadomienia!');   
    }
});
client.login(confid.BOT_TOKEN);