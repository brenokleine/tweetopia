import React from 'react'
import { Spinner } from '@chakra-ui/react'

const LoadingSpinner = ({ size }) => {
  return (
      <Spinner
          thickness='4px'
          speed='1s'
          emptyColor='quaternary'
          color='secondary'
          size={size ? size : 'xl'}
      />
  )
}

export default LoadingSpinner