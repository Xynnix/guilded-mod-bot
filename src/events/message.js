module.exports = (client, msg) => {
  var text = msg.content[0].text;
  if(!text) return;
  if (msg.content.indexOf(client.config.prefix) !== 0) return;
  const args = msg.content.slice(client.config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = client.commands.get(command);
  if (!cmd) return;
  cmd.run(client, msg, args);
};
