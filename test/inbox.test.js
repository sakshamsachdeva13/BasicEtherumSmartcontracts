const Web3 = require('web3')
const assert = require('assert')
const ganache = require('ganache-cli');
const {interface , bytecode} =  require('../compile')

  console.log(interface)
const  web3  = new Web3(ganache.provider());

 let accounts
 let inbox
beforeEach( async () => {

     accounts = await  web3.eth.getAccounts()  

    console.log(accounts)

   inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data : bytecode , arguments : ["mu mai lele bhenchod !!"]})
    .send({from : accounts[0] , gas : "1000000"})
})


describe('weird flex but okay !!' , () => {
   
    it('contract deploying' , () => {

        assert.ok(inbox.options.address)
    })
})