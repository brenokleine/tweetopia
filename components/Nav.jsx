'use client'

import Link from 'next/link' 
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

import { Avatar, Button } from '@chakra-ui/react'
 
const Nav = () => {

  const { data: session } = useSession();

  const [providers, setProviders] = useState(null)

  useEffect(() => {
    const setUpProviders = async () => {
      const res = await getProviders()

      setProviders(res)
    }

    setUpProviders()
  }, [])
  
  return (
    <nav className="bg-secondary p-5 text-white w-full">
      <div className="mx-auto flex flex-col flex-wrap items-center md:flex-row md:justify-between">
        <div className='mx auto flex justify-start items-center gap-5'>
          <div>
            <Link href='/quotes' className="text-white flex justify-center items-center gap-2">
              <Image src="/assets/icons/icon.svg" alt="logo" width={60} height={60} />
              <p className='text-lg poetsen-font'>Tweetopia</p>
            </Link>
          </div>
          <ul className="flex gap-2">
            <Link className="transition ease-in delay-100 hover:bg-primary p-2 rounded-full" href="/">Home</Link>
            <Link className="transition ease-in delay-100 hover:bg-primary p-2 rounded-full" href="/quotes">Quotes</Link>
            <Link className="transition ease-in delay-100 hover:bg-primary p-2 rounded-full" href="/contact">Contact</Link>
          </ul>
        </div>
        
        {session?.user ? (
          <>
            <div className='flex gap-3 md:gap-5 items-center justify-center'>
              <Link href="/create-quote" className="flex justify-center items-center bg-quaternary text-primary rounded-full p-2 text-md poetsen-font">
                Create Quote
              </Link>

              <Button 
                onClick={signOut}
                colorScheme={'blackAlpha'}
              >
                Sign Out
              </Button>

              <Link
                href="/profile"
                className="flex justify-center items-center p-1"
              >
                <Avatar size={'md'} src={session?.user.image} className='rounded-full' alt="user" />
              </Link>
            </div>

          </>
        ) : (
          <>
              <div className='flex gap-3 md:gap-5 items-center justify-center pr-8'>
                {providers && 
                  Object.values(providers).map((provider) => (
                    <Button 
                      key={provider.name}
                      onClick={() => signIn(provider.id)}
                      colorScheme={'blackAlpha'}
                    >
                      Sign in with {provider.name}
                    </Button>
                  ))}
              </div>
          </>
        )}
        
      </div>
    </nav>
  )
}

export default Nav