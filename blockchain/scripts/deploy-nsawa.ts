import { ethers } from "hardhat";

async function main() {
    const nsw = await ethers.deployContract("NSWToken",[BigInt('1000000000000000000000000')], ['0xDb9ebFe6092f8B3Cb22A6236c69ca460fA1a4aE1']);

    await nsw.waitForDeployment();

    console.log(`nsawa deployed to ${nsw.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});