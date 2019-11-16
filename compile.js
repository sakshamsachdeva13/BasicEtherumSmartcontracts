const path = require('path')
const fs = require('fs')

const solc = require('solc')

var inboxpath = path.resolve(__dirname , "contracts" , "inbox.sol")

var source  =  fs.readFileSync(inboxpath , 'utf8')

 module.exports =  solc.compile(source , 1).contracts[":Inbox"]

