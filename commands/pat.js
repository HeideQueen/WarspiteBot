const Discord = require('discord.js');

module.exports = {
    name: 'pat',
    description: 'Headpats <3',
    execute(message, args) {
        if (!args.length) {
            return message.channel.send("*bites >:3*");
        } else if (!message.mentions.users.size) {
            return message.channel.send('e.e souka..');
        }
        const taggedUser = message.mentions.users.first();
        const attachment = new Discord.Attachment('https://i.imgur.com/TpG5BD7.jpg');
        message.channel.send(attachment);
        message.channel.send(`Kawaii ${taggedUser.username} :3`);
    },
};