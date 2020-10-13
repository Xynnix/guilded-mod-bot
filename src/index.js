const Guilded = require('guilded.js');
const client = new Guilded.Client();

client.on("ready", () => {
  console.log("ready");
});

client.on("message", (msg) => {
  var text = msg.content[0].text;
 //get the message content for line 1
  if(!text) return;
  
  if(text == "ping") {
    msg.channel.send("pong");
  }
});

client.login(process.env.email, process.env.password);