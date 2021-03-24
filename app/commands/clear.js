

exports.run = async (client, message, args, config)  => {


  if(message.member.hasPermission("MANAGE_MESSAGES")) {     
    var deleteCount = parseInt(args[0], 10);
    deleteCount++;


  if(!deleteCount || deleteCount < 1 || deleteCount > 1000000)
  return message.reply("Please provide a number between 1 and 1000000 for the number of messages to delete");

const fetched = await message.channel.messages.fetch({limit: deleteCount});
message.channel.bulkDelete(fetched)
  .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
}

}

//c 
