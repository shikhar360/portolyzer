import React from "react";
import Image from 'next/image';


export default function Feature() {
  return (
<section className="w-screen h-full relative">
  <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div className="max-w-3xl mx-auto">
      <div className="grid gap-12">
        <div>
          <h1 className="text-3xl text-gray-800 font-bold lg:text-5xl mb-10">
            Why choose <span className="highlight">Portolyzer?</span>
          </h1>
          <p className="mt-3 text-gray-800 text-lg">
          Welcome to Protolyzer, your passport to the exciting world of cryptocurrencies and NFTs. With real-time data, in-depth insights, and cutting-edge features, our platform is your all-in-one solution for managing your crypto portfolio. Whether you are a seasoned investor or just getting started, Protolzer is here to empower your crypto journey and help you make informed decisions. Join us and experience the future of crypto portfolio analysis.
          </p>
        </div>

        <div className="space-y-6 lg:space-y-10">
          <div className="flex">
          <svg class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"/>
            <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"/>
          </svg>
            <div className="ml-5 sm:ml-8">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800 ">
              Real-Time Portfolio Insights
              </h2>
              <p className="mt-1 text-gray-700 ">
              Get a comprehensive view of your crypto wallet, including wallet balance, NFT holdings, and all your tokens, updated in real time.
              </p>
            </div>
          </div>

          <div className="flex">
          <svg class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
          </svg>
            <div className="ml-5 sm:ml-8">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800">
              <span className="sketch-highlight">ChainBase API</span> Integration
              </h2>
              <p className="mt-1 text-gray-700 ">
              Powered by the ChainBase API, our platform provides accurate and up-to-date data for all your crypto needs.
              </p>
            </div>
          </div>

          <div className="flex">
            <svg className="flex-shrink-0 mt-2 h-6 w-6 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
            </svg>
            <div className="ml-5 sm:ml-8">
              <h2 className="text-base sm:text-lg font-semibold text-gray-800 ">
              Security First
              </h2>
              <p className="mt-1 text-gray-700 ">
              Rest easy knowing that your data is secured with the latest encryption and security measures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
<div className="absolute inset-0 -z-10 boxpattern"></div>
    <div className=" m-14 text-center relative z-10">
    <h1 className=" text-3xl font-extrabold tracking-tight leading-none text-gray-800 md:text-xl lg:text-4xl ">Knowing your NFT & its trends is <br/><span className="underline underline-offset-8 decoration-secondary-color">just a click away </span>👆</h1>
        <div className="container relative">
            
                <div className="card rotate-12 -right-4 absolute transition ease-in-out delay-150 hover:-translate-y-8">
                  <div className="nft"><img src="https://lh3.googleusercontent.com/u-2FnHbaJ3U_KCDlmg2McX9Yfo7brsAzOffqihNXCGkHljA89SPPzwdjQiVSWcsvxCoj_ydBcDNCuZvHEekaYekaMEH4XX32k9US=w600"/></div>
                </div>
                <div className="card absolute transition ease-in-out delay-150 hover:-translate-y-12" >
                  <div className="nft"><img src="https://uploads-ssl.webflow.com/5da2323849811968156ebf6f/61ff1633ad518d1997f40f17_61bd49549ef6a8a59c837def_1_5AyYzOlGlv501PlJlIdZZQ.jpeg"/></div>
                </div>
                <div className="card -rotate-12 -left-4 absolute  transition ease-in-out delay-150 hover:-translate-y-10">
                  <div className="nft"><img src="https://beincrypto.com/wp-content/uploads/2022/05/1652308010103-850x850.jpg.optimal.jpg"/></div>
                </div>
        </div>
        </div>

       
</section>
  );
}