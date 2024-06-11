'use client'

import Link from 'next/link' 
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'

import { Avatar, Button, useDisclosure } from '@chakra-ui/react'

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { HamburgerIcon, SmallAddIcon } from '@chakra-ui/icons'

import { LogOut } from '@blueprintjs/icons'
import LoadingSpinner from './LoadingSpinner'
 
const Nav = () => {

  const { data: session, status } = useSession();
  const { isOpen, onOpen, onClose } = useDisclosure()

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
      <div className="mx-auto flex justify-between items-center">
        <div className='mx auto flex justify-start items-center gap-5'>
          <div>
            <Link href='/quotes' className="text-white flex justify-center items-center gap-2">
              <Image src="/assets/icons/icon.svg" alt="logo" width={60} height={60} />
              <p className='text-lg poetsen-font'>Tweetopia</p>
            </Link>
          </div>
          <ul className="flex gap-2 hidden md:block">
            <Link className="transition ease-in delay-100 hover:bg-primary p-2 rounded-full" href="/">Home</Link>
            <Link className="transition ease-in delay-100 hover:bg-primary p-2 rounded-full" href="/quotes">Quotes</Link>
            <Link className="transition ease-in delay-100 hover:bg-primary p-2 rounded-full" href="https://brenobernstein.com/" target='_blank'>Contact</Link>
          </ul>
        </div>
        
        <div className='hidden md:block'>
          {status == 'authenticated' && (
            <>
              <div className='flex gap-3 md:gap-5 items-center justify-center'>
                <Link href="/create-quote" className="flex justify-center items-center bg-quaternary text-primary rounded-full p-2 text-md poetsen-font">
                  Create Quote
                </Link>
                <Button
                  onClick={signOut}
                  bg={'tertiary'}
                  _hover={{ bg: 'primary' }}
                  color={'white'}
                  rounded={'full'}
                >
                  Sign Out
                </Button>
                <Link
                  href={`/profile/${session?.user.id}`}
                  className="flex justify-center items-center p-1"
                >
                  <Avatar size={'md'} src={session?.user.image} className='rounded-full' alt="user" />
                </Link>
              </div>
            </>
          )} 
          {status == 'unauthenticated' && (
            <>
                <div className='flex gap-3 md:gap-5 items-center justify-center pr-8'>
                  {providers &&
                    Object.values(providers).map((provider) => (
                      <Button
                        key={provider.name}
                        onClick={() => signIn(provider.id)}
                        bg={'tertiary'}
                        _hover={{ bg: 'primary' }}
                        color={'white'}
                        rounded={'full'}
                      >
                        Sign in with {provider.name}
                      </Button>
                    ))}
                </div>
            </>
          )}
          {status == 'loading' && (
            <>
              <div className=' pr-10'>
                <LoadingSpinner
                  size={'md'}
                />
              </div>
            </>
          )}
        </div>

        <div className='block md:hidden flex justify-center items-center'>
          <Button bg={'tertiary'} rounded={'full'} size={'md'} onClick={onOpen} >
            <HamburgerIcon color={'white'}/>
          </Button>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
          >
            <DrawerOverlay/>
            <DrawerContent
              roundedLeft={'xl'}
              rounded
            >
              <DrawerCloseButton 
                color='white'
              />
              <DrawerHeader
                bg='tertiary'
                color='white'
                roundedTopLeft={'xl'}
                fontWeight={'light'}
                className='poetsen-font'
              >
                Menu
              </DrawerHeader>

              <DrawerBody
                color='primary'
                sx={{
                  backgroundImage: 'url("/assets/images/bg4.svg")',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'start',
                }}
              >
                <div>
                  {session?.user ? (
                    <div className='flex items-center justify-between mb-1 mt-1'>
                      <Link
                        href={`/profile/${session?.user.id}`}
                        className="flex justify-center items-center p-3 pl-1"
                        onClick={onClose}
                      >
                        <Avatar size={'md'} src={session?.user.image} className='rounded-full' alt="user" />
                        {/* @username here after context is implemented */}
                      </Link>
                      <Button
                        onClick={signOut}
                        rounded={'full'}
                        p={2}
                        display={'flex'}
                        alignItems={'center'}
                        justifyContent={'center'}
                      >
                        <LogOut 
                          color={'red'}
                        />
                      </Button>
                    </div>
                  ) : (
                    <div className='flex items-center justify-center mb-4 mt-4'>
                      {providers &&
                        Object.values(providers).map((provider) => (
                          <Button
                            key={provider.name}
                            onClick={() => signIn(provider.id)}
                            bg={'tertiary'}
                            _hover={{ bg: 'primary' }}
                            color={'white'}
                            className='hover:text-white transition ease-in'
                          >
                            Sign in with {provider.name}
                          </Button>
                        ))}
                    </div>
                  )}
                </div>
                <ul className="flex flex-col w-full mb-4 rounded-md bg-quaternary font-bold" onClick={onClose}>
                  <Link className="transition ease-in rounded-md hover:bg-tertiary hover:text-white p-3 w-full" href="/">Home</Link>
                  <Link className="transition ease-in rounded-md hover:bg-tertiary hover:text-white p-3 w-full" href="/quotes">Quotes</Link>
                  <Link className="transition ease-in rounded-md hover:bg-tertiary hover:text-white p-3 w-full" href="https://brenobernstein.com/" target='_blank'>Contact</Link>
                </ul>
                  {session?.user && (
                    <Link 
                      href="/create-quote" 
                      className="flex w-fit gap-1 justify-center items-center bg-quaternary text-primary hover:bg-primary hover:text-quaternary transition ease-in rounded-full p-2 text-md poetsen-font"
                      onClick={onClose}
                    >
                      <SmallAddIcon />
                      Create Quote
                    </Link>
                  )}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </nav>
  )
}

export default Nav