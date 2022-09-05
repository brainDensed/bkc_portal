const main = async () => {
    const[owner, randomPerson] = await hre.ethers.getSigners();
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();
    console.log("Contract deployed to: ", waveContract.address);
    console.log("Contract deployed to: ", owner.address);
    let waveCount;
    waveCount = await waveContract.wavesCount();
    let waveTxn = await waveContract.wave();
    await waveTxn.wait();
    waveCount = await waveContract.wavesCount();
    waveTxn = await waveContract.connect(randomPerson).wave();
    await waveTxn.wait();
    waveCount = await waveContract.wavesCount();
};

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    }
    catch(error){
        process.exit(1);
    }
};
runMain();