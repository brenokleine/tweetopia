
import React from 'react'
import '../styles/globals.css'

export const metadata = {
  title: 'Tweetopia',
  description: 'Twitter but utopia',
}

import Provider from '../components/Provider'
import CProvider from './cProvider'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='h-full h-screen'>
      <head>
        <link rel="icon" href="/assets/icons/tweetopia_icon.png" />
      </head>
      <body style={{ backgroundImage: 'url(/assets/images/bg1.svg)' }} className='min-h-full h-screen h-full inter-font flex flex-col bg-cover bg-center bg-no-repeat bg-fixed' >
        <CProvider>
          <Provider> 
            <div className='mb-10'>
              <Nav />
            </div>
              {children}
            <div className='mt-auto'>
              <Footer/>
            </div>
          </Provider>
        </CProvider>
      </body>
    </html>
  )
}
