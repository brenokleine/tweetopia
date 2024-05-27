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

    const submitEditPost = async (editedPost, postId) => {

        if (!postId) return alert('Error: Post Id not found')

        if (editedPost.quote.length === 0) {
            window.alert('Quotes cannot be empty!')
            return
        }

        try {
            const res = await fetch(`/api/quote/${postId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    quote: editedPost.quote,
                    tag: editedPost.tag,
                }),
            })

            if (res.ok) {
                fetchPosts();
            }

        } catch (error) {
            console.log("Error creating quote: ", error)
        
        }
    }

    const submitDeletePost = async (postId) => {
        if (!postId) return alert('Error: Post Id not found')

        try {
            const res = await fetch(`/api/quote/${postId}`, {
                method: 'DELETE',
            })

            if (res.ok) {
                fetchPosts();
            }

        } catch (error) {
            console.log("Error deleting quote: ", error)
        }
    }
  
    return (
        <div>
            {user && posts && (
                <Profile
                    user={user}
                    image={user.image}
                    data={posts}
                    submitEditPost={(editedPost, postId) => submitEditPost(editedPost, postId)}
                    submitDeletePost={(postId) => submitDeletePost(postId)}
                />
            )}
        </div>
    )
}

export default MyProfile