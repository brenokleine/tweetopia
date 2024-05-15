'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Profile from '../../components/Profile'

const MyProfile = () => {
  
    const { data: session } = useSession()
    const router = useRouter()

    const [posts, setPosts] = useState([])
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)

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

        const fetchUser = async () => {
            const res = await fetch(`/api/users/${session?.user.id}`);
            const data = await res.json();
            setUser(data);
        }
        
        if(session?.user.id){
            fetchPosts();
            fetchUser();
        }
    }, [session])
  
    return (
    <div className='p-6'>
        {!user && !posts && <p>Loading...</p>}
        {user && posts && (
            <Profile
                user={user}
                desc="Software Engineer"
                image={session?.user.image}
                data={posts}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
            />
        )}
    </div>
  )
}

export default MyProfile