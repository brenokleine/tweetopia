import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-secondary mt-14 w-full text-quaternary p-14'>
      <div className='flex justify-center items-center '>
        <p>
            © 2024 Tweetopia | Created by 
            <Link 
                href={'https://brenobernstein.com'}
                className='font-bold text-white italic hover:underline hover:text-red-500 pl-3'
                target='_blank'
            >
                Breno Bernstein
            </Link>
        </p> 
      </div>

        <div className='flex justify-center items-center pt-8'>
              <Link href='/' className=' bg-primary text-quaternary hover:bg-quaternary hover:text-primary p-3 rounded-full transition duration-200 ease-in-out'>
                Home
            </Link>
        </div>
    </footer>
  )
}

export default Footer