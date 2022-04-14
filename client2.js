const { Client } = require("tdl");
const { TDLib } = require("tdl-tdlib-addon");
// request for server scheduling
const cron = require("node-cron");



const client3 = new Client(new TDLib(), {
  apiId: 16203834, // Your api_id 
  apiHash: "98c7eab3a432a60eb38b48c72ef1a19d",
  databaseDirectory: "_td_database2",
  filesDirectory: "_td_files2",
  tdlibParameters: {
    use_message_database: false,
    use_secret_chats: true,
    system_language_code: 'en',
    application_version: '1.0',
    device_model: 'Unknown device',
    system_version: 'Unknown',
    enable_storage_optimizer: true
  }
});
// TIME OUT -1001329479727,-1001298106398, -1001295690800, -1001490900814, -1001342886011, NOT RIGHT MESSAGA TO SEND -1001292475522, -1001263088864,
const chatIds_3 = [
  -1001433247452, -1001306941134, -1001282795991, -1001573469414, 
  -1001171187505, -1001278242024, -1001458905905, -1001407136702,
  -1001449041382, -1001384995373, -1001444428717, -1001386173203, 
  -363430547, -227003856, 
 ];

//  -1001240297153, -1001227952965, -1001331855971, -1001332790828,
//  -1001412248161, -1001462764689, -1001324709443, -1001494134445,
//  -1001226436898, -1001480392581, -1001224476835, -1001282795991,
//  -1001294634113, -1001775187832,     -363430547, -1001407136702,
//  -1001444428717, -1001201380770, -1001488081229, -1001449041382,
//  -1001469298633, -1001393277530, -1001384995373, -1001433247452,
//  -1001573469414, -1001733642935, -1001386173203, -1001538385044,
//  -1001306941134, -1001595987025, -1001278242024, -1001324502344,
//  -1001424435551, -1001200077077, -1001435938045, -1001263088864,
//  -1001478361643, -1001665570303, -1001440566769, -1001158622413,
//      -227003856, -1001171187505, -1001458905905, -1001295690800,
//  -1001490900814, -1001192145014, -1001327799864, -1001342886011,
//          777000, -1001329479727, -1001298106398, -1001292475522,
//      1281480284,     1525673942,     5221507074,     5237371906,
//      5049534408,     1388449044,     1251892899,     5154821863,
//      1962490075,     1317938594,     5286294770,      769009993,
//      1207252714

const flag ="💙💙 BLUE CHEESE 🧀🧀 INDICA\n💙💙 BLUE DREAM 🌠🌠 SATIVA\n\n";
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

  await client3.connectAndLogin();

  // execution cycle 30 sec and returns the function
  cron.schedule("*/30 * * * * *", async () => {
    let date = new Date();
    console.log(
        `scheduled_3 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      );
    for (const chat3 of chatIds_3) {
      await sendMessageToGroupCL2(chat3, fullMessage);
    }
  });
}



async function sendMessageToGroupCL2(chat3, message) {
  try {
    client3
      .invoke({
        "@type": "sendMessage",
        chat_id: chat3,
        input_message_content: {
          "@type": "inputMessagePhoto",
          photo: {
            "@type": "inputFileLocal",
            path: "poster_telegram_api1.jpg",
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
      .then((m) => console.log(chat3))
      .catch((e) => console.log(e));
  } catch (err) {
    console.error("sendMessage ERROR ", err);
  }
}
main();