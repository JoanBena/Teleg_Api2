const { Client } = require("tdl");
const { TDLib } = require("tdl-tdlib-addon");
// request for server scheduling
const cron = require("node-cron");

const iceland2 = new Client(new TDLib(), {
  apiId: 16574436, // Your api_id
  apiHash: "ec12765bfa0fac380a6545ccb0d9f5cb",
    databaseDirectory: "iceland_db2",
    filesDirectory: "iceland_file2",
});
// phone number: +3547686869


iceland2.on("error", console.error);

const chatIds = [
  -1001449041382, -1001462764689, -1001226436898, -1001384995373,
  -1001282795991, -1001332790828, -1001488081229, -1001494134445,
  -1001433247452, -1001665570303, -1001480392581, -1001595987025,
  -1001573469414, -1001386173203, -1001294634113, -1001775187832,
  -1001407136702, -1001444428717, -1001538385044, -1001158622413, 
  -1001478361643, 1598053102
]

const flag ="🌋🌋 G-13 🌋🌋 SATIVA\n⚡️⚡️NORTHERN LIGHT 🌌 INDICA\n\n";
const motto = "🪙🚀THE BEST QUALITY🪙🚀 \n⚖️GRAM IS REAL GRAM⚖️\n\n";
const call ="Call me here📲 7689425☎️\nCall me here📲 7689425☎️\nCCall me here📲 7689425☎️\nText 📲 7689425📲\n\n";
const driving = "🚗🚗IM DRIVING +2 🚗🚗\nDRIVING TIME 🕔05:00-00:00🕛\n\n";
const location ="IM IN📍HALLGRIMSKIRKJA 📌 KLAMBRATÚN\n📌DOWNTOWN 📌 SKIPHOLT\n📌UNIVERSITY📌 VESTURBAER \n📌ARBAER📌BREIHOLT📌 \nHAFNAFJORDUR📌KOPAVOGUR\n📌SKEIFAN📌GARDABAER\n📌LAUGARDALUR GRAFARHOLTS\n📌MOSFELLSBAER\nAND MORE LOCATIONS IN REYKIAVIK 🏙\n\n";
const delivery = "🚗🚗FAST DELIVERY🚗🚗\n💯PROFESSIONAL SERVICE💯\n📈BEST RATES AROUND📈\n\n\n";
const cost ="➡️1G - 3K 💸\n➡️2G - 6K💸\n➡️3G - 9K 💸\n➡️5G - 14K💸\n➡️8G - 22K💸\n➡️10G - 27K💸\n➡️20G - 49K💸\n➡️30G - 79K💸\n➡️PAYMENT :CASH💸 \n\n";
var text = "Text 📲 7686985📲\n\n";
var te_xt = "Hærra🇮🇸💙📲💨🛫\nHærra🇮🇸💙📲💨🛫\nHærra🇮🇸💙📲💨🛫";

const fullMessage =flag + motto + call + driving + location + delivery + cost + text + te_xt;

async function main() {
  await iceland2.connectAndLogin();

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

async function sendMessageToGroupICE2(chat, message) {
    try {
        iceland2
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