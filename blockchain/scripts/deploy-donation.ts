import { ethers } from "hardhat";

async function main() {
    const donation = await ethers.deployContract("DonationContract");

    await donation.waitForDeployment();

    console.log(`donation deployed to ${donation.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});