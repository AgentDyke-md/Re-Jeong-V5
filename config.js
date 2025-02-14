require("./database/module")

//GLOBAL PAYMENT
global.storename = "Guanxii Re-Jeong"
global.dana = "085603351911"
global.qris = "https://deposit.pictures/p/8f3f4ab89de24d3faef51146d7439b3a"


// GLOBAL SETTING
global.owner = "27623649420"
global.namabot = "Re-Jeong V5"
global.nomorbot = "27623649420"
global.namaCreator = "Re-Jeong V5"
global.linkyt = "https://whatsapp.com/channel/0029ValVRdpI1rcfS1rAJq3h"
global.autoJoin = false
global.antilink = false
global.versisc = '5.0'

// DELAY JPM
global.delayjpm = 5500

// SETTING PANEL
global.apikey = 'PLTC'
global.capikey = 'PLTA'
global.domain = 'https://domain.com'
global.eggsnya = '15'
global.location = '1'



//GLOBAL THUMB

global.codeInvite = "https://chat.whatsapp.com/DuQU3pbRi4s6kwd5SW5der"
global.imageurl = 'https://telegra.ph/file/019207dd7bf306d343b7e.jpg'
global.isLink = 'https://whatsapp.com/channel/0029ValVRdpI1rcfS1rAJq3h'
global.packname = "Bugs"
global.author = "Re-Jeong"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
