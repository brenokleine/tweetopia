'use client'

import { useState, useEffect } from 'react'
import { PostCard } from './PostCard'
import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import PostCardList from './PostCardList'

const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([])

  const handleSearchChange = (e) => {
    // Lógica para lidar com mudanças na pesquisa
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/quote');
      const data = await res.json();
      setPosts(data);
    }

    fetchPosts();
  }, [])

  return (
    <Box
      className=' w-full max-w-[1400px] flex flex-col justify-center'
    >
      <form>
        <div className='w-full flex justify-center'>
          <InputGroup
            className='w-full max-w-[500px] '
          >
            <InputLeftElement pointerEvents='none'>
              <Search2Icon color='secondary' />
            </InputLeftElement>
            <Input
              type='text'
              placeholder='Search for a tag or username...'
              _placeholder={{ color: 'secondary', fontSize: 'sm', opacity: 0.8 }}
              shadow={'sm'}
              value={searchText}
              onChange={handleSearchChange}
            />
          </InputGroup>
        </div>
      </form>

      <div className='w-full flex justify-center'>
        <PostCardList
          data={posts}
          handleTagClick={() => { }}
        />
      </div>

    </Box>
  )
}

export default Feed
