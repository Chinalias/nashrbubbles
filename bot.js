const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`

** #__Bُubbles Tumplr__ .

السلام عليكم
سيرفرنا جميل وينقصنا جمالك

Photo : https://cdn.discordapp.com/attachments/473805957810487296/484114453630156815/BU.png
-
Link : [ https://discord.gg/fec72py ]

حياك ي عيني ...**
`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
** #__Bُubbles Tumplr__ .

السلام عليكم
سيرفرنا جميل وينقصنا جمالك

Photo : https://cdn.discordapp.com/attachments/473805957810487296/484114453630156815/BU.png
-
Link : [ https://discord.gg/fec72py ]

حياك ي عيني ...**
`) 
}).catch(console.error)
})


client.login(process.env.BOT_TOKEN);
