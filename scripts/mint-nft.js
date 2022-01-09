require('dotenv').config();
const API_URL = process.env.API_URL;
const {
    createAlchemyWeb3
} = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/AvaNFT.sol/AvaNFT.json");
console.log(JSON.stringify(contract.abi));

const contractAddress = "0xe1437ce9afc37e46f103C356B9E7c9F7567425f0";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

async function mintNFT(tokenURI) {
    const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); //get latest nonce

    //the transaction
    const tx = {
        'from': PUBLIC_KEY,
        'to': contractAddress,
        'nonce': nonce,
        'gas': 500000,
        'maxPriorityFeePerGas': 1999999987,
        'data': nftContract.methods.mintNFT(PUBLIC_KEY, tokenURI).encodeABI()
    };

    const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
    const transactionReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

    console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`);
}

metadataAddress = 'https://gateway.pinata.cloud/ipfs/QmSF3WwyftE7ph1WBThdD2Bk38xxpxWuqHLAuvnwULzD1E';
mintNFT(metadataAddress);