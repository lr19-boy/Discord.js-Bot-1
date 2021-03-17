const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
  const messageEmbed = new MessageEmbed()
    .setTitle("Invites")
    .addFields(
      {name: "Bot/server invite link", value: "Your bot/server link"}
    )
    .setColor("BLUE")
   message.channel.send(messageEmbed)
}

exports.help = {
  name: "invite"
}

exports.config = {
  aliases: ["invite"] 
}
