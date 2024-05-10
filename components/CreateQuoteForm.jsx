'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { Card, CardHeader, CardBody, CardFooter, Input, InputGroup, InputLeftElement, InputRightElement, CheckboxIcon, ButtonGroup, Button, Textarea } from '@chakra-ui/react'

const CreateQuoteForm = ({ type, post, setPost, submitting, handleSubmit }) => {


  return (
    <Card
      size={'lg'}
      sx={{width: '800px'}}
      shadow={'xl'}
    >
      <CardHeader
        className='text-5xl font-bold text-primary poetsen-font'
        sx={{ paddingBottom: '15px' }}
      >
        Create Quote
      </CardHeader>
      <CardBody
        display={'flex'}
        flexDirection={'column'}
        gap={8}
      >
          <Textarea
            placeholder='Make the difference with your Quote!'
            variant={'filled'}
            size={'lg'}
            value={post.quote}
            onChange={(e) => setPost({ ...post, quote: e.target.value })}
          />

        <div>
          <div className='flex gap-3 p-2 font-bold flex-wrap'>
            Tags
            <div className='font-normal'>
              (#Motivational, #GoodMorning, #Coffee...)
            </div>
          </div>
          <InputGroup
            display={'flex'}
            size={'lg'}
          >
            <InputLeftElement fontWeight={'bold'}>#</InputLeftElement>
            <Input
              variant={'filled'}
              placeholder='tag'
              value={post.tag}
              onChange={(e) => setPost({ ...post, tag: e.target.value })}
            />
          </InputGroup>
        </div>
      </CardBody>
      <CardFooter>
          <ButtonGroup
            display={'flex'}
            justifyContent={'flex-end'}
            width={'100%'}
            size={'lg'}
          >
            <Button
              colorScheme={'green'}
              rounded={'full'}
              
            >
              Post
            </Button>
            <Link href='/'>
              <Button
                bg={'none'}
                
                textColor={'red'}
              >
                Cancel
              </Button>
            </Link>
          </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default CreateQuoteForm