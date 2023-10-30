
# Portolyzer

Website Link : [https://chainbase-portolyzer.vercel.app/](https://chainbase-portolyzer.vercel.app/)

Video Demo : [https://youtu.be/AQabyLwu0R8?feature=shared](https://youtu.be/AQabyLwu0R8?feature=shared)


Welcome to the Portolyzer, where you can manage and see your Crypto Portfolio at few click. Now you dont need to go any explorer to see all the transactions and No need to switch to explorers to check transactions from other chain. This project was created for the Chainbase Hackathon, and it's designed to empower both seasoned crypto enthusiasts and newcomers to the space with the tools they need to manage their digital assets effectively.

## Features

- Real-Time Portfolio Insights:- Get a comprehensive overview of your crypto wallet's balance, including support for different networks. Enjoy real-time updates to ensure you always have the latest data on your assets.

- NFT Holdings:- Explore your NFT collection with an interactive gallery, complete with detailed information on each unique digital asset.

- Transaction History:- View accurate and up-to-date transaction history that covers all the transactions on the network.

- Trending NFT Collections:- Discover the latest trends in the NFT space with our trending NFT collections section.

- Historic Token Prices ;- You will be able to see the historic token prices for the contract address you have provided or the native token as well

## Tech Stack

Built with:- Next.js, Tailwind CSS, Framer Motion & Zustand for state management.


#### Chainbase API -
The project uses Chainbase API, which provides accurate and up-to-date data for your crypto needs. This integration enables real-time balance tracking, transaction history, and access to trending NFT collections, making it a reliable and informative tool for all crypto enthusiasts.

[getNFTCollectionTrending](https://github.com/shikhar360/portolyzer/blob/main/src/app/dashboard/trending/page.tsx) 

Line 17-49 --> https://github.com/shikhar360/portolyzer/blob/main/src/app/dashboard/trending/page.tsx

---
[getaccountnfts](https://github.com/shikhar360/portolyzer/blob/main/src/app/dashboard/nft/page.tsx)

 Line :- 12-42 --> https://github.com/shikhar360/portolyzer/blob/main/src/app/dashboard/nft/page.tsx

---

([getaccountbalance](https://github.com/shikhar360/portolyzer/blob/main/src/app/dashboard/page.tsx)) &

( [getaccounttokens](https://github.com/shikhar360/portolyzer/blob/main/src/app/dashboard/page.tsx))

 Line :- 21-54 --> https://github.com/shikhar360/portolyzer/blob/main/src/app/dashboard/page.tsx

---

[getaccounttxs](https://github.com/shikhar360/portolyzer/blob/main/src/app/dashboard/history/page.tsx)

 Line 25-59 --> https://github.com/shikhar360/portolyzer/blob/main/src/app/dashboard/history/page.tsx

---

[tokenHistory](https://github.com/shikhar360/portolyzer/blob/main/src/app/dashboard/token_history/page.tsx)

 Line 25-59 --> https://github.com/shikhar360/portolyzer/blob/main/src/app/dashboard/token_history/page.tsx

---
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You just have to make a env file with a variable name 
```env
NEXT_PUBLIC_CHAINBASE="yourkey"
```