import React from "react";
import Image from "next/image";
const About = () => {
    return(
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="max-w-2xl mx-auto mt-32">
        {/* Grid */}
      <div className="grid gap-12">
        <div>
          <h2 className="text-2xl text-gray-800 font-bold lg:text-4xl mb-10">
          Portolyzer: Your Gateway to the World of Crypto and NFTs
          </h2>
          <p className="mt-3 text-gray-800 text-lg">
          Portolyzer is a crypto portfolio analysis tool that we built for D_D x Chainbase hackathon. It offers a comprehensive view of your holdings. What sets it apart is its seamless integration of the Chainbase API, which provides real-time data and insights, making it a powerful and dynamic tool for managing your crypto investments.
          </p>
        </div>
        <div>
          <h2 className="text-lg text-gray-800 font-bold lg:text-xl mb-5">
          Chainbase API Integration
          </h2>
          <p className="mt-2 text-gray-800 text-lg">
          Our partnership with the Chainbase API is what truly sets us apart. It empowers us to offer accurate, real-time data for your portfolio. With Chainbase API, we can provide you with the most up-to-date information on your investments, making sure you&apos;re always in the loop.
          </p>
          <Image src={"/images/Chainbase-docs.png"} alt="chainbase API docs Img" width={700} height={500} className="mt-10"/>
        </div>
        <div>
          <h2 className="text-lg text-gray-800 font-bold lg:text-xl mb-5">
          Features That Shine
          </h2>
          <p className="mt-2 text-gray-800 text-lg">
          The beauty of Portolyzer lies in its features:-
          </p>
        </div>

        
        <div className="space-y-6 lg:space-y-10">
          {/* Feature Block*/}
          <div className="flex">
            {/* <h1>1</h1> */}
            <p>✅</p>
            <div className="sm:ml-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 ">
              Portfolio Balance with Network Support:
              </h3>
              <p className="mt-1 text-gray-600 ">
              We understand that your crypto assets may be spread across various networks. Portolyzer brings them all together, offering a real-time balance that keeps you in the know. You&apos;ll never have to switch between multiple apps or wallets again.
              </p>
            </div>
          </div>
          <div className="flex">
          <p>✅</p>
            <div className="ml-5 sm:ml-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 ">
              NFT Holdings:
              </h3>
              <p className="mt-1 text-gray-600 ">
              Non-fungible tokens have taken the world by storm, and you&apos;re likely to have a few in your collection. With Portolyzer, you can explore your NFTs in an interactive gallery, complete with detailed information about each piece. It&apos;s like having your own personal art gallery, but in the digital realm.
              </p>
            </div>
          </div>
          <div className="flex">
          <p>✅</p>
            <div className="ml-5 sm:ml-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 ">
              Transaction History:
              </h3>
              <p className="mt-1 text-gray-600 ">
              Every crypto enthusiast knows the importance of keeping track of their transactions. Portolyzer maintains a comprehensive record of every move, allowing you to review your transaction history at any time. No more second-guessing your financial decisions.
              </p>
            </div>
          </div>
          <div className="flex">
            <p>✅</p>
            <div className="ml-5 sm:ml-8">
              <h3 className="text-base sm:text-lg font-semibold text-gray-800 ">
              Trending NFT Collections: 
              </h3>
              <p className="mt-1 text-gray-600 ">
              The NFT world is constantly evolving. We keep you updated with the latest trends and exciting NFT collections that are making waves in the crypto universe. Stay ahead of the curve and discover new gems.
              </p>
            </div>
          </div>
          {/* <!-- End Feature Block--> */}
        </div>

      </div>
      {/* <!-- End Grid --> */}
    </div>
  </div>
//   <!-- End Icon Blocks -->
    )
}

export default About;