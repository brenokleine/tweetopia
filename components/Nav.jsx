'use client'

import Link from 'next/link' 
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
 
const Nav = () => {

  const isUserLoggedIn = true
  
  return (
    <nav className="bg-secondary p-3 text-white mb-7 w-full">
      <div className="mx-auto flex justify-between items-center flex-wrap">
        <div className='mx auto flex justify-start items-center gap-5'>
          <Link href="/" className="text-white flex justify-center items-center gap-2">
            <Image src="/assets/icons/icon.svg" alt="logo" width={60} height={60} />
            <p className='text-lg poetsen-font'>Tweetopia</p>
          </Link>
          {/* separator */}
          <div>|</div>
          <ul className="flex gap-5">
            <Link className="" href="/">Home</Link>
            <Link className="" href="/">Quotes</Link>
            <Link className="" href="/">About</Link>
          </ul>
        </div>
        
        {isUserLoggedIn ? (
          <>
            <div className='flex gap-3 md:gap-5 '>
              <Link href="/create-quote" className="flex justify-center items-center bg-quaternary text-primary rounded-full p-2 text-md poetsen-font">
                Create Quote
              </Link>
            </div>

          </>
        ) : (
          <></>
        )}
        
      </div>
    </nav>
  )
}

export default Nav