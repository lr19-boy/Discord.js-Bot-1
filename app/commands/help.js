const { MessageEmbed, Client, Discord, Collection } = require('discord.js');

exports.run = (client, message, args, config) => {
  const messageEmbed = new MessageEmbed()
  .setTitle("Perfectly Fun Bot")
  .addFields(
    { name: "Help", value: "Show All Of The Commands Of The Bot (phelp)" },
    { name: "Ascii", value: "Converts to ascii word (pascii  hi"},
    { name: "Bal", value: "Checks your balance money (pbal)"},
    { name: "Buy", value: "You can buy a car or a laptop or a watch (pbuy laptop/car/watch)"},
    { name: "Calculate", value: "For example: 10+20=30. Like that!"},
    { name: "Covid", value: "It counts the covid number by Country by Country or State by State! For example: pcovid world or pcovid India"},
    { name: "Daily", value: "Daily you will get a random money! (pdaily)"},
    { name: "Meme", value: "Send you a random fun meme to you! (pmeme)"},
    { name: "Weather", value: "It tells you the weather condition of your place! For example: pweather India"},
    { name: "Work", value: "If you work, you will earn more money. :smile: (pwork)"},
    { name: "Ping", value: "Just type pping"},
    { name: "Say", value: "What you said it reply that word  (psay)"},
    { name: "Invite", value: "The bot will send you the invite link! (pinvite)"},
    { name: "How are you", value: "Just type how are you (all in small letters)"},
    { name: "I am fine", value: "Just type i am fine (all in small letters)"},
    { name: "Ob", value: "Just type pob (all in small letters)"},
  )
  .setColor("RANDOM")
  .setFooter('©️ Perfectly Fun Bot. More commands will be added soon'); 

  message.channel.send(messageEmbed)

}
