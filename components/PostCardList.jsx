'use client';

import { useEffect, useState } from "react";
import PostCard from "./PostCard";

const PostCardList = ({ data, handleTagClick }) => {

  return (
    <div className=' grid grid-cols-1 gridBreakpoint:grid-cols-2 gap-8 items-center'>
        {data.map((post) => (
          <PostCard
            key={post._id}
            post={post}
            handleTagClick={(tag) => handleTagClick(tag)}
            handleEdit={() => {}}
            handleDelete={() => {}}
          />
        ))}
    </div>
  )
}

export default PostCardList