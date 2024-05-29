'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useParams, useRouter } from 'next/navigation'

import Profile from '@/components/Profile'
import LoadingSpinner from '@/components/LoadingSpinner'
import { Divider, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

const MyProfile = () => {
  
    const { data: session } = useSession()
    const router = useRouter()
    const { id } = useParams()
    
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const fetchAllData = async () => {
        setIsLoading(true)
        await fetchPosts()
        await fetchUser()
        setIsLoading(false)
    }

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
        fetchAllData()
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
            { isLoading ? (
                <div className="max-w-4xl mx-auto flex flex-col items-center md:items-start gap-4 p-4">
                    <div className='flex items-center w-full justify-start'>
                        <SkeletonCircle
                            size='100'
                            startColor='secondary'
                            endColor='tertiary'
                            mr={4}
                        />
                        
                        <div className='w-1/3'>
                            <Skeleton
                                height='30px'
                                startColor='secondary'
                                endColor='tertiary'
                            />
                        </div>
                    </div>
                    <div className="w-full">
                        <Divider />
                    </div>
                    <div className='w-full'>
                        <SkeletonText
                            noOfLines={4}
                            spacing='4'
                            skeletonHeight='10'
                            startColor='secondary'
                            endColor='tertiary'
                        />
                    </div>
                </div>
            ) : (
                <Profile
                    user={user}
                    image={user.image}
                    data={posts}
                    submitEditPost={(editedPost, postId) => submitEditPost(editedPost, postId)}
                    submitDeletePost={(postId) => submitDeletePost(postId)}
                />
            ) }
        </div>
    )
}

export default MyProfile