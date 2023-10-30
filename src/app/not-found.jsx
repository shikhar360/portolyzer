import Link from 'next/link';
import Image from 'next/image'
 
export default function NotFound() {
  return (
    <div className='grid h-screen px-4 bg-white place-content-center'>
        <div className='text-center'>
      <Image src={"/images/not-found.svg"} alt='404 image' width={50} height={50}/>
      <h2 className="text-3xl font-bold tracking-tight text-gray-700 sm:text-5xl mt-5">Not Found</h2>
      <h4 className='text-2xl font-bold tracking-tight text-gray-600 sm:text-4xl mt-3'>... or the page maybe under construction</h4>
      <Link href="/"><h5 className='text-2xl font-semibold tracking-tight text-gray-600 sm:text-xl mt-3'>Return Home</h5></Link>
      </div>
    </div>
  )
}