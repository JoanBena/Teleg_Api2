const { Client } = require('tdl')
const { TDLib } = require('tdl-tdlib-addon')

const iceland3 = new Client(new TDLib("/root/td/tdlib/lib/libtdjson.so"), {
    apiId: 19161545, // Your api_id
    apiHash: "56e1a9b06ad194e8c92fdd306f936e6f",
    databaseDirectory: "iceland_db3",
    filesDirectory: "iceland_file3",
  });
//phone number: 

iceland3.on('error', console.error)
async function chats(){
  await iceland3.connectAndLogin()

  const result = await iceland3.invoke({
    _: 'getChats',
    offset_order: '9223372036854775807',
    offset_chat_id: 0,
    limit: 100
  })
  
  console.log(result.chat_ids)

}
chats()

