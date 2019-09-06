const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

const token = process.env.DISCORD_TOKEN;

client.once('ready', () => {
    console.log('Warspite is up nya!!');
});

client.on("message", message => {
    if (message.content === "w!ping") {
        message.channel.send("Nani? owo");
    }
});

client.login(token);