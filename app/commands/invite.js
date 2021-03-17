const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
  const messageEmbed = new MessageEmbed()
    .setTitle("Invites")
    .addFields(
      {name: "Bot invite link", value: "Here you go man: https://discord.com/oauth2/authorize?client_id=814460658707202068&permissions=8&scope=bot"}
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