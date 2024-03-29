//libraries and stuff

const fs = require('fs');
const Discord = require('discord.js');
require('dotenv').config();

//secret stuff

const token = process.env.DISCORD_TOKEN;
const prefix = process.env.PREFIX;

//init and setup for command files

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

//leggo

client.once('ready', () => {
    console.log('Akashi: Warspite is up nya!!');
});

//dynamic commands stuff

client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }

});

//top secret stuff :x

client.login(token);