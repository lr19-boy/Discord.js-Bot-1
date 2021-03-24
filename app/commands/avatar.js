const { MessageMentions } = require("discord.js")


exports.run = (client, message, args, config) => {
    const user = message.mentions.users.first() || message.author;
    message.channel.send(user.displayAvatarURL())
}
