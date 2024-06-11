'use client';

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import QuoteForm from '@/components/QuoteForm'
import LoadingSpinner from '@/components/LoadingSpinner';

const CreateQuote = () => {

  const router = useRouter();
  const { data: session, status } = useSession();
  
  const [submitting, setSubmitting] = useState(false)
  
  const [post, setPost] = useState({
    quote: '',
    tag: '',
  })

  const handleUserNotAuthenticated = () => {
    router.push('/quotes')
    window.alert('You must be logged in to create a quote!')
  }

  const handlePostChange = (newPost) => {
    //limits the amount of characters to 500
    let quote = newPost.quote

    if(quote.length <= 300){
      setPost(newPost)
    } else {
      window.alert('You have reached the maximum amount of 300 characters')
    }
  }

  useEffect(() => {
    console.log(post)
  }, [post])

  const createQuote = async (e) => {
    e.preventDefault()
    setSubmitting(true)

    if(post.quote.length === 0) {
      window.alert('Quotes cannot be empty!')
      return
    }

    try {
      const res = await fetch('/api/quote/new', {
        method: 'POST',
        body: JSON.stringify({
          quote: post.quote,
          tag: post.tag,
          userId: session?.user.id
        }),
      })

      if(res.ok){
        router.push('/quotes')
      }
    } catch (error) {
      console.log("Error creating quote: ", error)
    } finally {
      setSubmitting(false)
    }
  }
  
    return (
      <div className='w-full flex justify-center '>
          {status === 'authenticated' && (
            <QuoteForm
              post={post}
              handlePostChange={handlePostChange}
              submitting={submitting}
              handleSubmit={createQuote}
              handleCancel={() => router.push('/quotes')}
              action={'Create'}
            />
          )}
          {status === 'loading' && (
            <LoadingSpinner/>
          )}
          {status === 'unauthenticated' && handleUserNotAuthenticated()}
    </div>
  )
}

export default CreateQuote