"use client";
import Sidebar from "@/app/_component/Sidebar";
import Link from "next/link";
export default function DashboardLayout({ children }) {
  return (
    <section className={`flex items-start justify-center`}>
      <div className=" w-[20%] min-h-screen bg-[#191E21] border-r border-[#191E21] pt-32 pb-10 px-3 ">
        <div className="px-6">
          <a className="text-xl font-semibold text-white">Dashboard</a>
        </div>

        <nav className="p-6 w-full flex flex-col flex-wrap">
          <ul className="space-y-1.5">
            <Link
              href={`/dashboard`}
              className={`cursor-pointer flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Balance
            </Link>
            <Link
              href={`/dashboard/nft`}
              className={`cursor-pointer  flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              NFT
            </Link>
            <Link
              href={`/dashboard/history`}
              className={`cursor-pointer flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white-300 `}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
              Transaction History
            </Link>
            <Link
              href={`/dashboard/trending`}
              className={`cursor-pointer  flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-white-300`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                />
              </svg>
              Trending
            </Link>
          </ul>
        </nav>
      </div>
      <div className={`w-[80%]`}>{children}</div>
    </section>
  );
}
