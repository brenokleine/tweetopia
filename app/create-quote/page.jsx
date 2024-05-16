'use client';

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import QuoteForm from '../../components/QuoteForm'

const CreateQuote = () => {

  const router = useRouter();
  const { data: session } = useSession();
  
  const [submitting, setSubmitting] = useState(false)
  
  const [post, setPost] = useState({
    quote: '',
    tag: '',
  })

  const handlePostChange = (newPost) => {
    //limits the amount of characters to 500
    let quote = newPost.quote

    if(quote.length <= 500){
      setPost(newPost)
    } else {
      window.alert('You have reached the maximum amount of 500 characters')
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
        router.push('/')
      }
    } catch (error) {
      console.log("Error creating quote: ", error)
    } finally {
      setSubmitting(false)
    }
  }
  
    return (
      <div className='p-10 w-full flex justify-center '>
          <QuoteForm
              post={post}
              handlePostChange={handlePostChange}
              submitting={submitting}
              handleSubmit={createQuote}
              handleCancel={() => router.push('/')}
              action={'Create'}
          />
    </div>
  )
}

export default CreateQuote