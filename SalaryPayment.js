
var Tx = require('ethereumjs-tx')
const Web3 = require('web3')
const web3 = new Web3('https://ropsten.infura.io/v3/942caa4ef18b43a4ba42c3378e7b974c')

const company_account = '' //TO BE FILLED IN FROM DATA FILE (hex string)
const employee_accounts = []  //TO BE FILLED IN FROM DATA FILE (array of hex string)
const company_privateKey = '' //TO BE FILLED IN FROM DATA FILE (hex string)
const salary = '' //TO BE FILLED IN FROM DATA FILE (string)

web3.eth.getTransactionCount(company_account, (err, txCount) => {
    //Build the transaction
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        to: employee_accounts,
        value: web3.utils.toHex(web3.utils.toWei(salary, 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
    }

    //Sign the transaction
    const tx = new Tx(txObject)
    tx.sign(company_privateKey)

    const serializedTransaction = tx.serialize()
    const raw = '0x' + serializedTransaction.toString('hex')

    
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log('txHash: ', txHash)
    })

    //Broadcast the transaction
    const fs = require('fs')
    web3.eth.sendSignedTransaction(raw, (err, txHash) => {
        console.log('txHash: ', txHash)

        //Write transaction hash to TransactionHistory file
        transactionHash = txHash + "\n"
        fs.writeFile('TransactionHistory.txt', transactionHash, (err) => {
            if (err) throw err;
        })
    })
})