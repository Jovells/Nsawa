
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract NSWToken is ERC20 {
    constructor(uint initialSupply) ERC20("Nsawa", "NSW") {
        _mint(msg.sender, initialSupply);
    }
}