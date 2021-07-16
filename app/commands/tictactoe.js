const { tictactoe } = require('reconlx');

module.exports = {
    name : 'tictactoe',
    description: 'Play Tic-Tac-Toe with a friend!',
    run : async(client, message, args) => {
        const member = message.mentions.members.first() 
            if(!member)  return  message.channel.send('Please ping a member and play your game!')
        
        new tictactoe({
            player_two: member, 
            message: message
        })
    }
}
