require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// 0xe160B663ee52c4B97C364828aE0c55409673A365
require("dotenv").config();
module.exports = {
  solidity: "0.8.4",
  networks:{
    rinkeby:{
      url: process.env.STAGING_QUICKNODE_KEY,
      accounts:[process.env.PRIVATE_KEY],
    },
  },
};
