// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/token/ERC1155/utils/ERC1155Receiver.sol";

import "./NFTListing.sol";

/**
 * NFTPool managges all NFTs listed by the lender
 */
contract NFTPool is Ownable, ERC1155Receiver {
    // The main mapping maintaing the pool. Address represents the lender
    mapping(address => mapping(uint256 => NFTListing)) public listedNFT;
    // Each lender may have multiple NFTs listed
    mapping(address => uint256) public listedNFTCount;

    /**
     * Listing function
     *
     */
    function listNFT(
        uint256 listedOn,
        address tknAddress,
        uint256 tknId,
        string memory complianceCheck,
        uint256 dailyFee,
        ReturnCondition returnCondition,
        uint256 expiry,
        NFTCollateral memory collateral
    ) public {
        // 1. Update the count of listings for this lender
        listedNFTCount[msg.sender] = listedNFTCount[msg.sender] + 1;
        uint256 currentCount = listedNFTCount[msg.sender];
        // 2. List NFT in the Pool
        listedNFT[msg.sender][currentCount] = NFTListing(
            listedOn,
            tknAddress,
            tknId,
            complianceCheck,
            dailyFee,
            returnCondition,
            expiry,
            collateral
        );

        // 3. Transfer the NFT to this contract
        // IERC1155(tknAddress).safeTransferFrom(
        //     msg.sender,
        //     address(this),
        //     tknId,
        //     atAmount,
        //     "0x00"
        // );
    }

    /**
    Retrieve all listings
     */
    function getListedNFTs(address lender)
        public
        view
        returns (NFTListing[] memory)
    {
        NFTListing[] memory ret = new NFTListing[](listedNFTCount[lender]);
        for (uint256 i = 0; i < listedNFTCount[lender]; i++) {
            ret[i] = listedNFT[lender][i];
        }
        return ret;
    }

    /**
    Must be implemented as per ERC1155 spec for the NFT Pool to receive ERC1155s
     */
    function onERC1155Received(
        address operator,
        address from,
        uint256 id,
        uint256 value,
        bytes calldata data
    ) external override returns (bytes4) {
        return
            bytes4(
                keccak256(
                    "onERC1155Received(address,address,uint256,uint256,bytes)"
                )
            );
    }

    /**
    Must be implemented as per ERC1155 spec for the NFT Pool to receive ERC1155s
     */
    function onERC1155BatchReceived(
        address operator,
        address from,
        uint256[] calldata ids,
        uint256[] calldata values,
        bytes calldata data
    ) external override returns (bytes4) {
        return
            bytes4(
                keccak256(
                    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"
                )
            );
    }
}
