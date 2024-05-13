'use client';

import { useEffect, useState } from "react";
import PostCard from "./PostCard";

const PostCardList = ({ data, handleTagClick }) => {

  return (
    <div className='w-full flex flex-wrap gap-8'>
        {data.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
            handleEdit={() => {}}
            handleDelete={() => {}}
          />
        ))}
    </div>
  )
}

export default PostCardList