'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Profile from '../../components/Profile'

const MyProfile = () => {
  
    const { data: session } = useSession()
    const router = useRouter()

    const [posts, setPosts] = useState([])

    const handleEdit = () => {

    }

    const handleDelete = async () => {

    }

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await res.json();
            setPosts(data);
        }
        
        if(session?.user.id){
            fetchPosts();
        }
    }, [session])
  
    return (
    <div className='p-6'>
        <Profile
           userName={session?.user.name || "User"}
           desc="Software Engineer"
           image={session?.user.image}
           data={posts}
           handleEdit={handleEdit}
           handleDelete={handleDelete}
        />
    </div>
  )
}

export default MyProfile