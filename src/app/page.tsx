import Image from 'next/image'
import Hero from "@/app/_component/Hero";
import Feature from "@/app/_component/Feature";
export default function Home() {
  return (
    <main  className="flex flex-col justify-between w-screen min-h-screen ">
      <Hero />
      <Feature/>
    </main>
  )
}
