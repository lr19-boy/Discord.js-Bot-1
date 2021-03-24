const {MessageEmbed} = require("discord.js")
module.exports.run = async (client, message, args) => {
  console.log(message.guild.iconURL)
  const messageEmbed = new MessageEmbed()
  .setTitle("ℹ️ SERVER INFORMATION ℹ️")
  .setThumbnail(message.guild.iconURL)
  .addFields(
    {name: "Server name:", value: `\`${message.guild.name}\``},
    {name: "Server owner:", value: `${message.guild.owner}`},
    {name: "Server Members:", value: `${message.guild.memberCount}`}
  
  )
  .setFooter({ text: "Requested by " + message.author.tag, icon_url: message.author.displayAvatarURL })

  message.channel.send(messageEmbed)
}


exports.help = {
    name: "serverinfo"
}

exports.conf = {
    aliases: ["serverinfo"]
}
