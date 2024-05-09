import React from 'react'
import Link from 'next/link'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {

  const { data: session } = useSession()

  return (
    <Card
      size={'lg'}
    >
      <CardHeader
        className='text-5xl font-bold text-primary poetsen-font'
      >
        Create Quote
      </CardHeader>
      <CardBody>

      </CardBody>
      <CardFooter>

      </CardFooter>
    </Card>
  )
}

export default Form