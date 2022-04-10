const { Client } = require("tdl");
const { TDLib } = require("tdl-tdlib-addon");
// request for server scheduling
const cron = require("node-cron");

const iceland3 = new Client(new TDLib(), {
  apiId: 19161545, // Your api_id
  apiHash: "56e1a9b06ad194e8c92fdd306f936e6f",
    databaseDirectory: "iceland_db3",
    filesDirectory: "iceland_file3",
});
// phone number: +3547689425


iceland3.on("error", console.error);

const chatIds = [
  -1001240297153, -1001227952965, -1001331855971, -1001412248161,
  -1001393277530, -1001733642935, -1001201380770, -1001324709443,
  -1001200077077, -1001458905905, -1001440566769, -1001407136702,
  -1001278242024, -1001424435551, -1001324502344, -1001224476835,
  -1001306941134, -1001171187505, -1001458905905, 363430547, 
  -227003856,
]


const flag ="🌋🌋 G-13 🌋🌋 SATIVA\n⚡️⚡️NORTHERN LIGHT 🌌 INDICA\n\n";
const motto = "🪙🚀THE BEST QUALITY🪙🚀 \n⚖️GRAM IS REAL GRAM⚖️\n\n";
const call ="Call me here📲 7686918☎️\nCall me here📲 7686918☎️\nCall me here📲 7686918☎️\nText 📲 7686918📲\n\n";
const driving = "🚗🚗IM DRIVING +2 🚗🚗\nDRIVING TIME 🕔05:00-00:00🕛\n\n\n";
const location ="IM IN📍HALLGRIMSKIRKJA 📌 KLAMBRATÚN\n📌DOWNTOWN 📌 SKIPHOLT\n📌UNIVERSITY📌 VESTURBAER \n📌ARBAER📌BREIHOLT📌 \nHAFNAFJORDUR📌KOPAVOGUR\n📌SKEIFAN📌GARDABAER\n📌LAUGARDALUR GRAFARHOLTS\n📌MOSFELLSBAER\nAND MORE LOCATIONS IN REYKIAVIK 🏙\n\n";
const delivery = "🚗🚗FAST DELIVERY🚗🚗\n💯PROFESSIONAL SERVICE💯\n📈BEST RATES AROUND📈\n\n\n";
const cost ="➡️1G - 3K 💸\n➡️2G - 6K💸\n➡️3G - 9K 💸\n➡️5G - 14K💸\n➡️8G - 22K💸\n➡️10G - 27K💸\n➡️20G - 49K💸\n➡️30G - 79K💸\n➡️PAYMENT :CASH💸 \n\n";
var text = "Text 📲 7686918📲\n\n";
var te_xt = "Hærra🇮🇸💙📲💨🛫\nHærra🇮🇸💙📲💨🛫\nHærra🇮🇸💙📲💨🛫";

const fullMessage =flag + motto + call + driving + location + delivery + cost + text + te_xt;

async function main() {
  await iceland3.connectAndLogin();

  // execution cycle 30 sec and returns the function
  cron.schedule("*/30 * * * * *", async () => {
    let date = new Date();
    console.log(
      `scheduled ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    );
    for (const chatId of chatIds) {
      await sendMessageToGroup(chatId, fullMessage);
    }
  });
}

async function sendMessageToGroupICE3(chat, message) {
    try {
        iceland3
          .invoke({
            "@type": "sendMessage",
            chat_id: chat,
            input_message_content: {
              "@type": "inputMessagePhoto",
              photo: {
                "@type": "inputFileLocal",
                path: "poster_telegram2.jpg",
              },
              caption: {
                "@type": "formattedText",
                text: message,
              },
            },
            options: {
              _: "messageSendOptions",
              from_background: true,
            },
          })
          .then((m) => console.log(chat))
          .catch((e) => console.log(e));
        } catch (err) {
        console.error("sendMessage ERROR ", err);
    }
} 

main();
