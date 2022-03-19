const { Client } = require("tdl");
const { TDLib } = require("tdl-tdlib-addon");
// request for server scheduling
const cron = require("node-cron");

const client = new Client(new TDLib("/root/td/tdlib/lib/libtdjson.so"), {
  apiId: 12125368, // Your api_id
  apiHash: "58ab878bce3f94becf4c16b58cac7426",
  phone_number: +355676436522,
});
// +355676436522


client.on("error", console.error);

const chatIds = [
   -632378551
];

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
    await client.invoke({
      "@type": "sendMessage",
      chat_id: chatId,
      input_message_content: {
        "@type": "inputMessagePhoto",
        photo: {
          "@type": "inputFileLocal",
          path: "telegram.jpg",
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
