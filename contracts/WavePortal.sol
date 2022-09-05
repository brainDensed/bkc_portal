//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;
import "hardhat/console.sol";
contract WavePortal{
    uint256 totalWaves;
    constructor(){
        console.log("Once a wise man said, Do Nothing...");
    }
    function wave() public {
        console.log("%s has waved", msg.sender);
        totalWaves+=1;
    }
    function wavesCount() public view returns (uint256){
        console.log("We got total %d waves", totalWaves);
        return totalWaves;
    }
}