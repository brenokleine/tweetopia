'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { Card, CardHeader, CardBody, CardFooter, Input, InputGroup, InputLeftElement, InputRightElement, CheckboxIcon, ButtonGroup, Button, Textarea } from '@chakra-ui/react'

const QuoteForm = ({ post, handlePostChange, submitting, handleSubmit, handleCancel, action }) => {


  return (
    <Card
      size={'lg'}
      maxW={'800px'}
      width={'100%'}
      shadow={'xl'}
    >
      <CardHeader
        className='text-5xl font-bold text-primary poetsen-font'
        sx={{ paddingBottom: '15px' }}
      >
        {action} Quote
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
            maxLength={500}
            onChange={(e) => handlePostChange({ ...post, quote: e.target.value })}
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
              // Remove spaces from tag
              onChange={(e) => handlePostChange({ ...post, tag: e.target.value.replace(/\s/g, '')})}
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
              onClick={handleSubmit}
            >
              {action}
            </Button>
            <Button
              bg={'none'}
              textColor={'red'}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </ButtonGroup>
      </CardFooter>
    </Card>
  )
}

export default QuoteForm