const { Client } = require("tdl");
const { TDLib } = require("tdl-tdlib-addon");
// request for server scheduling
const cron = require("node-cron");

const client = new Client(new TDLib(), {
  apiId: 12125368, // Your api_id
  apiHash: "58ab878bce3f94becf4c16b58cac7426",
});
// +355676436522


client.on("error", console.error);

const chatIds = [
  -381534820, -1001384995373, -1001469298633,
  -1001478361643, -1001386173203, -1001775187832,
  -1001331855971, -1001480392581, -1001462764689,
  -1001158622413, -1001218554026,-1001112793580, 
  -1001303959083, -1001764832515,-1001494134445, 
  -1001214829860, -1001733642935, -1001220034761,
  -1001665570303,     -742536170, -1001601903601
];

// 1001321016794, -1001234757139, -1001494134445, -1001764832515,
//   -1001324709443, -1001201380770, -1001291747525, -1001433247452,
//   -1001282795991, -1001240297153, -1001331855971, -1001469298633,
//   -1001303959083, -1001112793580, -1001449041382, -1001384995373,
//   -1001601903601, -1001491830790, -1001354447667, -1001227952965,
//   -1001386173203, -1001417098496, -1001775187832, -1001573469414,
//   -1001197544098, -1001158622413, -1001306941134, -1001393277530,
//   -783259581, -742536170,




const flag ="🇮🇸🇮🇸 BLUE CHEESE 💙💙\n🇮🇸🇮🇸 BLUE CHEESE 💙💙\n🇮🇸🇮🇸 BLUE CHEESE 💙💙\n\n";
const motto = "🪙🚀THE BEST QUALITY🪙🚀 \n⚖️GRAM IS REAL GRAM⚖️\n\n";
const call ="Call me here📲 7634570☎️\nCall me here📲 7634570☎️\nText 📲 7634570📲\n\n";
const driving = "🚗🚗IM DRIVING +2 🚗🚗\n⏰24/7⏰\n\n";
const offer = "🏡THE ORDER COMES TO THE\nDOOR OF YOUR HOME🏡📬\n\n";
const location ="IM IN📍HALLGRIMSKIRKJA\n📌KLAMBRATÚN 📌DOWNTOWN\n📌SKIPHOLT📌OLD WEST SIDE\n📌VESTURBAER📌HLÍĐAR\n📌KRINGLANAND MORE LOCATIONS\n\n";
const delivery = "🚗🚗FAST DELIVERY🚗🚗\n⏰⏰24/7⏰⏰\n\n";
const cost ="➡️1G - 3K 💸\n➡️3G - 8K 💸\n➡️5G - 14K💸\n➡️8G - 21K💸\n➡️10G - 27K💸\n➡️20G - 49K💸\n➡️30G - 79K💸\n➡️PAYMENT :CASH💸 OR 🅱️ BITCOIN🪙\n\n";
var text6 = "Hærra🇮🇸💙📲💨🛫\nText 📲 7634570📲";

const fullMessage =flag + motto + call + driving + offer + location + delivery + cost + text6;

async function main() {
  await client.connectAndLogin();

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



async function sendMessageToGroup(chatId, message) {
  try {
    /* 
    const message = await client.invoke({
      _: "sendMessage",
      chat_id: chatId,
      input_message_content: {
        _: "inputMessageText",
        text: {
          _: "formattedText",
          text: "Hi nga boti",
        },
      },
    }); 
    */

    await client.invoke({
      "@type": "sendMessage",
      chat_id: chatId,
      input_message_content: {
        "@type": "inputMessagePhoto",
        photo: {
          "@type": "inputFileLocal",
          path: "icelanddd.jpg",
        },
        caption: {
          "@type": "formattedText",
          text: message,
        },
      },
    });
  } catch (err) {
    console.error("sendMessage ERROR ", err);
  }
}

main();
