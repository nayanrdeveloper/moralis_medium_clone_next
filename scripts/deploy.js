const hre = require("hardhat");

async function main() {
  const Medium = await hre.ethers.getContractFactory("Medium");
  const medium = await Medium.deploy("Medium Blog", "MDBL", "100000000000000000");

  await medium.deployed();

  console.log(
    `Medium Blog Deployed at ${medium.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
