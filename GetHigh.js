const { Client } = require("tdl");
const { TDLib } = require("tdl-tdlib-addon");
// request for server scheduling
const cron = require("node-cron");

//+3547604215 

const client2 = new Client(new TDLib(), {
  apiId: 16016037, // Your api_id
  apiHash: "fdb63d85749762ec1f65ba14edba99fa",
  databaseDirectory: "_td_database3",
  filesDirectory: "_td_files3",
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
client2.on("error", console.error);


const chatIds_2 = [
  -1001775187832, -1001440566769, -1001294634113, -1001331855971, 
  -1001462764689, -1001218554026, -1001214829860, -1001733642935, 
  -1001220034761, -1001665570303, -1001324709443, -1001224476835, 
  -1001226436898, -1001491830790, -1001595987025, -1001424435551,     
  -1001201380770, -1001488081229, -742536170, 
];



// -1001234757139, -1001240297153, -1001354447667, -1001227952965,
//   -1001331855971, -1001201380770, -1001332790828, -1001488081229,
//   -1001449041382, -1001197544098, -1001462764689, -1001291747525,
//   -1001226436898, -1001440566769, -1001358306826, -1001491830790,
//   -1001444428717, -1001303959083, -1001112793580, -1001324709443,
//   -1001494134445, -1001480392581, -1001384995373, -1001595987025,
//   -1001478361643, -1001412248161, -1001424435551, -1001293195336,
//   -1001158622413, -1001433247452, -1001775187832, -1001469298633,
//   -1001285168721, -1001224476835,     -363430547, -1001499893563,
//   -1001538385044, -1001294634113, -1001282795991, -1001386173203,
//   -1001407136702, -1001324502344, -1001665570303, -1001192385192,
//           777000, -1001278242024, -1001392470946, -1001327799864,
//   -1001459041377, -1001285121641,     -227003856,     -742536170,
//   -1001171187505, -1001733642935, -1001218554026, -1001403123849,
//   -1001214829860, -1001220034761, -1001263088864, -1001316326190,
//   -1001179326773, -1001192145014, -1001295690800, -1001435938045,
//   -1001490900814, -1001393172232, -1001299296133, -1001329479727,
//   -1001458900651, -1001261566346, -1001298106398, -1001119396063,
//   -1001358616961, -1001179133089, -1001216976284, -1001427131254,
//   -1001376462001, -1001419299699, -1001342886011, -1001092900815,
//   -1001508755846,     -381534820, -1001292475522, -1001242314365,
//   -1001481109712, -1001417098496, -1001237329681,     5246475997,
//       5270392077, -1001684406627,     5107915024,     5129730402


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

  await client2.connectAndLogin();

  // execution cycle 30 sec and returns the function
  cron.schedule("*/30 * * * * *", async () => {
    let date = new Date();
    console.log(
        `scheduled_2 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
      );
    for (const chat2 of chatIds_2) {
      await sendMessageToGroupCL2(chat2, fullMessage);
    }
  });
}



async function sendMessageToGroupCL2(chat2, message) {
  try {
    client2
      .invoke({
        "@type": "sendMessage",
        chat_id: chat2,
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
      .then((m) => console.log(chat2))
      .catch((e) => console.log(e));
  } catch (err) {
    console.error("sendMessage ERROR ", err);
  }
}
main();