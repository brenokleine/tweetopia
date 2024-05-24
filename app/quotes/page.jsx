import Feed from '@/components/Feed'
import React from 'react'

const fetchPosts = async () => {
  const res = await fetch('/api/quote');
  const data = await res.json();
}

const Quotes = () => {

  const initialPosts = async () => await fetchPosts();

  return (
    <div className='w-full flex justify-center'>
        <Feed
          posts={initialPosts}
        />
    </div>
  )
}

export default Quotes