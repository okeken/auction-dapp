import AUCTION_ABI from "../abi/auction.json";
import NFT_ABI from "../abi/nft.json";

export const AUCTION_CONTRACT_ADDRESS="0x2B90a26cc6d99c8C2AF1D8961721A7d1f01C8356"
export const NFT_CONTRACT_ADDRESS="0x56d1666b348ad878a2b564c66075f1fde9977450"

export const AUCTION_CONTRACT= {
    contractInterface: AUCTION_ABI,
    addressOrName: AUCTION_CONTRACT_ADDRESS
}

export const NFT_CONTRACT= {
    contractInterface: NFT_ABI,
    addressOrName: NFT_CONTRACT_ADDRESS
}


