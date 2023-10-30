import Image from 'next/image'
import Hero from "@/app/_component/Hero";
import Feature from "@/app/_component/Feature";
import Footer from './_component/Footer';
import CircleMouseFollower from './_component/CircleMouseFollower';

export default function Home() {
  return (
    <main  className="flex flex-col justify-between w-screen min-h-screen  overflow-hidden">
       <CircleMouseFollower />
      <Hero />
      <Feature/>
      <Footer/>
    </main>
  )
}
