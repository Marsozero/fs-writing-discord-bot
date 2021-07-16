const axios = require('axios');
const Discord = require('discord.js');
const bot = new  Discord.Client();
const config = require('./Token.js');
const fs = require('fs');

bot.on('ready', async () => {


    console.log('Ready!')
});

bot.login(config.token);


bot.on('message', message => {

    if ('./discordchat.text' === 0) {
        fs.writeFileSync(`./discordchat.text`,`
        ${message.createdAt}    ${message.author.username}: ${message.content}`);

    }
    else {
    fs.appendFileSync(`./discordchat.text`, 
    ` ${message.createdAt}    ${message.author.username}: ${message.content}\n`);
    }
});
