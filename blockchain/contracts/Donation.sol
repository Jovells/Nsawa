// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


contract DonationContract {
    address public owner;
    // address public currentBeneficiary;
    bool public emergencyStop;
    uint256 public donationCounter;
    uint256 public organisationCounter;
    uint256 public deploymentblockNumber;
    mapping(uint => Organisation) public organisations;


    uint256[] public tokenDistributiontThresholds;



    struct Organisation {
        string name;
        string description;
        string website;
        string logo;
        address [] signers;
        uint32 signersRequired;
        mapping (address => address) requests;
        uint256 amountReceived;
    }

    event DonationReceived(uint256 indexed donationId, uint256 indexed organisationID, address indexed donor, uint256 amount, string message, uint256 timestamp);
    event BeneficiaryChanged(address indexed newBeneficiary);
    event EmergencyStopSet(bool indexed emergencyStop);
    event FundsWithdrawn(address indexed beneficiary, uint256 amount, uint256 timestamp);
    event AddedOrganisation(uint organnisationId, string name, string description, string website, string logo);
    event WithdrawalRequested(uint256 indexed transactionId, address indexed signer, uint256 amount, uint256 timestamp);
    event NsawaTransfer(uint256 indexed donationId, address indexed donor, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the contract owner can call this function");
        _;
    }

    modifier notEmergencyStopped() {
        require(!emergencyStop, "Operations for this organisation are currently paused");
        _;
    }

    constructor() {
        owner = msg.sender;
        emergencyStop = false;
        deploymentblockNumber = block.number;
        tokenDistributiontThresholds = [1e2, 1e4, 1e6];

    }

    function getAmountReceived(uint organisationId) external view returns (uint256) {
      return organisations[organisationId].amountReceived;
    }

    function donate(string memory _message, uint organisationId) public payable notEmergencyStopped{
        require(msg.value > 0, "Donation amount must be greater than 0");

        organisations[organisationId].amountReceived += msg.value;
        //send tokens to donor based on amount donated
        transferNSWTokens(donationCounter, msg.sender, msg.value);

        emit DonationReceived(++donationCounter, organisationId, msg.sender , msg.value, _message, block.timestamp);
    }

    function addOrganisation(address[] memory signers, string memory name, string memory description, string memory website, string memory logo) external onlyOwner {
        ++organisationCounter;
        organisations[organisationCounter].signers = signers;
        organisations[organisationCounter].description = description;
        organisations[organisationCounter].logo = logo;
        organisations[organisationCounter].name = name;
        organisations[organisationCounter].website = website;
        emit AddedOrganisation (organisationCounter, name, description, website, logo);
    }

    function transferNSWTokens (uint donationId, address donor, uint amount) public {
    
    uint256 reward = tokenDistributiontThresholds[0];
    uint256[] memory thresholds = new uint256[](5);

    for (uint256 i = 0; i < thresholds.length; i++) {
        if (amount >= tokenDistributiontThresholds[i]) {
            reward = tokenDistributiontThresholds[i];
        } else {
            break;
        }
    }

            // Load the ERC20 token contract instance using its address
    IERC20 token = IERC20(0x00e2A9608C621F27CC61cc27C7423a30E5d475D4);

    // Transfer the specified amount of tokens from the donor to the contract
    require(token.transferFrom(owner, donor, reward), "Token transfer failed");

    // Emit a Transfer event to log the token transfer
    emit NsawaTransfer(donationId, donor, amount);
    }

    function setEmergencyStop(bool _emergencyStop) external onlyOwner {
        emergencyStop = _emergencyStop;
        emit EmergencyStopSet(_emergencyStop);
    }

    function withdrawFunds(uint organisationId, address  _toAddress) external notEmergencyStopped {

        require(organisations[organisationId].amountReceived > 0, "No funds to withdraw or not a beneficiary");
        require(organisations[organisationId].requests[msg.sender] == address(0), "Withdrawal request already submitted");
        
        // Add request to organisation
        uint32 signatureCount = 0;
        for (uint i = 0; i < organisations[organisationId].signers.length ; i++) {
            if (organisations[organisationId].requests[msg.sender] == _toAddress) {
                signatureCount++;
            }
        }
        // check if enough signatures
        require(signatureCount > organisations[organisationId].signersRequired, "Not enough signatures");
        
        // transfer funds
        payable(_toAddress).transfer(organisations[organisationId].amountReceived);
        emit FundsWithdrawn(_toAddress, organisations[organisationId].amountReceived, block.timestamp);
    
        // delete filfiled requests
        for (uint i = 0; i < organisations[organisationId].signers.length ; i++) {
            delete organisations[organisationId].requests[msg.sender];
        }
        
    }

    receive() external payable {
        organisations[0].signers = [owner];
        organisations[0].description = 'contract';
        organisations[0].logo = '';
        organisations[0].name = 'Contract Owner';
        organisations[0].website = '';
    }
}
