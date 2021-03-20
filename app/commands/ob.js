const { MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {
  const messageEmbed = new MessageEmbed()
    .setTitle("Official Bot link in TOP.GG")
    .addFields(
      {name: "Official Bot", value: "https://top.gg/bot/814460658707202068"}
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
