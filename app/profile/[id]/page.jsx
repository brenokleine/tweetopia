'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useParams, useRouter } from 'next/navigation'

import Profile from '@/components/Profile'

const MyProfile = () => {

    const { data: session } = useSession()
    const router = useRouter()
    const { id } = useParams()

    const [posts, setPosts] = useState([])
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(false)

    const fetchPosts = async () => {
        const res = await fetch(`/api/users/${id}/posts`);
        const data = await res.json();
        setPosts(data);
    }

    const fetchUser = async () => {
        const res = await fetch(`/api/users/${id}`);
        const data = await res.json();
        setUser(data);
    }

    useEffect(() => {
        fetchPosts();
        fetchUser();
    }, [session])

    return (
        <div>
            {user && posts && (
                <Profile
                    user={user}
                    image={user.image}
                    data={posts}
                />
            )}
        </div>
    )
}

export default MyProfile