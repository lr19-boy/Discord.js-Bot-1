const app = require("express")();

app.get("/", (req, res) => res.send("Bot is up"));

module.exports = () => {
  app.listen(4000);
};
