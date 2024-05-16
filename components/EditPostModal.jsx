'use client'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
} from '@chakra-ui/react'
import { useState } from 'react'
import QuoteForm from './QuoteForm'

const EditPostModal = ({ isOpen, onClose, onSubmit, post }) => {

    const [editedPost, setEditedPost] = useState({
        quote: post.quote,
        tag: post.tag,
    })

    const handlePostChange = (newPost) => {
        //limits the amount of characters to 500
        let quote = newPost.quote

        if (quote.length <= 500) {
            setEditedPost(newPost)
            console.log(newPost)
        } else {
            window.alert('You have reached the maximum amount of 500 characters')
        }
    }

  return (
    <div >
          <Modal 
            isOpen={isOpen} 
            onClose={onClose} 
            isCentered 
            motionPreset='scale'
            size={'xl'}
        >
              <ModalOverlay />
              <ModalContent>
                <QuoteForm
                    post={editedPost}
                    handlePostChange={handlePostChange}
                    //submitting={submitting}
                    handleSubmit={() => onSubmit(editedPost)}
                    handleCancel={onClose}
                    action={'Edit'}
                />
              </ModalContent>
          </Modal>
    </div>
  )
}

export default EditPostModal