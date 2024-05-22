
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
      <body className='inter-font min-h-full h-screen flex flex-col flex-1 ' >
          <CProvider>
            <Provider>
              <Nav/>
              <div className='pb-14 pt-7 bg-cover bg-center bg-no-repeat bg-fixed' style={{ backgroundImage: 'url(/assets/images/bg1.svg)' }}>
                {children}
              </div>
              <div className='mt-auto'>
                <Footer/>
              </div>
            </Provider>
          </CProvider>
      </body>
    </html>
  )
}
