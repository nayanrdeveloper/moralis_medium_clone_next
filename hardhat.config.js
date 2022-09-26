// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require('dotenv').config({path:__dirname+'/.env'})

// dotenv.config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
   mumbai : {
    url : process.env.NEXT_PUBLIC_POLYGON_MUMBAI,
    accounts : [process.env.NEXT_PUBLIC_PRIVATE_KEY],
   },
  },
  etherscan: {
    apiKey : process.env.NEXT_PUBLIC_API_KEY,
  }
};
