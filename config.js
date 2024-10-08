const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_31_10_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA2MyxcbiAgICAgICAgNDksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTkxLFxuICAgICAgICA3MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAxMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDgyLFxuICAgICAgICAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDczLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDMsXG4gICAgICAgIDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTU0LFxuICAgICAgICA5NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0LFxuICAgICAgICAxODcsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDcsXG4gICAgICAgIDk3LFxuICAgICAgICAxMixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDksXG4gICAgICAgIDI1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg4LFxuICAgICAgICA2MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgODYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMixcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA1NixcbiAgICAgICAgMTM1LFxuICAgICAgICAzNixcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDMxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNixcbiAgICAgICAgNjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDg0LFxuICAgICAgICA5MixcbiAgICAgICAgMTA4LFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODIsXG4gICAgICAgIDg4LFxuICAgICAgICA5MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDk1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMixcbiAgICAgICAgODMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDgzLFxuICAgICAgICAxNSxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NSxcbiAgICAgICAgNzksXG4gICAgICAgIDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDQxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTQsXG4gICAgICAgIDI1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDU4LFxuICAgICAgICA2NCxcbiAgICAgICAgNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDM5LFxuICAgICAgICA3NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDY5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE1LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDIsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTUxLFxuICAgICAgICA0MixcbiAgICAgICAgMjQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTkwLFxuICAgICAgICA0MixcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInQrOEFuQk80RVk4bWU2SnY5bXZLK0VkYngvdXh5clMwZW9BNHdzeHBkcUk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjAxMjI1MDYzNjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1QUFFQTBDMjBCN0VCRjI1MUM5RjY5OTBDMTNFNkQ4NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjg0MTU4NzhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMDEyMjUwNjM2NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjczNzJEMDVCN0I5MEM3MDVDRDkyRDJBNzhDOUVFNUZDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyODQxNTg3OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIwMTIyNTA2MzY1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkNENzc0MTFBNjMyODI2RUJFQUQ3NjY4ODZDQUU2MTlcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4NDE1ODc5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjAxMjI1MDYzNjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCRUI1OEY2QjBEMUFFMjRCN0FDQzdDNkEwNTgyNjM5RFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3Mjg0MTU4ODBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidXIyTEt5a1lUU0dIRmNWTlNtRzFKUVwiLFxuICBcInBob25lSWRcIjogXCI5ODRlNDBiNC0wODM4LTQ4NWEtYmZlYi03N2I4NDhmNGQzODlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU4LFxuICAgICAgNTMsXG4gICAgICAxNjgsXG4gICAgICAxMTMsXG4gICAgICA2MixcbiAgICAgIDEzMSxcbiAgICAgIDE1NyxcbiAgICAgIDE4MSxcbiAgICAgIDM4LFxuICAgICAgMTgsXG4gICAgICAyMyxcbiAgICAgIDIzNCxcbiAgICAgIDE2NixcbiAgICAgIDEzOCxcbiAgICAgIDM5LFxuICAgICAgODEsXG4gICAgICAxNzYsXG4gICAgICAzNixcbiAgICAgIDIwMSxcbiAgICAgIDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzQsXG4gICAgICAyMSxcbiAgICAgIDE4OCxcbiAgICAgIDY3LFxuICAgICAgMTIsXG4gICAgICAxNSxcbiAgICAgIDE2MixcbiAgICAgIDI1MixcbiAgICAgIDEzNyxcbiAgICAgIDEyOCxcbiAgICAgIDIyNSxcbiAgICAgIDc0LFxuICAgICAgMTUxLFxuICAgICAgMjAxLFxuICAgICAgNDQsXG4gICAgICAzNCxcbiAgICAgIDE3LFxuICAgICAgOCxcbiAgICAgIDIyMyxcbiAgICAgIDEzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJNRVFBM041NVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjAxMjI1MDYzNjU5OjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLZhdi32YTZgiDYqNmGINmG2KfYtdixXCIsXG4gICAgXCJsaWRcIjogXCI5MzI5NTk2NzUxNDYyNTo1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ1AycXI2NEdFSUdSbHJnR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiaHczTmRwOURNelJCeGdiUzBmSnNaUURRakR3c1FsUk1iVFR4THZvUnhsYz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ0RTlsSlAvR1lnR21DRktrS0pZelpEbXpqOEwrSjlaby9SbFFlRmdmc3RzckJFUzFlR2NZTGdnZXBqZ25JTmw4N0x2Sm5zWTlPNk5NcWhENC9DblZCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI2OUZaNUdKb3lBV1BYTldtOURBWUhjWjhFWTViRS9BNE5MREFBcjkzcUNqeWxTaXVaU3pxMDdkNTFYUk9ENnZEdlVsNkhnTEd6Uk9oR2ZpWWxqdTNBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMDEyMjUwNjM2NTk6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyODQxNTg3NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU96bVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3ptLmpzb24iOiAie1wia2V5RGF0YVwiOlwia01uNytDMnpDSEo5ZlFPNklkRE1KQTV2VDVha2toM1FQbnJWZnpPSmttTT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNzA3ODU3Mjc3LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
