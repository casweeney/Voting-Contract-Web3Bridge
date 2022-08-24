const { ethers } = require("hardhat");

async function main() {
  const Voting = await ethers.getContractFactory("VotingPoll");
  const voting = await Voting.deploy();
  await voting.deployed();

  console.log("Voting Poll deployed to: ", voting.address);
  /// Deployed contract address on rinkeby: 0x2Eb23F981E138d0c3C4ceDbd1a04b1a203Fe6c57
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });