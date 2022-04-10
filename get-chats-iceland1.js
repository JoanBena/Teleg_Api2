const { Client } = require('tdl')
const { TDLib } = require('tdl-tdlib-addon')

const tdlib = new TDLib();
const iceland1 = new Client(tdlib, {
  apiId: 15683058 , // Your api_id
  apiHash: "b5a41f567cc799b2b56c09ac303a3496",
  databaseDirectory: "iceland_db1",
  filesDirectory: "iceland_file1",
});
//phone number: 

iceland1.on('error', console.error)
async function chats(){
  await iceland1.connectAndLogin()

  const result = await iceland1.invoke({
    _: 'getChats',
    offset_order: '9223372036854775807',
    offset_chat_id: 0,
    limit: 100
  })
  
  console.log(result.chat_ids)

}
chats()

