
import React from 'react'
import '../styles/globals.css'

export const metadata = {
  title: 'Tweetopia',
  description: 'Twitter but utopia',
}

import Providers from './providers'

import Nav from '@/components/Nav'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='inter-font main'>
        <div className='gradient'></div>
        
        <div className='z-10'>
          <Providers>
            <Nav/>
            {children}
          </Providers>
        </div>

      </body>
    </html>
  )
}
