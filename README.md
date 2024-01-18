# Glow Fullstack Take-Home

## Overview

This is a take-home assignment for Glow's fullstack engineer position. The goal is to build a simple web application that allows users to mint an nft that also displays ownerships.

The frontend uses NextJS with Typescript. It can be found in the `frontend` directory. It's been already setup with a mint button and a table to display the ownerships.

The transfers should be indexed using the Subgraph. The subgraph can be found in the `subgraph` directory.

The backend should proxy to the subgraph and return the ownerships of a list of NFTs. The backend should be coded in the `api` directory.

You may choose any backend of your choice.

## Requirements

1. Hook up the mint button to mint an NFT in the frontend src/page.tsx

   - There is an ABI at your convenience in the `frontend/src/abi/` directory
   - The contract address to mint is in the `frontend/src/constants` folder
   - The contract can be found <a target="_blank" href="https://sepolia.etherscan.io/address/0x7157df9d749836592569c0308b287f35f382188a#code"> here </a>
   - It's an ERC721 deployed on Sepolia

2. Create the subgraph to index the transfers of the NFT

   - Create the relative entities and relationships
   - The subgraph should index the `Transfer` event
   - The subgraph should have a way to query ownerships for bulk NFTs
   - This can be hosted on subgraph studio using `npm run deploy`

3. Create a backend API in the `api` folder that proxies the subgraph for ownerships

   - The API should have a route that returns the ownerships of a list of NFTs [{id: string, owner: string}....]
   - You may choose any framework or language of your choice

4. Hook up the frontend and backend
   - Grab the ownerships to display in the table
5. Deploy the backend API any cloud provider of your choice
   - Hookup the frontend to the deployed backend

## Libraries

The frontend uses <a target="_blank" href="https://viem.sh/"> Viem </a> , <a target="_blank" href="https://wagmi.sh/react/getting-started"> WAGMI </a>, and <a target="_blank" href="https://www.rainbowkit.com/docs/introduction"> Rainbowkit </a> .
This is a default. You may choose to use it or not. This is just to speed up development. It's advised to use wagmi hooks to interact with the contract. It's also advised to use rainbowkit as the
wallet connector.

## Time Requirement

You have 4 hours to complete this assignment. If you are unable to complete it, please submit what you have. We will evaluate you based on what you have completed.
