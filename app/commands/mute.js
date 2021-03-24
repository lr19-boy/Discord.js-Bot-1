module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission(['ADMINISTRATOR'])) return;
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
    if(member.hasPermission(['ADMINISTRATOR']) && !message.member.hasPermission('ADMINISTRATOR')) return;

        let mutedRole = message.guild.roles.cache.get('794877827849256960');
        let verifiedRole = message.guild.roles.cache.get('775969642372005889');
        if(mutedRole) {
            member.roles.add(mutedRole);
            member.roles.remove(verifiedRole);
            message.channel.send("User was Successfully muted.");
        }
}

module.exports.config = {
    name: "mute",
    description: "",
    usage: "!mute",
    accessableby: "Moderator",
    aliases: []
}
