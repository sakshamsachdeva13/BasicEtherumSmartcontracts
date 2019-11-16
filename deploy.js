const HDWalletProvider = require('truffle-hdwallet-provider')
const Web3 = require('web3')
const {interface , bytecode } = require('./compile')  

const provider  = new HDWalletProvider(
    'enact square where lobster eyebrow slab series tenant matrix powder almost cup' , 
    "https://rinkeby.infura.io/v3/320a6aaec976427a8a5b65185f6ebf90"
)

const web3 = new Web3(provider)

const deploy = async () => {

   const accounts =  await web3.eth.getAccounts()

    console.log(accounts)
  const result =   await new web3.eth.Contract(JSON.parse(interface))
      .deploy({data : bytecode , arguments : ["hi , teri maa ki cht"]})
      .send({from : accounts[0] , gas : "1000000"})

      console.log('the contract has been deployed to ' + result.options.address)
}

deploy()