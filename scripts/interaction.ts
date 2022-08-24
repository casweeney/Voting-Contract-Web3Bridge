import { ethers } from "hardhat";

const main = async () => {
    ////// Alternative way of interactng with a deployed contract without using Contract Interface /////
    const Voting = await ethers.getContractFactory("VotingPoll");
    const voting = Voting.attach("0x2Eb23F981E138d0c3C4ceDbd1a04b1a203Fe6c57");

    ////// CREATE VOTING POLL /////
    // const createVotingPoll = await voting.createPoll("2023 Election", ["Obi", "Atiku", "Tinubu"]);
    // const votingPollTxnReciept = await createVotingPoll.wait();
    // console.log("Voting Poll: ", votingPollTxnReciept);

    ///// FETCH CANDIDATES //////
    // const fetchCandidates = await voting.fetchCandidates();
    // console.log("Candidates: ", fetchCandidates);

    //// VOTE CANDIDATE //////
    // const vote = await voting.vote(0);
    // const voteReceipt = await vote.wait();
    // console.log("Vote: ", voteReceipt);

    ///// GET WINNER INDEX /////
    // const getWinner = await voting.winningCandidate();
    // console.log("Winner: ", getWinner);


    ///// GET THE NAME OF WINNER /////
    const winnerName = await voting.winnerName();
    console.log("Winner name: ", winnerName);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});