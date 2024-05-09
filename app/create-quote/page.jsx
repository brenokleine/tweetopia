'use client';

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Form from '../../components/Form'

const CreateQuote = () => {
  const [submitting, setSubmitting] = useState(false)
  const [post, setPost] = useState({
    quote: '',
    tag: '',
  })

  const createQuote = async (e) => {

  }
  
    return (
    <div className='p-10'>
        <Form
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