const fs = require('fs') 

exports.run = (client, message, args, config)  => {
  if(!message.mentions.users.first()){
      
    message.delete()
    const newMessage = args.join(" ");
    message.channel.send(newMessage)
    console.log(`${message.author.username} made me say ${newMessage}`)

    fs.readFile('./say.txt', function read(err, data) {
    if (err) {
        throw err;
    }
    const content = data;
    fs.writeFile('./say.txt', `${content}\n${message.author.username} made me say ${newMessage}`,(err) => { 
        if (err) throw err; 
      })
    })

   let cooldown = new Set();
let cdseconds = 20; 


  }else {
    message.channel.send("Sorry I can't ping")
  }
}