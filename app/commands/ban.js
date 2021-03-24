const { MessageEmbed, Client, Discord, Collection } = require('discord.js');


exports.run = async (client, message, args, config)  => {
  const arg = message.content.split('').slice(1);


    const user = message.mentions.members.first(); // return the member that got ping(first)

    const reason = arg.slice(1).join(' '); // remove the first part of the message example "#ban @Asaf reason go here" => "reason go here" which return the reason


    // Check if an user mention exists in this message!
    if (!user) {
      try {
        // Check if a valid userID has been entered instead of a Discord user mention
        if (!message.guild.members.get(arg.slice(0, 1).join(' '))) throw new Error('Couldn\' get a Discord user with this userID!');
        // If the client (bot) can get a user with this userID, it overwrites the current user variable to the user object that the client fetched
        user = message.guild.members.get(ars.slice(0, 1).join(' '));
        user = user.user;
      } catch (error) {
        return message.reply('Couldn\'t get a Discord user with this userID!');
      }
    }
    

    //until here everything works

    if (user === message.author) return message.channel.send('You can\'t ban yourself'); // Check if the user mention or the entered userID is the message author himsmelf
    if (!reason) return message.reply('You forgot to enter a reason for this ban!'); // Check if a reason has been given by the message author
    if (!message.guild.member(user).bannable) return message.reply('You can\'t ban this user because you dont have enough permissions!'); // Check if the user is bannable with the bot's permissions
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("You don't have permissions to ban!")


    await user.ban() // Bans the user

    const banConfirmationEmbed = new MessageEmbed()
      .setColor('RED')
      .setDescription(`✅ ${user.tag} has been successfully banned!`);
    message.channel.send({
      embed: banConfirmationEmbed
    }); // Sends a confirmation embed that the user has been successfully banned
} 
