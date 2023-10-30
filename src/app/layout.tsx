import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

//Components Import
import Navbar from './_component/Navbar'
import Footer from './_component/Footer'
import CircleMouseFollwer from "@/app/_component/CircleMouseFollower";
import 'react-toastify/dist/ReactToastify.css';
const rubik = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portolyzer',
  description: 'One stop platform to analyze your portfolio and market data',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubik.className}>
     
        <Navbar/>
        {children}
      
        </body>
    </html>
  )
}
