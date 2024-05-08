// app/providers.tsx
'use client'

import { ChakraProvider } from '@chakra-ui/react'

function CProvider({ children }) {
    return <ChakraProvider>{children}</ChakraProvider>
}

module.exports = CProvider;