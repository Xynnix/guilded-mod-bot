exports.run = (client, msg, args) => {
         msg.channel.send({"type": "embed", "content": {
    "title": msg.author.username,
    "description": args.join(" "),
    "color":16669820 }})
}

/*
{"type": "embed", "content": {
    "title":"title",
    "description":"description",
    "color":16669820,
    "thumbnail": {
      "url": "image url"
    },
    "image": {
      "url": "image url"
    },
    "footer": {
      "text": "footer"
    },
    "fields": [
      {
      "name": "field 1",
      "value": "cool field"
      }
    ]
}}
*/
