const { MessageEmbed, Client, Discord, Collection } = require('discord.js');
const client = new Client();
const fs = require('fs');
const Enmap = require('enmap');
const moment = require("moment");
const { join } = require("path");


let db = JSON.parse(fs.readFileSync("./database.json", "utf8"));
let cooldown = new Set();
let cdseconds = 5;

client.commands = new Enmap();

const config = {
  token: process.env.token,
  prefix: process.env.prefix,
  owner: process.env.owner,
};

client.on("ready", function() {
  console.log(`${client.user.username} Is Now Awake`);
  const channelID = "806027498566451210";
  const message = "I`m Online";
  //client.channels.cache.get(channelID).send(message)
  client.user.setPresence({
    status: "online",
    //online,idle...
    activity: {
      name: "Your activity list", //the status
      type: "LISTENING" //type
    }
  })
});

client.on('message', message => {
	if (message.content === 'hi') {
		message.channel.send('Hello My Friend :100:');
	}
});

client.on('message', message => {
	if (message.content === 'hello') {
		message.channel.send('Hi My Friend :100:');
	}
});

client.on('message', message => {
  if (message.content === 'how are you') {
     return message.channel.send("Yeah :arrow_right: I am fine. And what's up ?"); 
}});

client.on('message', message => {
  if (message.content === 'i am fine') {
     return message.channel.send("Cool my friend"); 
}});

client.on("message", async message => {
  if (message.author.bot) return; //so other bots will not use the bot + make the bot faster
  if (!message.content.startsWith(config.prefix)) return; //make bot faster

  let command = message.content.split(" ")[0].replace(config.prefix, "")


  const cmd = client.commands.get(command)
  if (!cmd) return;

  const args = message.content.split(" ").slice(1)


  cmd.run(client, message, args, config)
})

client.on("message", async message => {
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content
    .slice(config.prefix)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command == "ticket") {
    // ticket-setup #channel

    let channel = message.mentions.channels.first();
    if (!channel) return message.reply("Usage: `pticket #channel`");

    let sent = await channel.send(
      new Discord.MessageEmbed()
        .setTitle("Ticket System")
        .setDescription("React to open a ticket!")
        .setFooter("Ticket System")
        .setColor("#a40000")
    );

    sent.react("🎫");
    settings.set(`${message.guild.id}-ticket`, sent.id);

    message.channel.send("Ticket System Setup Done!");
  }

  if (command == "close") {
    if (!message.channel.name.includes("ticket-"))
      return message.channel.send("You cannot use that here!");
    message.channel.delete();
  }
});

client.on("messageReactionAdd", async (reaction, user) => {
  if (user.partial) await user.fetch();
  if (reaction.partial) await reaction.fetch();
  if (reaction.message.partial) await reaction.message.fetch();

  if (user.bot) return;

  let ticketid = await settings.get(`${reaction.message.guild.id}-ticket`);

  if (!ticketid) return;

  if (reaction.message.id == ticketid && reaction.emoji.name == "🎫") {
    reaction.users.remove(user);

    reaction.message.guild.channels
      .create(`ticket-${user.username}`, {
        permissionOverwrites: [
          {
            id: user.id,
            allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
          },
          {
            id: reaction.message.guild.roles.everyone,
            deny: ["VIEW_CHANNEL"]
          }
        ],
        type: "text"
      })
      .then(async channel => {
        channel.send(
          `<@${user.id}>`,
          new Discord.MessageEmbed()
            .setTitle("Welcome to your ticket!")
            .setDescription("We will be with you shortly")
            .setColor("#a40000")
        );
      });
  }
});

fs.readdir('./commands/', async (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
    if (!file.endsWith('.js')) return;
    let props = require(`./commands/${file}`);
    let cmdName = file.split('.')[0];
    console.log(`Command Powered: '${cmdName}'`);
    client.commands.set(cmdName, props);
  });
});

require('./server.js')();
client.login(config.token);
