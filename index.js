const mineflayer = require('mineflayer');
const { keep_alive } = require("./keep_alive")
  
function createBot () {
  const bot = mineflayer.createBot({
    host: "evomc.sparked.network",
    port: 25565,
    username: "evomc_121"
  })

  bot.on('error', (err) => console.log(err))
  bot.on('end', createBot)

  bot.once("spawn", ()=>{
  bot.chat("hi im a bot");
}); 

  bot.on('login',function(){
console.log("Bot Logged In")
	bot.chat("/login Evomc2127@");
});
}

createBot()
