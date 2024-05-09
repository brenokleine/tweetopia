
import React from 'react'
import '../styles/globals.css'

export const metadata = {
  title: 'Tweetopia',
  description: 'Twitter but utopia',
}

import Provider from '../components/Provider'
import CProvider from './cProvider'

import Nav from '@/components/Nav'

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='main'>
      <body className='inter-font'>
        <div className='gradient'></div>
          <CProvider>
            <Provider>
              <Nav/>
              {children}
            </Provider>
          </CProvider>
      </body>
    </html>
  )
}
