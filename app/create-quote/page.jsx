'use client';

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import CreateQuoteForm from '../../components/CreateQuoteForm'

const CreateQuote = () => {

  const router = useRouter();
  const { data: session } = useSession();
  
  const [submitting, setSubmitting] = useState(false)
  
  const [post, setPost] = useState({
    quote: '',
    tag: '',
  })

  useEffect(() => {
    console.log(post)
  }, [post])

  const createQuote = async (e) => {
    e.preventDefault()
    setSubmitting(true)

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
          <CreateQuoteForm
              post={post}
              setPost={setPost}
              submitting={submitting}
              handleSubmit={createQuote}
              handleCancel={() => router.push('/')}
          />
    </div>
  )
}

export default CreateQuote