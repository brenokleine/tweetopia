'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'
import { Card, CardHeader, CardBody, CardFooter, Avatar, Text, Button, Heading, HStack, Tag } from '@chakra-ui/react'
import { Heart, Comment, Share, Paperclip, SmallTick } from '@blueprintjs/icons'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'

const PostCard = ({ post, handleTagClick, handleEdit, handleDelete, isDeleteConfirmation }) => {

  const { data: session } = useSession()
  const pathname = usePathname()
  const router = useRouter()

  const [copied, setCopied] = useState('')

  const handleCopy = () => {
    setCopied(post.quote)
    navigator.clipboard.writeText(`\"${post.quote}\" - @${post.author.username}`)
    setTimeout(() => {
      setCopied('')
    }, 4000)
  }

  return (
    <Card w={'sm'} maxH={'sm'} shadow={'md'}  >
      <CardHeader
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        p='4'
      >
        <div className='w-fit flex items-center gap-3 cursor-pointer' onClick={() => {
          if(session?.user.id === post.author._id){
            router.push('/profile')
          } else {
            router.push(`/profile/${post.author._id}`)
          }
        }}>
          <Avatar size={'md'} src={post.author.image} />
          <Heading size='sm'>@{post.author.username}</Heading>
        </div>
          <div className='flex gap-2'>
            <div onClick={() => { handleCopy(); }}>
              <Button
                size={'sm'}
              >
                {copied === post.quote ? (<SmallTick color='green' />) : (<Paperclip color='gray' />)}
              </Button>
            </div>
            {session?.user.id === post.author._id && pathname === '/profile' && !isDeleteConfirmation && (
              <div className='flex gap-2'>
                <Button
                  size={'sm'}
                  onClick={handleEdit}
                >
                  <EditIcon color={'primary'} />
                </Button>
                <Button
                  size={'sm'}
                  onClick={handleDelete}
                >
                  <DeleteIcon color={'red'} />
                </Button>
              </div>
            )}
          </div>
          
      </CardHeader>
      <CardBody overflow={'auto'} >
        <Text>
          " {post.quote} "
        </Text>
        {/* stack is for the setup for when post handles more than1  tag */}
        {post.tag && post.tag !== '' && (
          <HStack spacing={4} mt={8}>
            <Tag size={'sm'} variant='solid' bg={'secondary'} onClick={() => { handleTagClick && handleTagClick(post.tag) }}>
              #{post.tag}
            </Tag>
          </HStack>
        )}
      </CardBody>
      <CardFooter
        display='flex'
        justifyContent='space-evenly'
        alignItems='center'
        p='3'
        hidden={isDeleteConfirmation}
      >
        <Button variant='ghost' leftIcon={<Heart/>}>
          Like
        </Button>
        <Button variant='ghost' leftIcon={<Comment/>}>
          Comment
        </Button>
        <Button variant='ghost' leftIcon={<Share/>}>
          Share
        </Button>
      </CardFooter>
    </Card>
  )
}

export default PostCard

  // < Flex spacing = '4' >
    {/* <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'> */}