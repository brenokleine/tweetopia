import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-secondary w-full text-quaternary p-6 mt-16'>
      <ul className="flex gap-3 items-center justify-center p-4">
        <div className='border solid border-quaternary rounded-full p-2' >
          <Image src="/assets/icons/icon.svg" alt="logo" width={30} height={30} />
        </div>
        <div className='flex gap-1'>
          <Link className="transition ease-in delay-100 hover:bg-primary p-2 rounded-full" href="/">Home</Link>
          <Link className="transition ease-in delay-100 hover:bg-primary p-2 rounded-full" href="/quotes">Quotes</Link>
          <Link className="transition ease-in delay-100 hover:bg-primary p-2 rounded-full" href="https://brenobernstein.com/" target='_blank'>Contact</Link>
        </div>
      </ul>
      <div className='flex justify-center items-center flex-wrap p-4'>
        <p>
          © 2024 Tweetopia | Created by
        </p>
        
        <Link 
            href={'https://brenobernstein.com'}
            className='font-bold text-white italic hover:underline hover:text-red-500 pl-3'
            target='_blank'
        >
            Breno Bernstein
        </Link>
      </div>

    </footer>
  )
}

export default Footer