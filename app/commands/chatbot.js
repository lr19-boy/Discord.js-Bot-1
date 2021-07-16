const {chatBot} = require("reconlx");

module.exports = {
  name: "chatbot",
  run: async(client, message, args) => {
    chatBot(message, args.join(" "))
  }
};
