'use client'

import { useState, useEffect, useCallback } from 'react'
import { PostCard } from './PostCard'
import { Box, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { CloseIcon, Search2Icon } from '@chakra-ui/icons'
import PostCardList from './PostCardList'
import { debounce } from 'lodash'

const Feed = () => {
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [posts, setPosts] = useState([])

  const handleSearchChange = (e) => {
    const value = e
    setSearchText(value)
    debouncedSearch(value)
  }

  const debouncedSearch = useCallback(debounce((searchTerm) => {
    if (searchTerm === '') {
      setSearchResults(posts)
    } else {
      const regex = new RegExp(searchTerm, 'i'); // Create a regex with the 'i' flag for case-insensitivity
      const results = posts.filter(post => {
        return regex.test(post.tag) || regex.test(post.author.username) || regex.test(post.quote);
      })
      setSearchResults(results)
    }
  }, 300), [posts])

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/quote');
      const data = await res.json();
      setPosts(data);
      setSearchResults(data);
    }

    fetchPosts();
  }, [])

  return (
    <Box
      className='w-full max-w-[1400px] flex flex-col '
    >
      <form className='w-full flex justify-center'>
        <InputGroup
          className='w-full max-w-[600px]'
          size={'lg'}
          bg={'white'}
          rounded={'full'}
        >
          <InputLeftElement pointerEvents='none'>
            <Search2Icon color='secondary' />
          </InputLeftElement>
          <Input
            type='text'
            placeholder='Search for a tag, username or quote...'
            _placeholder={{ color: 'secondary', fontSize: 'md', opacity: 0.8 }}
            shadow={'sm'}
            value={searchText}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
          <InputRightElement fontSize={'xs'}>
            <CloseIcon
              color='secondary'
              cursor='pointer'
              onClick={() => handleSearchChange('')}
            />
          </InputRightElement>
        </InputGroup>
      </form>

      <div className='mt-10 flex justify-center'>
        <PostCardList
          data={searchResults}
          handleTagClick={(tag) => { handleSearchChange(tag) }}
        />
      </div>

    </Box>
  )
}

export default Feed
