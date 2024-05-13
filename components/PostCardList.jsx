'use client';

import { useEffect, useState } from "react";
import PostCard from "./PostCard";

const PostCardList = ({ data, handleTagClick }) => {

  return (
    <div className='mt-10 flex flex-wrap gap-8 w-fit'>
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