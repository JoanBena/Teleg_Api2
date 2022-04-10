const { Client } = require('tdl')
const { TDLib } = require('tdl-tdlib-addon')

const tdlib = new TDLib();
const iceland2 = new Client(tdlib, {
  apiId: 16574436, // Your api_id
  apiHash: "ec12765bfa0fac380a6545ccb0d9f5cb",
  databaseDirectory: "iceland_db2",
  filesDirectory: "iceland_file2",
});
//phone number: 

iceland2.on('error', console.error)
async function chats(){
  await iceland2.connectAndLogin()

  const result = await iceland2.invoke({
    _: 'getChats',
    offset_order: '9223372036854775807',
    offset_chat_id: 0,
    limit: 100
  })
  
  console.log(result.chat_ids)

}
chats()

