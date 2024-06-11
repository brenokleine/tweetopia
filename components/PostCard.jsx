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

  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  const handleCopy = () => {
    setCopied(post.quote)
    navigator.clipboard.writeText(`\"${post.quote}\" - @${post.author.username}`)
    setTimeout(() => {
      setCopied('')
    }, 4000)
  }

  return (
    <Card w={'sm'} maxH={'xs'} shadow={'md'}  >
      <CardHeader
        display='flex'
        justifyContent='space-between'
        alignItems='start'
        p='4'
      >
        <div className='flex flex-col gap-3' 
          onClick={() => {
            router.push(`/profile/${post.author._id}`)
          }}
        >
          <div className='w-fit flex items-center gap-3 cursor-pointer'>
            <Avatar size={'md'} src={post.author.image} />
            <Heading size='sm'>@{post.author.username}</Heading>
          </div>
            <p className=' text-xs text-gray-500 font-semibold'>
              {new Date(post.creationDate).toLocaleDateString()} | {new Date(post.creationDate).toLocaleTimeString(undefined, {hour: '2-digit',minute: '2-digit',})}
            </p>
        </div>
          <div className='flex gap-2 flex-wrap justify-end items-start'>
            {session?.user.id === post.author._id && pathname === `/profile/${session?.user.id}` && !isDeleteConfirmation && (
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
            <div onClick={() => { handleCopy(); }} className=''>
              <Button
                size={'sm'}
              >
                {copied === post.quote ? (<SmallTick color='green' />) : (<Paperclip color='gray' />)}
              </Button>
            </div>
          </div>
          
      </CardHeader>
      <CardBody overflow={'auto'} pt={1}>
        <div>
          <Text noOfLines={isExpanded ? undefined : 3}>
            {post.quote}
          </Text>
        </div>
        {post.quote.length > 125 && ( // Adjust the length as needed to trigger "see more"
          <Button size="xs" onClick={toggleExpand} mt={2} color={'secondary'}>
            {isExpanded ? 'See Less' : 'See More'}
          </Button>
        )}
        {/* stack is for the setup for when post handles more than1  tag */}
        {post.tag && post.tag !== '' && (
          <HStack spacing={4} mt={8}>
            <Tag size={'sm'} variant='solid' bg={'secondary'} cursor={'pointer'} onClick={() => { handleTagClick && handleTagClick(post.tag) }}>
              #{post.tag}
            </Tag>
          </HStack>
        )}
      </CardBody>
      {/* like comment share to be done later */}
      {/* <CardFooter
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
      </CardFooter> */}
    </Card>
  )
}

export default PostCard

  // < Flex spacing = '4' >
    {/* <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'> */}