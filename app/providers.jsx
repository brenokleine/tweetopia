// app/providers.js
'use client';

import { ChakraProvider } from '@chakra-ui/react'

function Providers({ children }) {
    return (
        <ChakraProvider>{children}</ChakraProvider>
    )
}

module.exports = Providers;
