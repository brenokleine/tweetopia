'use client';

import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import CreateQuoteForm from '../../components/CreateQuoteForm'

const CreateQuote = () => {
  
  const [submitting, setSubmitting] = useState(false)
  
  const [post, setPost] = useState({
    quote: '',
    tag: '',
  })

  useEffect(() => {
    console.log(post)
  }, [post])

  const createQuote = async (e) => {

  }
  
    return (
      <div className='p-10 w-full flex justify-center '>
          <CreateQuoteForm
              type="Create"
              post={post}
              setPost={setPost}
              submitting={submitting}
              handleSubmit={createQuote}
          />
    </div>
  )
}

export default CreateQuote