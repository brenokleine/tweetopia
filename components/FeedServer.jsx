import React from 'react'
import Feed from './Feed'

const fetchPosts = async () => {
    const res = await fetch('https://tweetopia-me.vercel.app/api/quote');
    const data = await res.json();
    return data;
}

const FeedServer = async () => {
    const initialPosts = await fetchPosts()

    return (
        <div className='w-full flex justify-center'>
            <Feed posts={initialPosts} />
        </div>
    )
}

export default FeedServer
