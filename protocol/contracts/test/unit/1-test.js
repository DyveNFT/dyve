const { expect } = require("chai");
const { ethers } = require("hardhat")



describe("NFTPool setup", function () {

    before(async function () {

        NFTPool = await hre.ethers.getContractFactory("NFTPool");
        nftPool = await NFTPool.deploy()

        NFTTkn = await hre.ethers.getContractFactory("SimpleERC721");
        nFTtkn = await NFTTkn.deploy()
    })

    it("Should add NFT token to pool and retrieve one", async function () {
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        // mint a token
        mintedNFT = await nFTtkn.mintNFT(addr1.address, "https://gateway.pinata.cloud/ipfs/QmXreJ8rdSBihsDSVKkNG4J44VDJ8Et6bDsKdmBdfGyXH1")
        expect(mintedNFT).to.be.ok

        // add it to pool
        await nftPool.list(mintedNFT)
        // retrieve it from pool based on index

    });

    it("Should add NFT tokens to pool and retrieve all", async function () {
        [owner, addr1, addr2, ...addrs] = await ethers.getSigners();
        // mint a token

        // add it to pool

        // retrieve it from pool based on index

    });

});