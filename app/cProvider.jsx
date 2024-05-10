// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'
import chakraTheme from '@/styles/chakraTheme'

function CProvider({ children }) {
    return <ChakraProvider theme={chakraTheme} >{children}</ChakraProvider>
}

module.exports = CProvider;