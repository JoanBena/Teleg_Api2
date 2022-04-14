const { Client } = require('tdl')
const { TDLib } = require('tdl-tdlib-addon')
const tdlib = new TDLib();

// CLIENT 2 +3547665830
const client3 = new Client(tdlib, {
    apiId: 16203834, // Your api_id
    apiHash: "98c7eab3a432a60eb38b48c72ef1a19d",
    databaseDirectory: "_td_database2",
    filesDirectory: "_td_files2",
  });

client3.on('error', console.error)
async function chats(){
  await client3.connectAndLogin()

  const result = await client3.invoke({
    _: 'getChats',
    offset_order: '9223372036854775807',
    offset_chat_id: 0,
    limit: 100
  })
  
  console.log(result.chat_ids)

}
chats()
