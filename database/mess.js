require("./global")

const mess = {
   wait: "`processibg`",
   success: "`Done`",
   on: "*`[ On Feature ]` - on*", 
   off: "*`[ Off Feature ]` - Off*",
   query: {
       text: "`Where is the text?`",
       link: "`Where is the link?`",
   },
   error: {
       fitur: "`💔`",
   },
   only: {
       group: "`Not available `",
       private: "`Not available `",
       owner: "`My owner doesn't look like you`",
       admin: "`Need admin privileges `",
       badmin: "`Need admin privileges `",
       premium: "`Youre not a premium user`",
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
