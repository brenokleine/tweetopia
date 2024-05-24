'use client'

import { useState, useCallback } from 'react'
import { Box, Input, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { Search2Icon, SmallCloseIcon } from '@chakra-ui/icons'
import PostCardList from './PostCardList'
import { debounce } from 'lodash'

const Feed = ({ posts }) => {
  const [searchText, setSearchText] = useState('')
  const [searchResults, setSearchResults] = useState(posts || [])

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
          <InputRightElement fontSize={'md'} onClick={() => handleSearchChange('')}>
            <SmallCloseIcon
              color='secondary'
              cursor='pointer'
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
