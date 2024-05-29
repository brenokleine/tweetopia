import React from 'react'
import { Spinner } from '@chakra-ui/react'

const LoadingSpinner = () => {
  return (
      <Spinner
          thickness='4px'
          speed='1s'
          emptyColor='quaternary'
          color='secondary'
          size='xl'
      />
  )
}

export default LoadingSpinner