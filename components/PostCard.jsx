'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { usePathname, useRouter } from 'next/navigation'

const PostCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  return (
    <div>PostCard</div>
  )
}

export default PostCard