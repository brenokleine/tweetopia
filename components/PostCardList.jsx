'use client';

import PostCard from './PostCard'

const PostCardList = ({ data, handleTagClick }) => {
  return (
    <div className='w-full flex justify-center gap-10 flex-wrap'>
      {data.map((post) => (
        <PostCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

export default PostCardList