async function main() {
    // Grab the contract factory 
    const AvaNFT = await ethers.getContractFactory("AvaNFT");

    // Start deployment, returning a promise that resolves to a contract object
    const nft = await AvaNFT.deploy(); // Instance of the contract 
    console.log("Contract deployed to address:", AvaNFT.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });