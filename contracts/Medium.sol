// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Medium is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;
    uint256 public fees;

    constructor(string memory name_, string memory symbol_, uint256 fees_) ERC721 (name_, symbol_){
       fees = fees_;  
    }  

    function _safeMint(address to, string memory URI) public payable  {
        require(msg.value >= fees, "Noe Enough MATIC");
        payable(owner()).transfer(fees);
        
        // Mint NFT
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, URI);

        // Return oversupplied fees
        uint256 contractBalace = address(this).balance;

        if (contractBalace > 0){
            payable(msg.sender).transfer(address(this).balance);
        }
    }

    // ovverride Functions
    function _burn(uint256 tokenId) internal override (ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId) public view override (ERC721, ERC721URIStorage) returns (string memory){
        return super.tokenURI(tokenId);
    }

        
    
}
