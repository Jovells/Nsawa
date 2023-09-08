import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { ethers } from "hardhat";
import { expect } from "chai";
import { DonationContract, DonationContract__factory } from "../typechain-types";



describe("DonationContract", function () {

  type PromiseType<T extends Promise<any>> = T extends Promise<infer U> ? U : never;
  type Signer = PromiseType<ReturnType<typeof ethers.getSigner>>;
  let donationContract: DonationContract, owner: Signer, donor1: Signer, donor2: Signer, beneficiary1: Signer, beneficiary2: Signer;

  beforeEach(async function () {
    ({ donationContract, owner, donor1, donor2, beneficiary1, beneficiary2 } = await loadFixture(deployDonationFixture));

  });

  async function deployDonationFixture() {
    // Contracts are deployed using the first /account by default
    const [owner, donor1, donor2, signer1, signer2, signer3, signer4] = await ethers.getSigners();
    const Donation = await ethers.getContractFactory("DonationContract");
    const donationContract: DonationContract = await Donation.deploy();
    return { donationContract, owner, donor1, donor2, beneficiary1, beneficiary2 };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await donationContract.owner()).to.equal(await owner.getAddress());
    });
    it('should set the right token distribution thresholds', async function () {
      expect(await donationContract.tokenDistributiontThresholds(0)).to.equal(BigInt('100'));
      expect(await donationContract.tokenDistributiontThresholds(1)).to.equal(BigInt('10000'));
      expect(await donationContract.tokenDistributiontThresholds(2)).to.equal(BigInt('1000000'));
    });
  });

  describe("Donation", function () {

  })



})