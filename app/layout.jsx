
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
    <html lang='en'>
      <body className='inter-font min-h-full h-screen flex flex-col flex-1 bg-cover bg-center bg-no-repeat bg-fixed ' style={{ backgroundImage: 'url(/assets/images/bg1.svg)' }} >
          <CProvider>
            <Provider> 
              <div className='mb-16'>
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
